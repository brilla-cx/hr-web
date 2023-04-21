/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: ["https://themer.sanity.build/"],
  },
};

module.exports = nextConfig;
