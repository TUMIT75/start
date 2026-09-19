import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'Training and coaching programmes for graduates, professionals, emerging managers and leaders — practical, cohort-based, and CPD accredited.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
