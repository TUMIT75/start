import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Learning',
  description:
    'Your enrolled programmes, progress, quizzes and CPD certificates.',
  robots: { index: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
