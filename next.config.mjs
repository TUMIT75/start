/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The illustrations are flat line art, so modern formats compress them hard.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1280],
    imageSizes: [180, 240, 320, 400, 500, 620],
  },
  poweredByHeader: false,
};

export default nextConfig;
