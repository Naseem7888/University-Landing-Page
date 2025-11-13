import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  
  const page = await browser.newPage();
  const htmlPath = join(__dirname, '..', 'public', 'brochure.html');
  const fileUrl = `file://${htmlPath.replace(/\\/g, '/')}`;
  // Navigate directly to the file URL so all relative assets (images, svg, fonts) resolve correctly
  await page.goto(fileUrl, { waitUntil: ['networkidle0', 'domcontentloaded'] });
  await page.emulateMediaType('screen');
  
  // Generate PDF with landscape orientation
  const pdfPath = join(__dirname, '..', 'public', 'brochure.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: false,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  
  await browser.close();
  
  console.log(`✅ PDF successfully generated at: ${pdfPath}`);
}

generatePDF().catch(console.error);
