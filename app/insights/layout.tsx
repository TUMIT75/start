import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Podcast',
  description:
    'Practical perspectives on executive presence, diplomatic pushback and cross-cultural leadership, curated by Sonia Ali.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
