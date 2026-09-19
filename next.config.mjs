/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The illustrations are flat line art, so modern formats compress them hard.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600],
    imageSizes: [180, 240, 320, 400, 500, 620, 760, 940, 1240],
    qualities: [75, 92],
  },
  poweredByHeader: false,
};

export default nextConfig;
