import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Ensure all routes are generated as HTML files
  trailingSlash: false,
}

export default nextConfig
