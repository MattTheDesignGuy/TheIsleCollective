# The Isle Collective — Website

A modern, responsive marketing website for The Isle Collective — an Australian AI automation consultancy.

## Tech Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4**
- **lucide-react** for icons
- **Poppins** (headings) + **Inter** (body) via `next/font/google`
- **framer-motion** (available for future animation enhancements)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About — philosophy, process, why us |
| `/services` | Services — capabilities + pricing table |
| `/packages` | Packages — 6 pricing cards + FAQ |
| `/case-study` | Case Study — AJL Studio |
| `/contact` | Contact — form + details |

## Data

All package pricing lives in `/lib/packages.ts`. Edit this file to update prices — both the Packages page and the home-page teaser pull from the same source.

## Logos

Logo files are in `/public/logos/`:
- `FullLogo_NoBuffer.webp` — primary, light backgrounds (header)
- `colour-logo-on-white_JPG.jpg` — fallback colour logo
- `B_W-logo-on-Black_JPG.jpg` — dark backgrounds (footer)
- `B_W-logo-on-white_JPG.jpg` — B&W on white

## Contact Form

The form is currently stubbed — submissions log to the console. To wire to a real email service, edit `/app/api/contact/route.ts` and add your provider (Resend, SendGrid, etc.).

## Deploy

Deploy to **Vercel** (recommended):
1. Push to GitHub
2. Import repo in Vercel
3. Deploy — zero config required

Or deploy to **Netlify**:
```bash
npm run build
# deploy the .next folder
```
