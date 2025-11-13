# Deployment Guide for WHY Q University Landing Pages

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Pipedream account (free tier works)
- Node.js 18+ installed locally

## Step-by-Step Deployment

### 1. Setup Pipedream Webhook

Before deploying, you need to create a Pipedream workflow for lead form submissions.

1. Go to [Pipedream](https://pipedream.com) and sign up/login
2. Create a new workflow
3. Add an HTTP/Webhook trigger:
   - Choose "New Requests (Payload Only)"
   - Copy the unique webhook URL (e.g., `https://eoXXXXXXXXXX.m.pipedream.net`)
4. Add processing steps (see `PIPEDREAM_SETUP.md` for details)
5. Deploy the workflow

### 2. Configure Environment Variables

1. Create or update `.env.local` in your project root:

```bash
NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL=https://your-actual-webhook-url.m.pipedream.net
```

2. Test locally:
```bash
npm install
npm run dev
```

3. Visit `http://localhost:3000` and test the lead form submission

### 3. Push to GitHub

1. Initialize git repository (if not already):
```bash
git init
git add .
git commit -m "Initial commit: WHY Q University landing pages"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/your-username/whyq-university.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add environment variable:
   - Key: `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL`
   - Value: Your Pipedream webhook URL

6. Click "Deploy"

7. Wait for deployment to complete (2-3 minutes)

8. Your site will be live at: `https://your-project.vercel.app`

#### Option B: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts and add environment variable when asked

5. For production deployment:
```bash
vercel --prod
```

### 5. Verify Deployment

1. Visit your deployed URL
2. Test both landing pages:
   - `/` - Home page with navigation
   - `/lp1` - Landing Page 1
   - `/lp2` - Landing Page 2

3. Test lead form submission:
   - Click "Apply Now" on any page
   - Fill out the form
   - Submit and verify success message
   - Check Pipedream workflow execution logs

4. Test fees modal:
   - Click "Check Course-wise Fees"
   - Verify fee data loads correctly

### 6. Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

### 7. Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

Every push triggers a new deployment with preview URL.

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PIPEDREAM_WEBHOOK_URL` | Pipedream HTTP trigger endpoint for lead forms | Yes |

## Troubleshooting

### Build Fails

- Check Node.js version (requires 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Lead Form Not Submitting

- Verify Pipedream webhook URL is correct
- Check browser console for errors
- Verify environment variable is set in Vercel
- Test webhook URL directly with curl/Postman

### API Routes Not Working

- Ensure API routes are in `src/app/api/` directory
- Check route.ts files have named exports (GET, POST)
- Verify responses return NextResponse with proper headers

### Styling Issues

- Clear browser cache
- Check Tailwind config is correct
- Verify PostCSS config exists

## Performance Optimization

- Images: Add to `public/images/` and use Next.js Image component
- Fonts: Already optimized with `next/font/google`
- Analytics: Add Vercel Analytics in dashboard (free)

## Security

- Environment variables are encrypted by Vercel
- HTTPS is enforced automatically
- Security headers are configured in `vercel.json`
- CORS is handled by Next.js API routes

## Monitoring

- View deployment logs in Vercel dashboard
- Monitor Pipedream workflow executions
- Check Vercel Analytics for traffic insights

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Pipedream Docs: https://pipedream.com/docs

---

**Deployment completed!** Your WHY Q University landing pages are now live with automatic SSL, global CDN, and lead capture integration.
