import type { Config } from 'tailwindcss';

/* ---------------------------------------------------------------------------
   START SAH BRAND PALETTE
   Taken from the logo, per the client brief:
     START Green  #00C853   the accent — never a page background
     Charcoal     #2E2E2E   lettering, line work, dark sections
     Off-White    #FAFAFA   quiet section backgrounds
     Light Grey   #E6E6E6   rules, secondary fills

   500 and 600 are both the logo green on purpose: whichever step a button or
   accent uses, it lands on #00C853. 700 and above are reserved for green text,
   which needs the contrast. `brand`, `emerald`, `green`, `gray` and `slate` all
   point at this palette so no stray Tailwind default can creep back in.
--------------------------------------------------------------------------- */
const startGreen = {
  50: '#ECFDF3',
  100: '#D3FAE3',
  200: '#A8F5C8',
  300: '#6BEBA3',
  400: '#2ADC78',
  500: '#00C853',
  600: '#00C853',
  700: '#00963C',
  800: '#007A31',
  900: '#006027',
  950: '#003D19',
};

const startNeutral = {
  50: '#FAFAFA',
  100: '#F2F2F2',
  150: '#E6E6E6',
  200: '#E6E6E6',
  300: '#D6D6D6',
  400: '#ADADAD',
  500: '#8A8A8A',
  600: '#6B6B6B',
  700: '#4A4A4A',
  800: '#2E2E2E',
  900: '#242424',
  950: '#1A1A1A',
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
        '2xs': '0 1px 1px rgba(46,46,46,0.04)',
        xs: '0 1px 2px rgba(46,46,46,0.04)',
        sm: '0 1px 2px rgba(46,46,46,0.05)',
        DEFAULT: '0 1px 3px rgba(46,46,46,0.06)',
        md: '0 2px 8px -3px rgba(46,46,46,0.08)',
        lg: '0 6px 20px -10px rgba(46,46,46,0.12)',
        xl: '0 10px 30px -16px rgba(46,46,46,0.14)',
        '2xl': '0 16px 44px -26px rgba(46,46,46,0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
