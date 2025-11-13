import QRCode from 'qrcode';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function run() {
  const outPath = join(__dirname, '..', 'public', 'qr-apply.png');
  const url = 'https://whyq.edu/apply';
  const options = {
    width: 150,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#FFFFFFFF'
    },
    errorCorrectionLevel: 'H'
  };
  const buffer = await QRCode.toBuffer(url, options);
  writeFileSync(outPath, buffer);
  console.log('✅ QR generated at:', outPath);
}

run().catch((e) => { console.error(e); process.exit(1); });
