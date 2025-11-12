import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this 'images' block:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**', // This allows any path from images.unsplash.com
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '**', // This allows any path from images.unsplash.com
      },
    ],
  },
};

export default nextConfig;