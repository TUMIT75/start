# Start SAH — visual identity

This is the visual system the prototype in `index.html` is built from. It exists
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

Supporting steps (tints of the same four) are declared once in the Tailwind
config at the top of `index.html`. Two deliberate decisions there:

- **`emerald-500` and `emerald-600` are both `#00C853`.** Whichever step a button
  already used, it lands on the exact logo green.
- **`emerald-700` and above are darker** (`#00963C`, `#007A31`, `#006027`) and are
  only for green *text*, which needs the contrast against white.

The dark greens from the earlier mock-up (`#0D2217`, `#16A34A`, `#15803D`,
`#059669`) are gone. Dark bands are charcoal.

> The logo files in `assets/` and `public/` are a traced placeholder that still
> carried the old greens; they have been recoloured to match. **Replace them with
> the real vector logo before launch.**

## Type

Plus Jakarta Sans throughout.

| Use | Size | Weight |
| --- | --- | --- |
| Page heading | 36–60px, tight tracking | 800 |
| Section heading | 30–40px | 800 |
| Sub-heading | 18–20px | 700 |
| Body | 14–18px, relaxed leading | 400 |
| Eyebrow label | 12px, uppercase, wide tracking | 700, green |

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

Source: **`assets/illustrations.svg`** — 16 illustrations as SVG `<symbol>`s.
The same file is inlined near the top of `<body>` in `index.html` so the
prototype works when opened straight from disk.

### Drawing rules

- Flat line art. No gradients, no glows, no drop shadows.
- Stroke `#2E2E2E`, 2.6px, round caps and joins.
- **Faceless.** No eyes, no mouths, no identifiable portraits.
- Solid charcoal for hair, abaya and trousers; white for thobes, shirts, panels.
- **One green accent per illustration**, not several.
- Saudi and GCC dress — thobe with ghutra and agal, abaya — used naturally
  alongside international business dress, men and women, at different career
  stages.
- Few elements, generously spaced. One idea per illustration.

Limbs are drawn as two stacked strokes — a charcoal one at 14px with a white one
at 9px over it — which is what gives them the outlined-tube look without needing
to hand-trace outlines.

### The 16 illustrations

| Symbol | What it shows |
| --- | --- |
| `il-human-development` | A mentor in thobe and ghutra reaching down to help a colleague up the last step |
| `il-career-pathways` | One person weighing employment, specialisation, entrepreneurship and leadership |
| `il-communication` | Two colleagues across a table, one speech bubble answering another |
| `il-personal-growth` | Clearing a barrier and landing on the step past it |
| `il-leadership` | A leader tracing an upward line for two colleagues |
| `il-training` | A trainer presenting results at a board to a seated group |
| `il-coaching` | A coach and a colleague working an idea through together |
| `il-organisational` | Three colleagues joining two interlocking pieces |
| `il-teamwork` | Three colleagues side by side at a shared table |
| `il-train-trainer` | A trainer developing other trainers at a flip chart |
| `il-professional-english` | Work going out into the wider world from a laptop |
| `il-vision` | Sighting the route to a flag on the summit |
| `il-learning` | A learner on a stack of books under a graduation cap |
| `il-partnership` | Two colleagues in abaya shaking hands over an agreement |
| `il-focus` | A completed checklist beside a target struck in the centre |
| `il-momentum` | Stepping up onto the tallest of three rising columns |

### Placing one

```html
<div class="ill-stage ill-stage--green">
  <svg class="ill ill-lg" viewBox="0 0 440 320" role="img"
       aria-label="Line illustration: …">
    <use href="#il-coaching"/>
  </svg>
</div>
```

- `.ill-stage` draws one soft organic shape behind the artwork — the replacement
  for the old framed, gradient-filled panels.
  `--green` tints that shape; `--bare` removes it.
- `.ill-lg` / `.ill-xl` / `.ill-md` cap the width. Illustrations are meant to be
  **large** — around 500–640px on a desktop hero, not thumbnail-sized.
- Always give a real `aria-label`. The artwork carries meaning, so it is not
  decorative.

### Adding a new one

Add a `<symbol>` to `assets/illustrations.svg` using the existing class
primitives (`il-s`, `il-w`, `il-l`, `il-gf`, `il-d`, `il-g`, `il-lo`/`il-li`),
then re-inline the file into `index.html`. The colour tokens resolve through CSS
custom properties, so a new illustration inverts on charcoal for free.

---

## What is deliberately absent

These were in the earlier mock-up and were removed against the September
feedback, so they should not come back in the WordPress build:

- Dark-green section bands.
- Framed gradient panels around illustrations, and dashed decorative frames.
- Overlapping floating badges stacked on top of hero visuals.
- Rows of small illustrations — one large illustration does more work than four
  small ones.
- Portrait photography. Where photography is used later, prefer meetings,
  training and workspaces where faces are not the focus.
