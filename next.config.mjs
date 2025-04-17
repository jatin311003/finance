// next.config.js
const { withNetlify } = require('@netlify/next');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

module.exports = withNetlify(nextConfig);
