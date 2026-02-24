import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f37626;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9e6bb0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="15" fill="#1e1e1e"/>
  <circle cx="50" cy="25" r="8" fill="#f37626"/>
  <circle cx="50" cy="75" r="8" fill="#9e6bb0"/>
  <path d="M 35 25 Q 25 50 35 75" stroke="url(#gradient)" stroke-width="4" fill="none"/>
  <path d="M 65 25 Q 75 50 65 75" stroke="url(#gradient)" stroke-width="4" fill="none"/>
  <rect x="30" y="38" width="40" height="4" rx="2" fill="#d4d4d4"/>
  <rect x="30" y="48" width="30" height="4" rx="2" fill="#d4d4d4"/>
  <rect x="30" y="58" width="35" height="4" rx="2" fill="#d4d4d4"/>
</svg>`;

async function convertSvgToPng() {
  const inputPath = resolve(__dirname, 'icon.svg');
  const outputPath = resolve(__dirname, 'icon.png');

  // Read SVG content and convert to PNG
  const pngBuffer = await sharp(Buffer.from(svgContent))
    .resize(256, 256) // Standard size for plugin icons
    .png()
    .toBuffer();

  writeFileSync(outputPath, pngBuffer);
  
  // Get file size
  const sizeKB = (pngBuffer.length / 1024).toFixed(2);
  console.log(`Created icon.png (${sizeKB} KB)`);
  
  if (parseFloat(sizeKB) > 50) {
    console.warn('Warning: Icon size exceeds 50KB limit!');
  }
}

convertSvgToPng().catch(console.error);
