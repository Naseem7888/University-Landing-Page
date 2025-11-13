# Generating the Brochure PDF

## Method 1: Using Browser (Recommended)

1. Open `public/brochure.html` in your web browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac) to open print dialog
3. Select "Save as PDF" as the destination
4. Set the following print settings:
   - Layout: Landscape
   - Paper size: A4
   - Margins: None
   - Background graphics: Enabled
   - Scale: 100%
5. Click "Save" and name the file `brochure.pdf`
6. Move the saved PDF to the `public/` directory, replacing any existing file

## Method 2: Using Puppeteer (Automated)

If you have Node.js installed:

```bash
cd scripts
npm install
node generate-pdf.js
```

This will automatically generate `public/brochure.pdf` from the HTML template.

## Method 3: Online PDF Converter

1. Visit an online HTML to PDF converter (e.g., https://www.web2pdfconvert.com/)
2. Upload `public/brochure.html`
3. Download the generated PDF as `brochure.pdf`
4. Place it in the `public/` directory

## Verifying the PDF

After generation, test the download functionality:

1. Start the development server: `npm run dev`
2. Visit http://localhost:3000/lp1 or http://localhost:3000/lp2
3. Click any "Download Brochure" button
4. Verify the PDF downloads correctly and displays all content

## Customizing the Brochure

To update the brochure content:

1. Edit `public/brochure.html`
2. Regenerate the PDF using one of the methods above
3. The brochure automatically pulls data from:
   - University info: `/api/university-info`
   - Courses: `/api/courses`
   - Fees: `/api/fees`
   - Placements: `/api/placements`
   - Contact: `lib/constants.ts`

## Content Included

The brochure contains:

- **Cover Page**: University branding, tagline, intake years, QR code
- **Page 1**: Mission/vision, key stats, accreditations, programs offered
- **Page 2**: Fee structure, placement metrics, top recruiters, facilities, contact information
- **Footer**: Copyright and website information

All content uses the futuristic cyber theme with:
- Colors: #00D9FF (cyber blue), #B026FF (cyber purple)
- Fonts: Inter (body), Space Grotesk (headings)
- Design: Glassmorphism effects, gradient backgrounds, neon accents
