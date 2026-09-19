import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The learner dashboard is a signed-in area; nothing to index there.
      disallow: '/dashboard',
    },
    sitemap: 'https://start-two-nu.vercel.app/sitemap.xml',
  };
}
