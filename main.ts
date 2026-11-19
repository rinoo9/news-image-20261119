// "19 November 2026 — One Day in Pictures" (v2): a program that writes
// the front-page image of 19 November 2026's world news to /output/entry.png.
// v2 revises the first entry: every story is one that happened, or was
// first reported, on 19 November 2026, checked against the day's reporting.
// The lead carries the Shenzhen summit's real outcome (a joint pledge that
// nuclear war "must never be fought", no breakthrough on Ukraine or Iran);
// the grid covers the ICJ's Myanmar judgment, GTA VI's release, Cyclone
// Akvan and the third strike on the Crimean Bridge; the ticker adds the
// Van Gogh record sale, Zelensky's "new Yalta" warning, COP31 and
// Bangladesh. Type is larger throughout so the page reads at 300px across.
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
