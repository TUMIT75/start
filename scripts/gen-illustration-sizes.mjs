/**
 * Records each illustration's intrinsic size for components/Illustration.tsx.
 *
 * The browser needs width and height on the tag to reserve the box before the
 * file arrives, and an SVG's viewBox is not read until it loads, so the numbers
 * are taken from the file here and shipped as JSON.
 *
 *   node scripts/gen-illustration-sizes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve('public/illustrations');
const OUT = path.resolve('lib/illustration-sizes.json');

const out = {};
let skipped = 0;

for (const f of fs.readdirSync(DIR).sort()) {
  const full = path.join(DIR, f);

  if (f.endsWith('.svg')) {
    const svg = fs.readFileSync(full, 'utf8');
    // the origin is not always 0 0: pad-illustrations.mjs widens the canvas
    // round the drawing, so the box can start at a negative offset
    const vb = svg.match(/viewBox="[-\d.]+ [-\d.]+ ([\d.]+) ([\d.]+)"/);
    if (vb) {
      out[`/illustrations/${f}`] = { w: Math.round(+vb[1]), h: Math.round(+vb[2]) };
      continue;
    }
    const w = svg.match(/\bwidth="(\d+)"/);
    const h = svg.match(/\bheight="(\d+)"/);
    if (w && h) { out[`/illustrations/${f}`] = { w: +w[1], h: +h[1] }; continue; }
    skipped++;
    console.error(`  no size in ${f}`);
  } else if (f.endsWith('.png')) {
    const buf = fs.readFileSync(full); // IHDR width/height live at 16 and 20
    out[`/illustrations/${f}`] = { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
}

fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`sizes written for ${Object.keys(out).length} files${skipped ? `, ${skipped} skipped` : ''}`);
