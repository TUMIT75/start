import type { Config } from 'tailwindcss';

/* ---------------------------------------------------------------------------
   START SAH BRAND PALETTE
   From the client's "Startsah Colour Palette" sheet (September 2026):
     Primary Green  #00B050   the logo green — accents, icons, one word per heading
     Light Tint     #EAF7EE   section transitions, illustration circles
     Charcoal       #1F2937   headings
     Grey           #6B7280   body text
     Off-white      #FAFAFA   quiet section backgrounds

   The companion "How to use the green colour" sheet puts buttons, hover
   states and strong accents in a deep green. It is taken here as a darker tint
   of the primary rather than the separate hue that sheet printed, because the
   client asks for one green and tints derived from it — and it is the same
   #007A31 the illustrations already use for their forest-green shapes.

   The client is sending the final HEX codes separately; when they arrive,
   this file and the BRAND map in scripts/trace-illustrations.mjs are the only
   places that need to change.

   500 and 600 are both the primary on purpose: whichever step an accent uses,
   it lands on the logo green. 700 is the deep green for buttons and green text,
   800 its hover. `brand`, `emerald`, `green`, `gray` and `slate` all point at
   this palette so no stray Tailwind default can creep back in.
--------------------------------------------------------------------------- */
const startGreen = {
  50: '#EAF7EE',
  100: '#D3EFDC',
  200: '#A8DFBA',
  300: '#6FCB91',
  400: '#33BC6C',
  500: '#00B050',
  600: '#00B050',
  700: '#007A31',
  800: '#006027',
  900: '#004D1F',
  950: '#003D19',
};

/* The client's charcoal and grey are the cool greys of the standard Tailwind
   scale, so the whole neutral ramp follows that family. 600 is the body grey
   and 900 the heading charcoal, the steps the pages already use for them. */
const startNeutral = {
  50: '#FAFAFA',
  100: '#F3F4F6',
  150: '#E5E7EB',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#6B7280',
  700: '#4B5563',
  800: '#1F2937',
  900: '#1F2937',
  950: '#111827',
};

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: startGreen,
        emerald: startGreen,
        green: startGreen,
        gray: startNeutral,
        slate: startNeutral,
        charcoal: startNeutral,
      },
      /* Flat and open rather than deep and corporate. */
      boxShadow: {
        '2xs': '0 1px 1px rgba(31,41,55,0.04)',
        xs: '0 1px 2px rgba(31,41,55,0.04)',
        sm: '0 1px 2px rgba(31,41,55,0.05)',
        DEFAULT: '0 1px 3px rgba(31,41,55,0.06)',
        md: '0 2px 8px -3px rgba(31,41,55,0.08)',
        lg: '0 6px 20px -10px rgba(31,41,55,0.12)',
        xl: '0 10px 30px -16px rgba(31,41,55,0.14)',
        '2xl': '0 16px 44px -26px rgba(31,41,55,0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
