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

Set public HTTPS receiver URLs in `.env` locally and in the Vercel project environment:

```env
VITE_QUOTE_FORM_ENDPOINT=https://api.example.com/forms/quote
VITE_BOOKING_FORM_ENDPOINT=https://api.example.com/forms/booking
VITE_CONTACT_FORM_ENDPOINT=https://api.example.com/forms/contact
```

`VITE_*` values are public in the browser bundle and must never contain secrets. Each endpoint must accept JSON `POST` requests and should return a successful HTTP status. It may optionally return JSON containing a string `reference` or `id`.

If an endpoint is missing or invalid, the form displays a configuration error and directs the visitor to phone or email. The application never simulates a successful submission.

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

Add the three form endpoint variables in Vercel before promoting the deployment to production.

## Assets

All deployed assets are local under `public/assets/`. Truck imagery is original K200- and K220-inspired promotional artwork rather than manufacturer photography. See [docs/ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md) for the complete inventory.
