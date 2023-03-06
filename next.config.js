/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "scontent.flos5-1.fna.fbcdn.net",
      "cdn.sanity.io",
    ],
  },
};
