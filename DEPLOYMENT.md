# Deployment Guide for WHY Q University Landing Pages

## Recommended Strategy (Summary)

Use **Vercel** for production deployment:

* Native support for Next.js 15 + React 19 App Router
* Automatic preview deployments per pull request
* Global CDN, HTTP/2/3, SSL, image & font optimizations
* Simple environment variable management (lead form webhook)
* Lean repo (brochure PDF excluded) → faster builds

Add Docker + CI only if you need portability/on‑prem.

## Prerequisites

* GitHub account
* Vercel account (free tier works)
* Pipedream account (free tier works)
* Node.js 18+ installed locally

## Step-by-Step Deployment

### 1. Setup Pipedream Webhook

1. Sign in at [Pipedream](https://pipedream.com)
2. Create workflow → HTTP/Webhook trigger (New Requests Payload Only)
3. Copy webhook URL (e.g. `https://eoXXXX.m.pipedream.net`)
4. Add processing steps (see `PIPEDREAM_SETUP.md`)
5. Deploy the workflow

### 2. Configure Environment Variables Locally

Create `.env.local`:

```bash
NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=https://your-actual-webhook-url.m.pipedream.net
```

Then run:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and submit a test lead.

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: WHY Q University landing pages"
git remote add origin https://github.com/your-username/whyq-university.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Dashboard (Recommended)

1. Add New Project → import repo
1. Defaults okay (Next.js auto-detected)
1. Add env var:

* Key: `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL`
* Value: your webhook URL
* Environments: Production (+ Preview if testing PR forms)

1. Deploy → wait 2–3 min
1. Live at `https://your-project.vercel.app`

#### Option B: CLI

```bash
npm i -g vercel
vercel login
vercel    # preview
vercel --prod
```


### 5. Verify Deployment

1. Visit site
2. Check `/`, `/lp1`, `/lp2`
3. Open Apply form → submit → success message → verify Pipedream execution
4. Open Fees modal → data loads
5. (Optional) Regenerate brochure PDF locally:

```bash
node scripts/generate-pdf.js
```

Host `brochure.pdf` via Releases/object storage (keep out of repo).

### 5.1 On-Demand Brochure PDF (Advanced)

If you need server generation:

1. Use `puppeteer-core` + `@sparticuz/chromium`.
1. API route `/api/generate-brochure` loads `public/brochure.html`.
1. Return streamed PDF (`application/pdf`).
1. Protect with API key header & rate limiting.

### 6. Custom Domain (Optional)

Add domain in Vercel Settings → Domains → follow DNS. SSL auto.

### 7. Continuous Deployment

Vercel auto deploys:

* Production: pushes to `main`
* Preview: other branches & PRs

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL` | Pipedream HTTP trigger endpoint for lead forms | Yes |

## Optional Docker Deployment

```Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=${NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL}
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
RUN adduser -D nextjs
USER nextjs
EXPOSE 3000
CMD ["npm","run","start"]
```
Run:

```bash
docker build -t whyq-university .
docker run -p 3000:3000 -e NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=YOUR_WEBHOOK whyq-university
```

Docker requirements:

* Windows: Install Docker Desktop (enables WSL2 backend). Ensure virtualization is enabled in BIOS and WSL2 feature installed.
* Linux: Install Docker Engine via official packages; add user to `docker` group (`sudo usermod -aG docker <user>` then re-login).
* macOS: Install Docker Desktop (Apple Silicon uses a lightweight VM).
* After install: verify with `docker version` before building. If the command is not found, installation or PATH setup is incomplete.

## Optional GitHub Actions CI

`.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

Vercel handles deploy; CI ensures health.

## Troubleshooting

### Build Fails

* Node.js < 18 → upgrade
* Missing deps → check `package.json`
* See Vercel build logs

### Lead Form Not Submitting

* Wrong webhook URL
* Env var missing in Vercel
* Browser console errors
* Test with curl/Postman

### API Routes Not Working

* Path under `src/app/api/`
* Export correct handlers (GET/POST)
* Return NextResponse with proper status

### Styling Issues

* Clear cache
* Tailwind/PostCSS config intact
* Classes not purged inadvertently

## Performance Optimization

* Use `<Image />` for images in `public/images/`
* Fonts via `next/font/google`
* Enable Vercel Analytics
* Keep repo small (exclude large PDFs)

## Security

* Env vars encrypted
* HTTPS enforced
* Add custom headers via middleware if needed
* zod validation protects form inputs

## Monitoring

* Vercel deploy/function logs
* Pipedream workflow logs
* Vercel Analytics metrics

## Support

* Vercel Docs: <https://vercel.com/docs>
* Next.js Docs: <https://nextjs.org/docs>
* Pipedream Docs: <https://pipedream.com/docs>

---
**Deployment completed!** WHY Q University landing pages live with CDN, SSL, and lead capture.

### Quick Reference

| Task | Command |
|------|---------|
| Dev | `npm run dev` |
| Prod build | `npm run build` |
| Start prod | `npm run start` |
| Regenerate brochure PDF | `node scripts/generate-pdf.js` |
| Generate QR (SVG) | `node scripts/generate-qr-svg.js` |
