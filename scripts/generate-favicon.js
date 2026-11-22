/* eslint-disable */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico").default;

const SVG = fs.readFileSync(
  path.join(__dirname, "..", "public", "favicon.svg")
);
const OUT = path.join(__dirname, "..", "public");

async function render(size, file) {
  const buf = await sharp(SVG, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT, file), buf);
  return buf;
}

(async () => {
  const sizes = [16, 32, 48, 180, 192, 512];
  const buffers = {};
  for (const s of sizes) {
    const buf = await sharp(SVG, { density: 384 })
      .resize(s, s)
      .png({ compressionLevel: 9 })
      .toBuffer();
    buffers[s] = buf;
  }

  fs.writeFileSync(path.join(OUT, "logo192.png"), buffers[192]);
  fs.writeFileSync(path.join(OUT, "logo512.png"), buffers[512]);
  fs.writeFileSync(path.join(OUT, "apple-touch-icon.png"), buffers[180]);

  const icoTmp = [16, 32, 48].map((s) => {
    const p = path.join(OUT, `_tmp_${s}.png`);
    fs.writeFileSync(p, buffers[s]);
    return p;
  });
  const icoBuf = await pngToIco(icoTmp);
  fs.writeFileSync(path.join(OUT, "favicon.ico"), icoBuf);
  for (const p of icoTmp) fs.unlinkSync(p);

  console.log("favicon.ico, favicon.svg, logo192.png, logo512.png, apple-touch-icon.png written");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
