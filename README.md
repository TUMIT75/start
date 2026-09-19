# Start SAH — website

Developing People. Unlocking Potential.

A Next.js build of the Start SAH site, used to agree the visual identity before
the production site is built in WordPress. `DESIGN-SYSTEM.md` describes the
colour, type and illustration rules it is built from.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
npm run typecheck  # tsc --noEmit
```

## Pages

Every page is a real route. No hashes, no query-string routing.

| Route | |
| --- | --- |
| `/` | Home |
| `/about` | About Sonia Ali |
| `/programmes` | Catalogue — `?focus=<category>` opens it on one filter |
| `/programmes/english-for-professional-success` | A single programme |
| `/coaching` | One-on-one coaching |
| `/organisational-development` | For organisations |
| `/start-your-development` | Intake form |
| `/resources` | Free resources and the diagnostic |
| `/insights` | Insights and podcast |
| `/contact` | Contact |
| `/dashboard` | Learner dashboard (noindex) |

## Layout of the code

| Path | |
| --- | --- |
| `app/` | One folder per route. Each `page.tsx` holds that page; the `layout.tsx` beside it carries its title and description. |
| `app/layout.tsx` | Document shell — font, header, footer, overlays |
| `components/Header.tsx` | Nav, dropdown, mobile drawer, active state from the URL |
| `components/Footer.tsx` | Site footer |
| `components/Overlays.tsx` | Modals and the toast, shared across routes |
| `components/Icon.tsx` | The icon set, as Lucide components |
| `components/Illustration.tsx` | Artwork, through `next/image` |
| `lib/ui.ts` | Behaviour: tabs, accordions, modals, filters, the diagnostic, form stubs |
| `public/illustrations/` | The thirty approved illustrations |

## What makes it fast

Measured on the home page, against the single-file prototype it replaces:

| | Prototype | This build |
| --- | --- | --- |
| Transferred | 1045 KB | **248 KB** |
| Third-party bytes | 449 KB | **0 KB** |
| Images | 523 KB | **29 KB** |
| Fonts | 305 KB | **27 KB** |
| HTML | 73 KB | **23 KB** |

- **Nothing is fetched from a third party.** The prototype pulled Tailwind's
  browser compiler, the whole FontAwesome stylesheet and its webfonts, and
  Google Fonts. Tailwind now compiles at build time, the icons are Lucide
  components so only the ones used ship, and the font is self-hosted by Next.
- **Every route is prerendered** to static HTML at build time.
- **Illustrations go through `next/image`**, so each is served as AVIF or WebP
  at the size the layout asks for rather than as a 200 KB PNG.

## Notes for the WordPress build

- **The logo files are a traced placeholder** whose colours have been corrected
  to the brand palette. Replace them with the real vector artwork.
- **The illustrations are the deliverable**, not the markup around them. They
  are transparent PNGs in `public/illustrations/` and can go straight into the
  media library. One thing to settle first — their resolution — is written up at
  the end of `DESIGN-SYSTEM.md`.
- **`lib/ui.ts` is carried over from the prototype**, working by element id
  rather than React state. It behaves correctly and was ported rather than
  rebuilt so that nothing changed by accident; a WordPress theme will replace it
  wholesale anyway.
- Copy and course content is still indicative. The 16 September note set the
  order explicitly: visual identity first, wording and course detail afterwards.
