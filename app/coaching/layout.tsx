import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'One-on-One Coaching',
  description:
    'Coaching built around your situation: speaking with authority, difficult conversations, professional English, career direction and leading others.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
