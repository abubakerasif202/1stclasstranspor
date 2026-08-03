# 1st Class Express

Production Vite, React and TypeScript website for 1st Class Express.

## Local setup

Use Node.js 20 or later.

```sh
npm ci
cp .env.example .env
npm run dev
```

The application is available at `http://localhost:5173` by default.

## Form delivery configuration

The supplied Formspree endpoint is integrated as the production default. To override it for another environment, set:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mlgqqqld
```

`VITE_*` values are public in the browser bundle and must never contain secrets. The Formspree form ID and endpoint are intentionally public.

Quote, booking and contact enquiries use the same Formspree form and include an `enquiryType` field plus a tailored email subject so submissions remain easy to distinguish. Invalid endpoints and failed requests display a real error; the application never simulates a successful submission.

## Quality checks

```sh
npm run lint
npm run test
npm run build
npm run test:e2e
```

The production output is written to `dist/`.

## Vercel deployment

The included `vercel.json` provides SPA routing, security headers and browser/CDN caching for assets.

```sh
npm install -g vercel
vercel login
vercel
vercel --prod
```

No Vercel environment variable is required for the supplied Formspree form. Add `VITE_FORMSPREE_ENDPOINT` only when overriding the built-in endpoint.

## Assets

All deployed assets are local under `public/assets/`. Truck imagery is original K200- and K220-inspired promotional artwork rather than manufacturer photography. See [docs/ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md) for the complete inventory.
