# Dharanidharan S — Portfolio Website

A static, responsive personal portfolio website built with **React + Vite + TypeScript + Tailwind CSS**. All content is sourced directly from the resume — no fabricated experience, skills, or links.

## Tech Stack

- React 19 + TypeScript
- Vite 8 (build tool)
- Tailwind CSS v4
- lucide-react (icons)

No backend, no database — 100% static site.

---

## Project Structure

```
public/
  resume.pdf        # Downloadable resume (linked from navbar/hero/contact)
  profile.jpg        # Profile photo
  favicon.svg         # Site favicon

src/
  components/         # Reusable UI building blocks
    Navbar.tsx
    Footer.tsx
    SectionHeading.tsx
    Badge.tsx
    BrandIcons.tsx     # Custom LinkedIn/GitHub SVG icons
  sections/            # Page sections, one component each
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Education.tsx
    Contact.tsx
  data/
    portfolio.ts       # ⭐ ALL editable content lives here (single source of truth)
  hooks/
    useReveal.ts        # Scroll-reveal animation hook
  App.tsx
  main.tsx
  index.css            # Design tokens (colors, fonts) + Tailwind import
index.html              # SEO metadata (title, description, Open Graph, Twitter)
```

---

## Getting Started (Local Development)

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The production build is output to the `dist/` folder.

---

## Updating Content

You do **not** need to touch any component code to update the portfolio's content. Everything — your name, title, summary, skills, work experience, projects, education, and contact links — lives in a single file:

```
src/data/portfolio.ts
```

Edit the values there and the site updates automatically.

### Replacing the resume PDF or photo

1. Replace `public/resume.pdf` with your updated resume (keep the same filename, or update `resumeFile` in `src/data/portfolio.ts`).
2. Replace `public/profile.jpg` with your updated photo (keep the same filename, or update `photo` in `src/data/portfolio.ts`).

---

## Deployment

This is a static site — build it once with `npm run build`, then deploy the resulting `dist/` folder to any static host.

### Vercel

```bash
npm install -g vercel
vercel
```
Or connect the GitHub repo at [vercel.com](https://vercel.com) — Vercel auto-detects the Vite build settings (`npm run build`, output directory `dist`).

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```
Or drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

### GitHub Pages

1. Install the gh-pages helper: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.ts`, set `base: '/<repo-name>/'` inside `defineConfig({...})`.
4. Run `npm run deploy`.

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choose "dist" as the public directory, configure as a single-page app: No
npm run build
firebase deploy
```

---

## Notes

- All content is derived directly from the provided resume. No experience, skills, projects, or links were invented.
- The role listed as "Feb40" under current experience reflects the company name exactly as it appears on the source resume — update `src/data/portfolio.ts` if this needs correcting.
- Responsive breakpoints are handled with Tailwind's `sm:`, `md:`, and `lg:` utilities and tested for mobile, tablet, laptop, and desktop widths.
