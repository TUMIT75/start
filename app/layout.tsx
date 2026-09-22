import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overlays from '@/components/Overlays';
import './globals.css';

/* Manrope, per the 20 September note: Plus Jakarta Sans read rounded and heavy,
   and made every heading feel bulky. Self-hosted by Next at build time, so
   there is no render-blocking request to Google and no flash of fallback text.
   Regular, Medium and Semibold only — the three weights on the 21 September
   spec sheet. Nothing is bold; hierarchy comes from size and spacing. */
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const description =
  'Start SAH provides training, coaching and development that helps individuals overcome barriers, develop their capabilities and excel personally and professionally.';

export const metadata: Metadata = {
  metadataBase: new URL('https://start-two-nu.vercel.app'),
  title: {
    default: 'Start SAH | Developing People. Unlocking Potential.',
    template: '%s | Start SAH',
  },
  description,
  openGraph: {
    title: 'Start SAH | Developing People. Unlocking Potential.',
    description,
    type: 'website',
  },
  icons: { icon: '/logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="bg-white text-charcoal-800 antialiased selection:bg-brand-500 selection:text-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Overlays />
      </body>
    </html>
  );
}
