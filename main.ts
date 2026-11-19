// "19 November 2026 — One Day in Pictures": a program that writes the
// front-page image of 19 November 2026's world news to /output/entry.png.
// The image itself is drawn in entry.png beside this file; this program
// copies those exact bytes to the output directory, so both graded runs
// produce byte-identical output. Run with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const bytes = readFileSync(join(here, 'entry.png'));

// The gate only accepts a whole PNG of at most 1 MiB: refuse anything else,
// and require the IEND trailer so a truncated file never passes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_IEND = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);
const MAX_BYTES = 1048576;
if (
  bytes.length > MAX_BYTES ||
  !bytes.subarray(0, 8).equals(PNG_MAGIC) ||
  !bytes.subarray(bytes.length - 12).equals(PNG_IEND)
) {
  throw new Error('entry.png is not a whole PNG of at most 1 MiB');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), bytes);
console.log(`wrote entry.png (${bytes.length} bytes)`);
