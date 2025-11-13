<<<<<<< HEAD
# University-Landing-Pages
=======
# WHY Q University Landing Pages

A modern, futuristic landing page project for WHY Q University built with Next.js 16, Tailwind CSS v4, and cutting-edge UI libraries.

## 🚀 Features

- **Two Distinct Landing Page Variants** (`/lp1` and `/lp2`) - Both showcase WHY Q University with different visual treatments and layouts, providing design alternatives for the same institution
- **Lead Capture System** with form validation and Pipedream webhook integration
- **Course-wise Fee Modal** displaying nested JSON fee structures
- **API Endpoints** returning JSON data for courses, fees, placements, and university info
- **Futuristic Design** with glassmorphism, neon accents, and smooth animations
- **Fully Responsive** optimized for mobile, tablet, and desktop
- **Accessibility** WCAG compliant with keyboard navigation and ARIA labels

> **Note**: This project implements two visual variants (LP1 and LP2) of landing pages for WHY Q University. Both pages showcase the same university with alternative layouts, section designs, and visual treatments to demonstrate different design approaches.

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (Dialog, Select)
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Deployment:** Vercel (with automatic SSL)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KOLLAGE APPLY TASK
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.local` and add your Pipedream webhook URL
   - See `PIPEDREAM_SETUP.md` for webhook creation instructions

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=https://your-pipedream-endpoint.m.pipedream.net
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes (courses, fees, placements, university-info)
│   ├── lp1/            # Landing Page 1
│   ├── lp2/            # Landing Page 2
│   └── layout.tsx      # Root layout
├── components/
│   ├── shared/         # Reusable components (modals, forms, navbar, footer)
│   ├── lp1/            # LP1-specific sections
│   └── lp2/            # LP2-specific sections
├── hooks/              # Custom React hooks for data fetching
├── lib/
│   ├── validations/    # Zod schemas
│   ├── constants.ts    # App-wide constants
│   └── utils.ts        # Utility functions
├── styles/
│   └── globals.css     # Global styles and Tailwind directives
└── types/              # TypeScript type definitions
```

## � Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide with Vercel setup, troubleshooting, and optimization tips
- **[PIPEDREAM_SETUP.md](./PIPEDREAM_SETUP.md)** - Step-by-step guide for setting up Pipedream webhooks for lead form submission
- **[public/images/README.md](./public/images/README.md)** - Image assets specifications and optimization guidelines
- **[public/icons/README.md](./public/icons/README.md)** - Custom icon requirements and Lucide React usage

## �🚢 Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for comprehensive deployment instructions to Vercel.

### Quick Deploy to Vercel:

1. **Set up Pipedream webhook** - Follow [PIPEDREAM_SETUP.md](./PIPEDREAM_SETUP.md)
2. Push your code to GitHub
3. Import the project in Vercel dashboard
4. Add environment variable: `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL`
5. Deploy (SSL is automatic)
6. Test lead form submission on both `/lp1` and `/lp2`

## 🔗 Routes

- `/` - Home page with navigation to both landing pages
- `/lp1` - Landing Page 1 (primary variant)
- `/lp2` - Landing Page 2 (alternative variant)
- `/api/courses` - GET courses data
- `/api/fees` - GET fee structures
- `/api/placements` - GET placement statistics
- `/api/university-info` - GET university information

## 🎨 Design System

- **Primary Colors:** Cyber Blue (#00D9FF), Neon Purple (#B026FF)
- **Background:** Dark gradients (#0A0A0F to #1E1E2E)
- **Effects:** Glassmorphism, neon glows, floating animations
- **Typography:** Inter (body), Space Grotesk (headings)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 Brochure Asset

The university brochure is located at `public/brochure.pdf`. To update or regenerate it:

1. Edit the HTML template: `public/brochure.html`
2. Follow instructions in `docs/BROCHURE_GENERATION.md` to generate the PDF
3. The brochure pulls data from APIs and includes:
   - University overview, mission, and statistics
   - Programs offered across all departments
   - Fee structure and scholarship information
   - Placement metrics and top recruiters
   - Campus facilities and contact details

Downloads are tracked via the `/api/track-download` endpoint for analytics.

## 🤝 Contributing

This is a task project for KOLLAGE. Contact the development team for contribution guidelines.

## 📄 License

Proprietary - WHY Q University © 2025
>>>>>>> b9210e5 (Initial commit: WHY Q University landing pages, brochure generation, and fixes)
