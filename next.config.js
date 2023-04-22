/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: ["https://themer.sanity.build/"],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
