# getColabb — marketing site

Next.js 15 landing page for the getColabb mobile app, styled with the Aurora Glass theme ported from the mobile design system.

## Run

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — App Router entry (`layout.jsx`, `page.jsx`, `globals.css`)
- `components/` — Section components (Hero, Features, HowItWorks, Screens, Roles, Trust, CTA, Footer) + `PhoneScreens.jsx` (in-app mockups rendered in CSS/SVG) and `BrandMark.jsx` (aurora logo mark).

## Theme

Palette (Aurora Glass):

- Primary accent: `#5847e8` (violet) → `#8f7dff`
- Secondary: `#8fd4c1` (mint)
- Surfaces: translucent white/indigo glass with `backdrop-filter: blur(24px) saturate(180%)`
- Ambient backdrop: drifting blurred color blobs
- Fonts: Fraunces (display), Manrope (body), JetBrains Mono (labels)

Dark mode follows `prefers-color-scheme`.
# GetColabb-Web
