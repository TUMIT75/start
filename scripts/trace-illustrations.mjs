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
import {
  vectorize, optimize, ColorMode, Hierarchical, PathSimplifyMode, OptimizePreset,
} from '@neplex/vectorizer';

const IN = process.env.TRACE_IN ?? path.resolve('.trace-src');
const OUT = path.resolve('public/illustrations');

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

/** the palette the sources were quantised to */
const PALETTE = ['#FFFFFF', '#E6E6E6', '#B4B4B4', '#2E2E2E', '#00C853'];
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

const files = fs.readdirSync(IN).filter((f) => f.endsWith('.png')).sort();
fs.mkdirSync(OUT, { recursive: true });

let totalOut = 0;
for (const file of files) {
  const buf = fs.readFileSync(path.join(IN, file));
  let svg = await vectorize(buf, CONFIG);

  const w = Number((svg.match(/width="(\d+)"/) || [])[1]);
  const h = Number((svg.match(/height="(\d+)"/) || [])[1]);

  svg = svg.replace(/fill="(#[0-9A-Fa-f]{3,6})"/g, (_m, hex) => `fill="${snap(hex)}"`);
  // the sheet's paper is transparent in the source; drop anything traced for it
  svg = svg.replace(/<path[^>]*fill="#FFFFFF"[^>]*\/>\s*/g, '');
  svg = svg
    .replace(/<svg[^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none">`)
    .trim();

  try {
    svg = await optimize(svg, { preset: OptimizePreset.Default, multipass: true });
  } catch (e) {
    console.error(`  (optimise skipped for ${file}: ${e.message})`);
  }

  const out = path.join(OUT, file.replace(/\.png$/, '.svg'));
  fs.writeFileSync(out, svg + '\n', 'utf8');
  totalOut += Buffer.byteLength(svg);

  const paths = (svg.match(/<path/g) || []).length;
  console.log(
    `  ${file.replace('.png', '').padEnd(30)} ${String(w).padStart(5)}x${String(h).padEnd(5)} ` +
      `${String(paths).padStart(4)} paths  ${(Buffer.byteLength(svg) / 1024).toFixed(0).padStart(4)} KB`,
  );
}

console.log(`\n${files.length} traced, ${(totalOut / 1024 / 1024).toFixed(1)} MB of SVG`);
