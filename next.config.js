/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    URL_CLIENT: "http://localhost:3000",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

