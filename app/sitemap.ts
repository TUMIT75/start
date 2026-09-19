import type { MetadataRoute } from 'next';

const BASE = 'https://start-two-nu.vercel.app';

const ROUTES = [
  '',
  '/about',
  '/programmes',
  '/programmes/english-for-professional-success',
  '/coaching',
  '/organisational-development',
  '/start-your-development',
  '/resources',
  '/contact',
  '/insights',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
}
