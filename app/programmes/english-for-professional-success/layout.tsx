import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English for Professional Success',
  description:
    'An eight-week cohort for boardroom articulation, cross-cultural diplomacy and commanding business English, with one-to-one coaching.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
