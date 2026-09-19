import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organisational Development',
  description:
    'Workforce and team development for organisations — training needs analysis, communication, leadership academies, train the trainer and bespoke programmes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
