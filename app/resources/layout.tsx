import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources & Diagnostic',
  description:
    'A short communication diagnostic and a set of free guides, with no sign-up wall in front of them.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
