/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "otakudesu.cloud",
      },
    ],
  },
}

module.exports = nextConfig
