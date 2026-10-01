/**
 * Enhance a hazy headshot without altering the subject.
 * Pure signal-processing (sharp / libvips): upscale with Lanczos3,
 * unsharp-mask, gentle local contrast, subtle saturation lift.
 *
 * Usage:  node scripts/enhance-headshot.js <src> <dest>
 */
const path = require("path");
const sharp = require("sharp");

const src = process.argv[2];
const dest = process.argv[3];

if (!src || !dest) {
  console.error("usage: node scripts/enhance-headshot.js <src> <dest>");
  process.exit(1);
}

(async () => {
  const meta = await sharp(src).metadata();
  console.log(`source: ${meta.width}x${meta.height} (${meta.format})`);

  await sharp(src)
    .rotate()
    .resize({ width: 1400, kernel: sharp.kernel.lanczos3, withoutEnlargement: false })
    .modulate({ brightness: 1.03, saturation: 1.08 })
    .linear(1.09, -6)
    .sharpen({ sigma: 1.4, m1: 1.0, m2: 2.4 })
    .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(dest);

  const outMeta = await sharp(dest).metadata();
  const outSize = require("fs").statSync(dest).size;
  console.log(`output: ${outMeta.width}x${outMeta.height} @ ${outSize} bytes -> ${path.relative(process.cwd(), dest)}`);
})();
