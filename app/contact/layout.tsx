import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Start SAH about individual coaching, a programme, or developing your organisation’s people.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
