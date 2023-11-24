/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gogocdn.net",
      },
    ],
  },
}

module.exports = nextConfig
