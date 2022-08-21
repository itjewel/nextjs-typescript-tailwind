/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
