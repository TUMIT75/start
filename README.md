# Start SAH — website prototype

Developing People. Unlocking Potential.

A clickable prototype of the Start SAH site, used to agree the visual identity
before the real site is built in WordPress. `DESIGN-SYSTEM.md` describes the
colour, type and illustration rules the prototype is built from.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> dist/
```

The prototype is one static page and also opens fine by double-clicking
`index.html`; the dev server is only needed for live reloading.

## What is in here

| Path | |
| --- | --- |
| `index.html` | The whole prototype — all eleven pages, styles and behaviour |
| `assets/illustrations/` | The twenty approved illustrations, cut from the reference sheet |
| `assets/logo.svg`, `logo-dark.svg` | Logo, on light and dark backgrounds |
| `DESIGN-SYSTEM.md` | Colour, type, section rhythm, illustration rules |

`src/`, `vite.config.ts` and the React dependencies are scaffolding from the
original template. Nothing in `index.html` uses them; the build simply copies
and minifies the page.

## Pages

Each page is a hash route, so any of them can be linked to directly:

`#/homepage` · `#/about` · `#/programmes` · `#/course` · `#/coaching` ·
`#/organisational` · `#/development` · `#/resources` · `#/contact` ·
`#/insights` · `#/dashboard`

They are sections of one HTML file rather than separate files — the switcher in
`navigateTo()` stands in for WordPress routing.

## Notes for the WordPress build

- **Tailwind runs from the CDN here.** That is fine for a prototype; the real
  theme should compile its own stylesheet from the token values in
  `DESIGN-SYSTEM.md` rather than ship `cdn.tailwindcss.com`.
- **The logo files are a traced placeholder** whose colours have been corrected
  to the brand palette. Replace them with the real vector artwork.
- **The illustrations are the deliverable**, not the markup around them. They are
  plain transparent PNGs and can go straight into the media library. Two things
  to settle before launch — resolution and file weight — are written up at the
  end of `DESIGN-SYSTEM.md`.
- Copy and course content is still indicative. The 16 September note set the
  order explicitly: visual identity first, wording and course detail afterwards.
