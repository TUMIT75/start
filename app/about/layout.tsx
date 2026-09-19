import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sonia Ali',
  description:
    'Start SAH was founded on a simple conviction: growth comes when people feel seen, psychologically safe, and practically equipped to overcome daily challenges.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
