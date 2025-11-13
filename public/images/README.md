# Images Directory

This directory contains image assets for the WHY Q University landing pages.

## Required Assets

### Logo
- `logo.svg` or `logo.png` - WHY Q University logo (recommended: SVG for scalability)
- Dimensions: Transparent background, suitable for navbar (approx. 150x50px)

### University Campus
- `campus-main.jpg/webp` - Main campus building/entrance
- `campus-aerial.jpg/webp` - Aerial view of campus
- `campus-grounds.jpg/webp` - Campus grounds/greenery
- Recommended: WebP format, optimized for web (< 500KB each)

### Facilities
- `library.jpg/webp` - Library interior/exterior
- `laboratory.jpg/webp` - Science/engineering labs
- `sports-complex.jpg/webp` - Sports facilities
- `hostel.jpg/webp` - Hostel accommodation
- `cafeteria.jpg/webp` - Cafeteria/dining area
- `auditorium.jpg/webp` - Auditorium/event space

### Recruiters/Companies

Place recruiter/company logos in a `recruiters/` subdirectory to display them in the placements section.

- **Directory**: `recruiters/` (create subdirectory)
- **Format**: PNG with transparent background
- **Dimensions**: 200x100px recommended
- **Naming**: Use lowercase company names (e.g., `google.png`, `microsoft.png`, `amazon.png`)

**Current Status**: The API at `/api/placements` includes logo paths (`/images/recruiters/company-name.png`), but actual logo files are not included. You can either:
1. Add the logo images to `public/images/recruiters/` directory, OR
2. Update components to hide logo display or use placeholder images

**Required logos** (based on API data):
- `google.png`, `microsoft.png`, `amazon.png`, `tcs.png`, `infosys.png`, `wipro.png`, `cognizant.png`, `accenture.png`

## Optimization Guidelines

1. **Format**: Use WebP for photos (better compression), SVG for logos/icons
2. **Size**: 
   - Hero images: Max 1920x1080px, < 500KB
   - Section images: Max 1200x800px, < 300KB
   - Thumbnails: Max 600x400px, < 150KB
3. **Compression**: Use tools like TinyPNG, Squoosh, or Sharp
4. **Responsive**: Consider providing multiple sizes for different devices

## Usage in Components

Images are imported and used in Next.js Image component:

```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.svg" 
  alt="WHY Q University" 
  width={150} 
  height={50} 
/>
```

## Notes

- Next.js automatically optimizes images through the Image component
- Place images directly in this folder for `/images/` path access
- Use descriptive filenames (lowercase, hyphens instead of spaces)
