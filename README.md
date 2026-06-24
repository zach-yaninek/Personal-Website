# Personal Website

A minimal personal portfolio built with Next.js, inspired by [elliotlee.info](https://elliotlee.info), with Teleos Labs–style typography and a navy / white / cyan palette.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix primitives)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy lives in the `content/` folder:

| File | Purpose |
|------|---------|
| `site.ts` | Name, tagline, bio, email, social links, nav |
| `currently.ts` | Home page "Currently" cards |
| `projects.ts` | Project listings |
| `resume.ts` | Web resume sections |
| `awards.ts` | Awards and honors |
| `about.ts` | About page sections |

Replace placeholder assets:

- `public/images/headshot.svg` — swap for your photo (`.jpg` or `.png`; update imports in `hero.tsx` and `about/page.tsx`)
- `public/resume.pdf` — your resume PDF
- `public/cv.pdf` — your CV PDF

## Contact form

The form validates input via a Server Action. By default it shows a success message without sending email.

To send email, add a Resend API key:

```bash
cp .env.example .env.local
# Set RESEND_API_KEY and wire up Resend in src/app/contact/actions.ts
```

A `mailto:` fallback is always shown on the contact page.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Deploy — no extra configuration required for a standard Next.js app
4. Add a custom domain in Project Settings if desired

Or use the CLI:

```bash
npx vercel link
npx vercel
```

## Color palette

| Role | Hex |
|------|-----|
| Background | `#0A192F` |
| Foreground | `#FFFFFF` |
| Accent | `#00E5FF` |

Defined in `src/app/globals.css`.
