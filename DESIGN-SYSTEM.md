# Start SAH — visual identity

This is the visual system the site is built from. It exists
so the WordPress build reproduces the same look without guessing, and so Sonia
can check the direction against the brief before any of it is rebuilt.

Everything here follows the 16 September direction: **large, clean, sophisticated,
faceless illustrations; the bright logo green; charcoal instead of dark green;
plenty of white space.**

---

## Colour

Four colours. Nothing else.

| Role | Hex | Where it goes |
| --- | --- | --- |
| START Green | `#00C853` | One accent at a time — a button, a shape in an illustration, a rule under a heading. Never a page background. |
| Charcoal | `#2E2E2E` | All text and line work. Also the dark section bands. |
| Off-White | `#FAFAFA` | Quiet section backgrounds, alternating with white. |
| Light Grey | `#E6E6E6` | Hairline rules, secondary fills inside illustrations. |

Supporting steps (tints of the same four) are declared once in `tailwind.config.ts`. Two deliberate decisions there:

- **`emerald-500` and `emerald-600` are both `#00C853`.** Whichever step a button
  already used, it lands on the exact logo green.
- **`emerald-700` and above are darker** (`#00963C`, `#007A31`, `#006027`) and are
  only for green *text*, which needs the contrast against white.

The dark greens from the earlier mock-up (`#0D2217`, `#16A34A`, `#15803D`,
`#059669`) are gone. Dark bands are charcoal.

> The logo files in `public/` are a traced placeholder that still
> carried the old greens; they have been recoloured to match. **Replace them with
> the real vector logo before launch.**

## Type

Manrope throughout, self-hosted through `next/font`.

Plus Jakarta Sans came first and the 20 September note asked us to change it: it
read rounded and heavy, and made every heading feel bulky. 800 is deliberately
not loaded — hierarchy comes from size and spacing, not from weight.

| Use | Size | Weight |
| --- | --- | --- |
| Page heading | 36–60px, tight tracking | 700 |
| Section heading | 30–40px | 700 |
| Sub-heading | 18–20px | 600 |
| Body | 14–18px, relaxed leading | 400 |
| Eyebrow label | 12px, uppercase, wide tracking | 600, grey |

Headings are sentence case, not title case. A short green rule (`.rule-green`,
56 × 3px) sits under a section heading in place of a boxed badge.

## Section rhythm

Pages alternate bands so a long page never reads as one flat stretch:

```
white  →  off-white  →  white  →  charcoal  →  off-white  →  white
```

- `.band-off` — off-white section
- `.band-ink` — charcoal section, white text
- `.on-ink` — put on any charcoal container so the illustrations inside flip to
  white line work automatically
- `.hairline` — `#E6E6E6` border, used instead of heavy card borders

Content sits directly on the band. Cards are used only where something really is
a discrete object — a programme in a catalogue, a stat, a form. Narrative
sections are open, which is what "more flow between sections rather than
everything sitting inside separate boxes" asked for.

---

## Illustration library

**`public/illustrations/`** — sixty illustrations cut from the three approved
reference sheets. These are the artwork; the site does not draw its own.

- **`new-01`…`new-30`** — the thirty from the 20 September sheet. Every one
  carries its own pale mint disc behind the figure.
- **`01-`…`20-`** and **`topic-*`** — the thirty from the first two sheets, kept
  in the pool. Five are still in use; they have no mint disc of their own, so
  their stage supplies one.

Thirty-five places on the site use thirty-five different illustrations. Nothing
repeats.

### Dress and setting

The 20 September note asked that Saudi professionals not all be the same man in
a white thobe and ghutra, so the run down each page alternates: thobe with
ghutra, thobe without, suit and tie, smart casual, abaya, open abaya over
professional clothing, and mixed groups. No two neighbouring sections wear the
same thing. The file names say what each one shows — `new-17-suit-desk-clock`,
`new-29-abaya-career-path` — so a section can be matched to a person and a
setting rather than to a number.

### Sizes

Four tiers, and only four. Before the 20 September pass the site rendered its
thirty-five illustrations at twenty-seven different sizes on twenty-four
different aspect ratios, because each slot had picked up its own `max-width` or
`max-height` over time. The ratio now belongs to the tier, so a slot can never
squash artwork to fit a cap again.

| Class | Ratio | Max width | On a 1440px desktop | Where |
| --- | --- | --- | --- | --- |
| `.ill-hero` | 16:9 | 660px | 46% | one per page, beside the h1 |
| `.ill-large` | 3:2 | 600px | 42% | full-width set pieces |
| `.ill-section` | 4:3 | 540px | 540 x 405 | the alternating body sections |
| `.ill-card` | 4:3 | 380px | — | card and tile grids |
| `.ill-small` | 1:1 | 220px | — | small inline spots |

The wider tiers stand up towards 4:3 below the two-column breakpoint, so a hero
does not become a letterbox on a phone.

```tsx
<div className="ill-stage ill-stage--green">
  <Illustration
    src="/illustrations/new-24-thobe-mentoring.svg"
    alt="Illustration: a mentor in thobe and ghutra guiding a colleague at a laptop"
    className="ill ill-section"
  />
</div>
```

- `.ill-stage--green` draws a soft mint disc behind the figure. Use it only on a
  first-sheet illustration; the thirty from the 20 September sheet already have
  one, and `--bare` opts out.
- Never give an illustration a fixed height or a `max-h-*`. The tier owns the
  ratio and `.ill` sets `object-fit: contain`.
- Do not put an `aspect-*` class on the wrapper either. It fights the tier, and
  that is how six course cards ended up at 2.19:1 with the drawing shrunk into
  the middle of a 16:9 frame.
- Always write a real `alt`. The artwork carries meaning; it is not decorative.

### On a charcoal band

The line work is charcoal, so it disappears on a dark background. Any container
that is dark — `.on-ink`, `.band-ink`, or a charcoal `bg-[…]` class — puts the
illustration on an off-white rounded panel automatically. Do not place artwork
directly on charcoal.

### How they were made

The sheets are 1536 x 1024, so each illustration holds only about 290 x 230 real
pixels. Every raster version looked soft at hero size, however it was upscaled
or sharpened, so the shapes were traced into vector instead. The artwork is
identical; it is simply no longer made of pixels.

`scripts/` holds the pipeline, if the sheets are ever reissued:

1. `SheetGrid.cs` finds the tile frames. Run this first and read the bands off
   it rather than guessing or profiling the ink. The 20 September sheet draws
   each illustration inside a thin grey box and the artwork runs right up to
   that box, so an ink profile lands about sixteen pixels inside the true top
   and quietly cuts the top off every figure in the row.
2. `prep-illustrations.ps1` and `prep-illustrations-v2.ps1` crop each cell at 4x
   or 5x and snap every pixel to the brand palette. This is also where the
   sheets' own quirks are handled — a light grey fill reads 246 against a 254
   ground, with stray white pixels through it, so the salt is filtered out, the
   anti-aliasing beside each line is opened away, and enclosed gaps are filled.
3. `trace-illustrations.mjs` traces the result into `public/illustrations`.
   `TRACE_IN` picks the source folder; `tune-trace.mjs` compares tracer settings
   on a single illustration.
4. `gen-illustration-sizes.mjs` records each file's viewBox into
   `lib/illustration-sizes.json`, which is what puts width and height on the tag
   so the box is reserved before the file arrives.

The whole set is about 1.5 MB of SVG; a page loads only the handful it shows.
