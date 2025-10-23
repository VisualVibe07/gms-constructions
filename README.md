# GMS Constructions — Static Website

Responsive, static website for GMS Constructions built with React, Vite, and Tailwind CSS.

## Prerequisites
- Node.js 18+

## Install
```bash
npm install
```

## Run locally
```bash
npm run images   # fetches royalty-free placeholder images to public/images
npm run dev      # start dev server
```

Open the app on the printed local URL.

## Build
```bash
npm run build
npm run preview  # preview production build
```

## Structure
- `src/components/` — split UI sections: `Nav`, `Hero`, `Services`, `Projects`, `About`, `Contact`, `Footer`
- `public/images/` — downloaded images used by the site
- `scripts/fetch-images.mjs` — simple Node script to download images with fallbacks

## Branding
- Primary color: `brand` (`#0E5E6F`) with accent `#F6C453` defined in `tailwind.config.js`
- Favicon/logo: `public/logo.svg`

## Notes
- Images are sourced via Unsplash and used here as placeholders. Replace with your own project imagery as needed.
