import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Your Development',
  description:
    'Tell us where you are and what you want to change, and we will arrange a confidential consultation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
