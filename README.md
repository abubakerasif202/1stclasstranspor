# 1st Class Express

A standalone Vite, React and TypeScript website for 1st Class Express. It has no Base44 SDK, APIs, entities, authentication or generated runtime dependencies.

## Requirements and install

Use Node.js 20 or later.

```sh
npm install
npm run dev
```

Other commands: `npm run build`, `npm run preview`, `npm run lint`, `npm run test`, `npm run test:coverage`, and `npm run test:e2e`.

## Assets

Place licensed, client-supplied assets under `public/assets/` following [docs/ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md). This repository was supplied without the listed logo and vehicle source files, so the app uses honest local fallback visuals; it does not imitate the master logo or claim a fallback is a Kenworth vehicle.

## Form endpoint configuration

Configure public HTTPS endpoint URLs only (never secrets) in a local `.env` file:

```env
VITE_QUOTE_FORM_ENDPOINT=https://example.com/quote
VITE_BOOKING_FORM_ENDPOINT=https://example.com/booking
VITE_CONTACT_FORM_ENDPOINT=https://example.com/contact
```

In development without an endpoint, validated submissions return a clearly marked simulated success and log the payload to the development console. In production without an endpoint, forms show a configuration error and do not claim delivery. These endpoints can later be implemented using a Vercel Function, Supabase Edge Function, or the company’s existing API.

## Deployment notes

Build with `npm run build` and host `dist/` on a platform configured for SPA fallbacks. Provide the licensed asset files and production form endpoints before publishing.

## Known external requirements

The original requested source assets were absent from the working directory during build. Licensed K200/K220 photography, the supplied master logo, and a form-delivery endpoint remain external requirements.
