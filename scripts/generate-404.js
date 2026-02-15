import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

async function create404() {
  try {
    await fs.copyFile(
      path.join(distDir, 'index.html'),
      path.join(distDir, '404.html')
    );
    console.log('✅ Created 404.html for GitHub Pages SPA support');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn('⚠️  dist/index.html not found. Make sure to run build first.');
    } else {
      console.error('❌ Failed to create 404.html:', err);
      process.exit(1);
    }
  }
}

create404();
