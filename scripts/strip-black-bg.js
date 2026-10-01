/* eslint-disable */
// Removes the black background from a PNG by setting near-black pixels to
// fully transparent. Used to clean the ADM brand asset, which ships with a
// solid black canvas.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const INPUT = path.resolve(
  __dirname,
  "..",
  "public",
  "icons",
  "organizations",
  "adm.png"
);
const OUTPUT = INPUT;
const THRESHOLD = 32;
const FEATHER = 24;

(async () => {
  const img = sharp(INPUT).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    if (max <= THRESHOLD) {
      data[i + 3] = 0;
    } else if (max <= THRESHOLD + FEATHER) {
      const t = (max - THRESHOLD) / FEATHER;
      data[i + 3] = Math.round(255 * t);
    }
  }
  await sharp(data, { raw: info })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT + ".tmp");
  fs.renameSync(OUTPUT + ".tmp", OUTPUT);
  console.log("ADM logo: black bg stripped, edges feathered, trimmed");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
