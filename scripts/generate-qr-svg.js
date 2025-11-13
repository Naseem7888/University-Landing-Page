import QRCode from 'qrcode';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  const outPath = join(__dirname, '..', 'public', 'qr-apply.svg');
  const url = 'https://whyq.edu/apply';
  const svgString = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 1,
    color: { dark: '#000000', light: '#FFFFFFFF' },
    width: 150
  });
  writeFileSync(outPath, svgString, 'utf8');
  console.log('✅ QR SVG generated at:', outPath);
}

run().catch((e) => { console.error(e); process.exit(1); });
