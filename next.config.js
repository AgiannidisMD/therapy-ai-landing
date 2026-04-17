/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds (configure separately if needed)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds (types are checked locally)
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
