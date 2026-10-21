# Farhan Portfolio

Personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**. Free to host on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Where to edit

| What | File |
| --- | --- |
| Text, projects, skills, links (replace the TODO email/GitHub/LinkedIn) | `src/data/content.ts` |
| Colours (light and dark) | `src/index.css` (`:root` and `.dark`) |
| Fonts and Tailwind tokens | `tailwind.config.js` |
| Page sections | `src/sections/` |
| Reusable pieces (header, theme toggle, scroll-to-top) | `src/components/` |

## Deploy (later)

Push to GitHub, then import the repo in Vercel. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
