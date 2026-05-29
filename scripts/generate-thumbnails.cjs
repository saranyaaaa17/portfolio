const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function make(title, filename) {
  const svg = `
  <svg width="1400" height="800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#06b6d4"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)" />
    <text x="50%" y="50%" font-family="Inter, Arial" font-size="72" fill="#fff" text-anchor="middle">${title}</text>
  </svg>
  `;

  const out = path.join(outDir, filename);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log('Wrote', out);
}

(async () => {
  await make('AUREON', 'aureon.png');
  await make('devconnect', 'devconnect.png');
  await make('YouTube Clone', 'youtubeclone.png');
  process.exit(0);
})();
