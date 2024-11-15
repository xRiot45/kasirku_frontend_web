/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    domains: ['localhost'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  distDir: 'build',
  transpilePackages: ['core'],
};
