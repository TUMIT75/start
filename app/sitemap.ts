import type { MetadataRoute } from 'next';

const BASE = 'https://start-two-nu.vercel.app';

const ROUTES = [
  '',
  '/about',
  '/coaching',
  '/courses',
  '/courses/english-for-professional-success',
  '/for-organisations',
  '/resources',
  '/contact',
  '/insights',
  '/start-your-development',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
}
