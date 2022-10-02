/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
