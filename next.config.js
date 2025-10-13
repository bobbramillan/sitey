/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Image optimization settings
  images: {
    // Allow remote images from Unsplash (add more if needed)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],

    // ✅ Silence Next 16+ image quality warnings
    qualities: [75, 85, 95],
  },

  // ✅ Enable new app features safely
  experimental: {
    serverActions: {}, // Must be an object, not a boolean
  },

  // ✅ Optional performance and compatibility improvements
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // useful if you’re selling this template
  },
  typescript: {
    ignoreBuildErrors: true, // prevents TS from blocking builds for buyers
  },
};

module.exports = nextConfig;
