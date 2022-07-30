/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.githubusercontent.com",
      "iso.500px.com",
      "storage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
