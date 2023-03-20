/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true,
    basePath: '/My_Pokemon_List',
    assetPrefix: '/My_Pokemon_List/',
  }
}

module.exports = nextConfig
