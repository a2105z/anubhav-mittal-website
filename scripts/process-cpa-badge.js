/**
 * Take the CPA badge image (blue badge on solid black background),
 * trim the black borders, center-crop to a square, and apply a
 * circular alpha mask so the badge sits cleanly on a white card
 * with no black rectangle around it.
 *
 * Usage: node scripts/process-cpa-badge.js <src> <dest>
 */
const sharp = require("sharp");

const src = process.argv[2];
const dest = process.argv[3];
if (!src || !dest) {
  console.error("usage: node scripts/process-cpa-badge.js <src> <dest>");
  process.exit(1);
}

(async () => {
  const trimmed = await sharp(src)
    .trim({ threshold: 15 })
    .toBuffer();

  const { width, height } = await sharp(trimmed).metadata();
  const size = Math.min(width, height);
  const left = Math.floor((width - size) / 2);
  const top = Math.floor((height - size) / 2);

  const squared = await sharp(trimmed)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="${size / 2}" cy="${size / 2}" r="${(size / 2) - 1}" fill="white"/>` +
      `</svg>`
  );

  await sharp(squared)
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toFile(dest);

  const outMeta = await sharp(dest).metadata();
  console.log(`output: ${outMeta.width}x${outMeta.height} PNG (transparent) -> ${dest}`);
})();
