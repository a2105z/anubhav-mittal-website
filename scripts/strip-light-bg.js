/* eslint-disable */
// Remove a near-white / light-gray background from a PNG by setting matching
// pixels to transparent. Used to clean brand assets that ship with a flat
// near-white canvas (e.g. Google's color "G" on a #F0–F2 background).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const target = process.argv[2];
if (!target) {
  console.error("usage: node scripts/strip-light-bg.js <relative-png>");
  process.exit(1);
}

const INPUT = path.resolve(__dirname, "..", target);
const OUTPUT = INPUT;
const THRESHOLD = 235; // pixels with min(r,g,b) >= this become transparent
const FEATHER = 12; // soft edge band

(async () => {
  const img = sharp(INPUT).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const min = Math.min(r, g, b);
    if (min >= THRESHOLD) {
      data[i + 3] = 0;
    } else if (min >= THRESHOLD - FEATHER) {
      const t = (THRESHOLD - min) / FEATHER;
      data[i + 3] = Math.round(255 * t);
    }
  }
  await sharp(data, { raw: info })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT + ".tmp");
  fs.renameSync(OUTPUT + ".tmp", OUTPUT);
  console.log(`stripped near-white bg: ${target}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
