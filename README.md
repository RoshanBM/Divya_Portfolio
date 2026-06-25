# Divyashree N S — Portfolio

A premium, editorial portfolio site for Divyashree N S, Creative Marketing Strategist.
Built with Next.js 16, Tailwind v4, and Motion. Light/dark themes, a custom cursor,
a wall-switch theme toggle, scroll reveals, and image-led case studies.

## Tech

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **Motion** (`motion/react`) for animation
- **Phosphor Icons** for iconography
- Self-hosted fonts (Space Grotesk, Manrope, Fraunces) in `public/fonts`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Root layout, theme no-flash script, fonts, cursor
  page.tsx          Section composition
  globals.css       Design tokens, theme variables, font-face, cursor, grain
components/
  nav.tsx           Sticky nav + mobile menu + wall switch
  hero.tsx          Editorial hero + portrait slot
  sections.tsx      Marquee, About, What I Do
  work.tsx          Case-study work section (the centerpiece)
  experience-education.tsx   Timeline + Education/Certifications/Leadership
  skills.tsx        Skill rows
  contact.tsx       Contact channels + footer
  cursor.tsx        Custom hollow-ring cursor (VIEW / HELLO morphing)
  wall-switch.tsx   Realistic wall-switch theme toggle with click sound
  theme-provider.tsx
  motion-primitives.tsx   Reveal, MagneticButton, stagger variants
lib/
  content.ts        All copy, projects, experience, skills (edit here)
public/
  work/             Campaign images, grouped by project
  fonts/            Self-hosted woff2 files
  divyashree-ns-resume.pdf
```

## Customizing content

All text and project data lives in `lib/content.ts`. Edit that one file to change
copy, add projects, update experience, or swap contact details.

### Adding a portrait photo

The hero currently shows a monogram tile (no headshot was provided). To add a real
portrait:

1. Drop a square-ish photo at `public/portrait.jpg`.
2. In `components/hero.tsx`, find `PortraitSlot` and replace the monogram block with:

   ```tsx
   <img
     src="/portrait.jpg"
     alt="Divyashree N S"
     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
   />
   ```

### Updating the resume

Replace `public/divyashree-ns-resume.pdf` with a new file of the same name, and the
View Resume / Download buttons will pick it up automatically.

## Deploy to Vercel

This is a standard Next.js app and deploys to Vercel with zero extra config.

1. Push this folder to a new GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Divyashree portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js. Leave the defaults (Build: `next build`,
   Output: `.next`). No environment variables are needed.
4. Click **Deploy**. You get a live URL in about a minute.

To use a custom domain, add it under the project's **Settings → Domains** in Vercel.

## Notes

- The site respects `prefers-reduced-motion`: animations, the cursor, parallax, and
  the switch spring all degrade to static for users who request reduced motion.
- The custom cursor only activates on fine-pointer devices; touch devices keep the
  native cursor.
- Theme preference is remembered in `localStorage` and there is no flash on load.
