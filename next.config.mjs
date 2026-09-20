/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600],
    imageSizes: [180, 240, 320, 400, 500, 620, 760, 940, 1240],
    qualities: [75, 92],
  },
  poweredByHeader: false,

  // The 20 September mock-up renamed two sections. Anything already linked to
  // the old paths keeps working.
  async redirects() {
    return [
      {
        source: '/programmes/:path*',
        destination: '/courses/:path*',
        permanent: true,
      },
      {
        source: '/organisational-development',
        destination: '/for-organisations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
