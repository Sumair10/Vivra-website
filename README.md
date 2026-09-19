# Vivra — public website

Next.js (App Router) + TypeScript + Tailwind v4 + GSAP/ScrollTrigger + Lenis.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

## Routes

| Route      | Brand                     | Page                                   |
| ---------- | ------------------------- | -------------------------------------- |
| `/`        | Vivra Technology (purple) | Master brand homepage — no demo CTA by design; products carry the demo requests |
| `/events`  | Vivra Events `#145258`    | Product landing page                   |
| `/mosque`  | Vivra Mosque `#0A6953`    | Product landing page                   |
| `/about`   | Vivra                     | Company page                           |
| `/privacy`, `/terms` | Vivra           | Placeholders — replace with real copy  |

Adding a future product: add it to `PRODUCTS` in `lib/constants/site.ts`, a brand entry in `lib/brand.ts` + `app/globals.css` (`[data-brand="…"]`), a logo in `public/brand/`, and a route under `app/`.

## Brand system

- Brand colour is set per route via `data-brand` on `<html>` (`lib/brand.ts`), light/dark via `data-theme` (persisted in `localStorage` as `vivra-theme`, light by default). Both are applied by an inline boot script before first paint.
- Components only use semantic tokens (`--brand-primary`, `--surface`, `--text-primary`, `--border`, …) defined in `app/globals.css`.
- **Vivra purple is `#6558A8`, sampled from the supplied logo asset.** The 2025 branding package lists `#6B5DDF` ("VIVRA Violet") and `#4D7EFF` (Accent Blue); the logo files you supplied use `#6558A8`, so the site follows the asset. Change `--vivra-purple` in `globals.css` if the master files are updated.
- Logos in `public/brand/` were extracted from the supplied PNGs (checkerboard removed, real alpha, exact colour fill). The favicon/mark is the isolated V from the same asset.
- Type: Inter Tight (display) + Inter (body), per the brand package; Noto Naskh Arabic, Noto Nastaliq Urdu and Noto Sans Devanagari for the language visualisations.

## Imagery

All photography in `public/images/` was generated for this site (no text, no readable faces). Source prompts are in the generation history; replace with real photography at the same aspect ratios when available.

## Demo / contact form

`POST /api/demo` validates the request and forwards it to `DEMO_WEBHOOK_URL` if set (see `.env.example`). Without it, requests are logged server-side and still acknowledged. Wire this before launch.

## QA flags

Append `?noanim=1` to any URL to render every scroll-reveal in its final state (used for full-page screenshots). `?theme=dark` forces dark mode for that load.

## Content rules

No invented statistics, customers, testimonials or latency figures. Contact details come from the existing vivra.ai site. Product capability copy (moderator control, multi-mic, voice ID, QR access, no app) is based on the existing Vivra / Manaber product material.
