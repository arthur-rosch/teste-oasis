/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateRobotsTxt: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
