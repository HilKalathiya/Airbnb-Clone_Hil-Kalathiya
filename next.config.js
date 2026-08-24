/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desktop-only assignment: no complex i18n or redirects needed
  reactStrictMode: true,

  // All images served from local /public — no remote domains needed
  images: {
    unoptimized: false,
    // Allow Next.js Image optimization for local assets
  },
}

module.exports = nextConfig
