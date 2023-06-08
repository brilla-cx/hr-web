/* eslint-disable require-await */
/** @type {import('next').NextConfig} */
const commonHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // {
  //   key: "X-Frame-Options",
  //   value: "SAMEORIGIN",
  // },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const fontHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const fonts = ["lexend-deca", "lexend-semibold", "lexend"];
const fontRoutes = fonts.map((font) => ({
  source: `/assets/fonts/${font}.ttf`,
  headers: fontHeaders,
}));

const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.giphy.com" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
  // eslint-disable-next-line require-await
  async redirects() {
    return [
      {
        source: "/studio",
        destination: "https://heyrebekah.sanity.studio/",
        permanent: false,
      },
      {
        source: "/book-club",
        destination: "/books",
        permanent: true,
      },
    ];
  },
  // eslint-disable-next-line require-await
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [...commonHeaders],
      },
      ...fontRoutes,
    ];
  },
};

module.exports = nextConfig;
