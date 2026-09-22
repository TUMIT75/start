/**
 * Gives every illustration the same breathing room.
 *
 * The 21 September note asks for the subject to fill about 75-85% of its
 * canvas "so the illustrations feel consistent in scale". Cut straight from the
 * sheets, they filled around 94% — edge to edge, with no air — so this widens
 * each viewBox until the drawing spans 83% of it. The paths are not touched;
 * the canvas just grows round them, keeping its aspect ratio so the size tiers
 * in globals.css still fit.
 *
 * A drawing that runs off an edge of its tile (a figure cut at the waist, a
 * skyline cut by the frame) stays flush to that edge. Centring it would leave a
 * straight cut floating in white space, which reads as a broken image.
 *
 * Safe to run again: a drawing already inside 75-85% is left alone.
 *
 *   node scripts/pad-illustrations.mjs          # all of public/illustrations
 *   node scripts/pad-illustrations.mjs --dry    # report only
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIR = path.resolve('public/illustrations');
const TARGET = 0.83; // inside the band, and as little exposed cut edge as it allows
const LOW = 0.75;
const HIGH = 0.85;
const EDGE = 0.012; // ink this close to a side counts as touching it
const DRY = process.argv.includes('--dry');

const VIEWBOX = /viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/;

async function inkBox(svg, vw, vh) {
  const W = 600;
  const H = Math.round((W * vh) / vw);
  const { data } = await sharp(Buffer.from(svg), { density: Math.max(72, (72 * W) / vw) })
    .resize(W, H, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let x0 = W, y0 = H, x1 = -1, y1 = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4 + 3] > 40) {
        if (x < x0) x0 = x; if (x > x1) x1 = x;
        if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
    }
  }
  if (x1 < 0) return null;
  // back into viewBox units
  const k = vw / W;
  return { x: x0 * k, y: y0 * k, w: (x1 - x0 + 1) * k, h: (y1 - y0 + 1) * k };
}

const r1 = (n) => Math.round(n * 10) / 10;

let padded = 0;
let already = 0;
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.svg')).sort();

for (const f of files) {
  const file = path.join(DIR, f);
  const svg = fs.readFileSync(file, 'utf8');
  const m = svg.match(VIEWBOX);
  if (!m) { console.error(`  no viewBox in ${f}`); continue; }
  const [ox, oy, vw, vh] = m.slice(1).map(Number);

  const box = await inkBox(svg, vw, vh);
  if (!box) { console.error(`  empty drawing: ${f}`); continue; }

  const spanW = box.w / vw;
  const spanH = box.h / vh;
  const span = Math.max(spanW, spanH);
  if (span >= LOW && span <= HIGH) { already++; continue; }

  const s = span / TARGET;
  const nw = vw * s;
  const nh = vh * s;

  // box.x / box.y are relative to the current viewBox origin
  const bx = ox + box.x;
  const by = oy + box.y;
  const left = box.x <= vw * EDGE;
  const right = box.x + box.w >= vw * (1 - EDGE);
  const top = box.y <= vh * EDGE;
  const bottom = box.y + box.h >= vh * (1 - EDGE);

  let nx;
  if (left && !right) nx = bx;
  else if (right && !left) nx = bx + box.w - nw;
  else nx = bx + box.w / 2 - nw / 2;

  let ny;
  if (bottom && !top) ny = by + box.h - nh;
  else if (top && !bottom) ny = by;
  else ny = by + box.h / 2 - nh / 2;

  const edges = [left && 'left', right && 'right', top && 'top', bottom && 'bottom'].filter(Boolean).join('+') || 'none';
  console.log(
    `  ${f.replace('.svg', '').padEnd(34)} ${String(Math.round(span * 100)).padStart(3)}% -> 83%` +
      `   flush: ${edges}`,
  );

  if (!DRY) {
    const out = svg.replace(VIEWBOX, `viewBox="${r1(nx)} ${r1(ny)} ${r1(nw)} ${r1(nh)}"`);
    fs.writeFileSync(file, out, 'utf8');
  }
  padded++;
}

console.log(`\n${padded}${DRY ? ' would be' : ''} padded, ${already} already in the 75-85% band`);
