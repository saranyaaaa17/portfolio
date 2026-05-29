const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public', 'screenshots');
const outDir = srcDir;

(async () => {
  const files = fs.readdirSync(srcDir).filter(f => /\.png$/i.test(f));
  const meta = {};

  for (const file of files) {
    const inPath = path.join(srcDir, file);
    const base = path.parse(file).name;
    const webpOut = path.join(outDir, base + '.webp');

    await sharp(inPath)
      .webp({ quality: 80 })
      .toFile(webpOut);

    const lqipBuffer = await sharp(inPath)
      .resize(32)
      .blur()
      .jpeg({ quality: 50 })
      .toBuffer();

    const lqip = 'data:image/jpeg;base64,' + lqipBuffer.toString('base64');

    meta['/screenshots/' + file] = {
      webp: '/screenshots/' + base + '.webp',
      lqip
    };
  }

  const outTs = `export const imageMeta = ${JSON.stringify(meta, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'imageMeta.ts'), outTs);
  console.log('Generated WebP files and imageMeta.ts');
})();
