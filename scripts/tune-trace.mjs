/** Tries a few tracer settings on one illustration so the trade-off between
 *  file size and fidelity can be seen before committing to all thirty. */
import fs from 'node:fs';
import path from 'node:path';
import { vectorize, optimize, ColorMode, Hierarchical, PathSimplifyMode, OptimizePreset } from '@neplex/vectorizer';

const IN = process.env.TRACE_IN ?? path.resolve('.trace-src');
const OUT = process.env.TUNE_OUT ?? path.resolve('.trace-tune');
const FILE = process.argv[2] ?? '01-growth-momentum.png';

const base = {
  colorMode: ColorMode.Color,
  hierarchical: Hierarchical.Stacked,
  colorPrecision: 8,
  layerDifference: 8,
  mode: PathSimplifyMode.Spline,
  maxIterations: 10,
};

const VARIANTS = {
  a: { ...base, filterSpeckle: 6, cornerThreshold: 60, lengthThreshold: 4, spliceThreshold: 45, pathPrecision: 2 },
  b: { ...base, filterSpeckle: 20, cornerThreshold: 70, lengthThreshold: 8, spliceThreshold: 60, pathPrecision: 1 },
  c: { ...base, filterSpeckle: 40, cornerThreshold: 80, lengthThreshold: 12, spliceThreshold: 70, pathPrecision: 1 },
  d: { ...base, filterSpeckle: 64, cornerThreshold: 90, lengthThreshold: 16, spliceThreshold: 80, pathPrecision: 1 },
};

fs.mkdirSync(OUT, { recursive: true });
const buf = fs.readFileSync(path.join(IN, FILE));

for (const [name, cfg] of Object.entries(VARIANTS)) {
  let svg = await vectorize(buf, cfg);
  const w = Number((svg.match(/width="(\d+)"/) || [])[1]);
  const h = Number((svg.match(/height="(\d+)"/) || [])[1]);
  const rawKb = Buffer.byteLength(svg) / 1024;

  svg = svg.replace(/<path[^>]*fill="#ffffff"[^>]*\/>\s*/gi, '');
  svg = svg.replace(/<svg[^>]*>/, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none">`);

  let opt = svg;
  try {
    opt = await optimize(svg, { preset: OptimizePreset.Default, multipass: true });
  } catch (e) {
    console.error(`  (optimize failed for ${name}: ${e.message})`);
  }

  fs.writeFileSync(path.join(OUT, `${name}.svg`), opt, 'utf8');
  console.log(
    `${name}  paths ${String((opt.match(/<path/g) || []).length).padStart(4)}` +
      `  raw ${rawKb.toFixed(0).padStart(4)} KB  ->  optimised ${(Buffer.byteLength(opt) / 1024).toFixed(0).padStart(4)} KB`,
  );
}
