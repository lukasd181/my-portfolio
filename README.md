# my-portfolio

A [Next.js](https://nextjs.org) (App Router) portfolio site using [react-three-fiber](https://docs.pmnd.rs/react-three-fiber) for the 3D background and [Tailwind CSS](https://tailwindcss.com) v4 for styling.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

- `src/app/` — Next.js App Router routes, layout, and global styles.
- `src/components/` — UI and 3D scene components. Components using `three`/`@react-three/fiber` are marked `"use client"` and the `Background` scene is loaded via `next/dynamic` with `ssr: false` since it relies on browser-only APIs and randomized layout.
- `src/constants.ts` — Shared constants for the 3D scene (camera, cubes, terrain, stars).

## Scripts

- `npm run dev` — start the dev server (Turbopack).
- `npm run build` — production build.
- `npm run start` — run the production build.
- `npm run lint` — run ESLint.
