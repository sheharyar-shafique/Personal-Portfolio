# Muhammad Sheharyar Shafique — Portfolio

Premium dark-themed portfolio site built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What you need to do before showing clients

1. **Add your photo.** Save the photo you sent me as `public/profile.jpg` (recommended square, 800x800 or larger).
2. **Get a Web3Forms access key** (free, no signup needed for the key itself) from https://web3forms.com — it powers the contact form *and* the review submission form (you get an email every time someone submits a review).
3. **Copy the env file:** `cp .env.local.example .env.local` then paste your key.
4. **Add projects.** Edit `data/projects.ts` — add real titles, descriptions, tech, live/github URLs, and screenshots (save images to `public/projects/`).
5. **Add real testimonials.** Edit `data/testimonials.ts`. When a client submits a review through the form, you get the email — vet it, then paste it here and redeploy. This keeps spam off your live site.
6. **(Optional) update resume content.** Edit `data/resume.ts` — I've prefilled it from what you told me.

## Deploy to Vercel

This repo is Vercel-ready (`vercel.json` is included with the framework, build commands, and security headers preconfigured).

### Easiest — connect the GitHub repo (recommended)

1. Go to https://vercel.com/new
2. Click **Import Git Repository** and select `Personal-Portfolio`
3. Vercel auto-detects Next.js — just click **Deploy**
4. Once deployed, go to **Project Settings → Environment Variables** and add:
   - `NEXT_PUBLIC_WEB3FORMS_KEY` = *your key from https://web3forms.com*
   - Apply to: Production, Preview, Development
5. Redeploy from the **Deployments** tab so the env var takes effect

After this, every `git push` to `main` auto-deploys.

### Or via CLI

```bash
npm i -g vercel
cd "C:\Users\user\Documents\My personal Portfolio"
vercel              # first run — links the project, follow prompts
vercel --prod       # deploy to production
```

To set the env var via CLI:

```bash
vercel env add NEXT_PUBLIC_WEB3FORMS_KEY production
```

### Deployment notes

- **Region:** `iad1` (Washington D.C.) — change in `vercel.json` if you want closer to Pakistan: try `bom1` (Mumbai) or `fra1` (Frankfurt).
- **Custom domain:** Project Settings → Domains. Free Vercel subdomain works out of the box.
- **Node version:** pinned to `>=18.18.0` in `package.json`.

## Project structure

```
app/            Next.js App Router pages (home + /resume)
components/     UI components (Hero, Projects, Reviews, etc.)
data/           Content you edit (projects, services, skills, testimonials, resume)
lib/            Utilities
public/         Static assets (your photo, project screenshots)
```

## Features

- Animated hero with floating gradient orbs and grid background
- Magnetic CTA buttons + custom cursor accent
- Scroll-progress indicator
- Marquee skills strip + categorized skills cards
- Tilt/hover project cards
- Services pricing grid
- Reviews carousel + 5-star rating submission form (Web3Forms email backend)
- Contact form (Web3Forms)
- Print-to-PDF resume page at `/resume`
- Fully responsive, mobile-first
- SEO metadata + Open Graph

## Tech

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide icons · Web3Forms (forms backend)
