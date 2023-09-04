/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const imagesDomains = [process.env.NEXT_PUBLIC_IMG || 'images.unsplash.com'];

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  i18n,
  images: {
    domains: imagesDomains,
  },
};

module.exports = nextConfig;
