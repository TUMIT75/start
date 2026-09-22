/**
 * Traces the approved illustrations into SVG.
 *
 * The reference sheets are 1536 x 1024, so each illustration holds roughly
 * 290 x 230 real pixels. Upscaling a raster that small is always going to look
 * soft at hero size, so the shapes are traced into vector instead: identical
 * artwork, sharp at any size, and a fraction of the weight.
 *
 * Input comes from prep.ps1, which crops each illustration out of its sheet at
 * 4x and snaps every pixel to the brand palette. Quantising first is what makes
 * the trace clean — the tracer sees five flat regions rather than thousands of
 * anti-aliased shades.
 *
 *   powershell -File scripts/prep-illustrations.ps1
 *   node scripts/trace-illustrations.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {
  vectorize, optimize, ColorMode, Hierarchical, PathSimplifyMode, OptimizePreset,
} from '@neplex/vectorizer';

const IN = process.env.TRACE_IN ?? path.resolve('.trace-src');
// TRACE_OUT lets a trial run land somewhere other than the live folder
const OUT = path.resolve(process.env.TRACE_OUT ?? 'public/illustrations');

/* Settled by scripts/tune-trace.mjs. Looser than the default keeps the curve
   count sane without visibly simplifying the drawing; tighter than this and
   arms and faces start merging into their neighbours. */
const CONFIG = {
  colorMode: ColorMode.Color,
  hierarchical: Hierarchical.Stacked,
  filterSpeckle: 16,
  colorPrecision: 8,
  layerDifference: 8,
  mode: PathSimplifyMode.Spline,
  cornerThreshold: 68,
  lengthThreshold: 6,
  maxIterations: 10,
  spliceThreshold: 55,
  pathPrecision: 1,
};

/** the palette the sources were quantised to.
 *  The two mint tints only appear on the 20 September sheet, which draws soft
 *  discs behind its figures and a skyline in muted teal. #007A31 is the darker
 *  tint the forest-green shapes (chart bars, hillsides) now keep. */
const PALETTE = ['#FFFFFF', '#E6F6EE', '#E6E6E6', '#A9DCC5', '#B4B4B4', '#2E2E2E', '#00C853', '#007A31'];
/** Prep colours -> the brand's. The prep quantises to fixed working colours;
 *  this is where they become the client's palette, so a change of brand green
 *  is one line here (and the matching step in tailwind.config.ts). */
const BRAND = {
  '#00C853': '#00B050', // primary green
  '#E6F6EE': '#EAF7EE', // light tint
};

const hexToRgb = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];
const PAL_RGB = PALETTE.map(hexToRgb);

/** snap any fill the tracer emits back onto the palette */
function snap(hex) {
  const full =
    hex.length === 4 ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;
  const c = hexToRgb(full);
  let best = 0;
  let bestD = Infinity;
  PAL_RGB.forEach((p, i) => {
    const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2 + (p[2] - c[2]) ** 2;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  });
  return PALETTE[best];
}

async function trace(buf, hierarchical) {
  let svg = await vectorize(buf, { ...CONFIG, hierarchical });

  const w = Number((svg.match(/width="(\d+)"/) || [])[1]);
  const h = Number((svg.match(/height="(\d+)"/) || [])[1]);

  svg = svg.replace(/fill="(#[0-9A-Fa-f]{3,6})"/g, (_m, hex) => {
    const c = snap(hex);
    return `fill="${BRAND[c] ?? c}"`;
  });
  // the sheet's paper is transparent in the source; drop anything traced for it
  svg = svg.replace(/<path[^>]*fill="#FFFFFF"[^>]*\/>\s*/g, '');
  svg = svg
    .replace(/<svg[^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none">`)
    .trim();
  return { svg, w, h };
}

async function optimised(svg) {
  try {
    return await optimize(svg, { preset: OptimizePreset.Default, multipass: true });
  } catch (e) {
    console.error(`  (optimise skipped: ${e.message})`);
    return null;
  }
}

/**
 * How much of the trace disagrees with its source, as a fraction of pixels.
 *
 * Nothing in an SVG says it is wrong, and twice it was: on new-37 the woman
 * vanished under the mint disc, and on new-35 the laptop in his hands turned
 * into a black slab. Both came from the optimiser, which merges same-coloured
 * paths and in doing so can move a shape to the wrong depth. So every trace is
 * drawn back out and compared with the image it came from.
 */
async function mismatch(svg, png, w) {
  const size = 360;
  const h = Math.round((size * (Number(svg.match(/viewBox="0 0 [\d.]+ ([\d.]+)"/)[1]))) / w);
  const [a, b] = await Promise.all([
    sharp(Buffer.from(svg), { density: 72 * (size / w) * 4 }).resize(size, h, { fit: 'fill' })
      .flatten({ background: '#ffffff' }).raw().toBuffer(),
    sharp(png).resize(size, h, { fit: 'fill' }).flatten({ background: '#ffffff' }).raw().toBuffer(),
  ]);
  let off = 0;
  for (let i = 0; i < a.length; i += 3) {
    const d = Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]);
    if (d > 150) off++;
  }
  return off / (a.length / 3);
}

const files = fs.readdirSync(IN).filter((f) => f.endsWith('.png')).sort();
fs.mkdirSync(OUT, { recursive: true });

/**
 * The smallest faithful version of one tracing mode: optimised if the
 * optimiser left the picture alone, the raw trace if it did not.
 */
async function best(buf, hierarchical, label) {
  const { svg: raw, w, h } = await trace(buf, hierarchical);
  const rawOff = await mismatch(raw, buf, w);
  const opt = await optimised(raw);
  if (opt) {
    const optOff = await mismatch(opt, buf, w);
    if (optOff <= rawOff + 0.003) return { svg: opt, off: optOff, w, h, mode: label };
  }
  return { svg: raw, off: rawOff, w, h, mode: `${label}, unoptimised` };
}

let totalOut = 0;
let fallbacks = 0;
for (const file of files) {
  const buf = fs.readFileSync(path.join(IN, file));
  let pick = await best(buf, Hierarchical.Stacked, 'stacked');

  // cutout mode has no stacking to get wrong; it is the fallback rather than
  // the default because adjacent colours can show a hairline seam in it
  if (pick.off > 0.015) {
    const alt = await best(buf, Hierarchical.Cutout, 'cutout');
    if (alt.off < pick.off) pick = alt;
  }
  if (pick.mode !== 'stacked') fallbacks++;
  const { svg, off, w, h, mode } = pick;

  const out = path.join(OUT, file.replace(/\.png$/, '.svg'));
  fs.writeFileSync(out, svg + '\n', 'utf8');
  totalOut += Buffer.byteLength(svg);

  const paths = (svg.match(/<path/g) || []).length;
  console.log(
    `  ${file.replace('.png', '').padEnd(30)} ${String(w).padStart(5)}x${String(h).padEnd(5)} ` +
      `${String(paths).padStart(4)} paths  ${(Buffer.byteLength(svg) / 1024).toFixed(0).padStart(4)} KB` +
      `  ${(off * 100).toFixed(1).padStart(4)}% off  ${mode}${off > 0.015 ? '  CHECK' : ''}`,
  );
}

console.log(`\n${files.length} traced (${fallbacks} needed a fallback), ${(totalOut / 1024 / 1024).toFixed(1)} MB of SVG`);
