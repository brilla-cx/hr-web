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

// Injected content via Sentry wizard below
// Disabled during development
// Re-enable before Production

// const { withSentryConfig } = require("@sentry/nextjs");

// module.exports = withSentryConfig(
//   module.exports,
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options

//     // Suppresses source map uploading logs during build
//     silent: true,

//     org: "brilla",
//     project: "hr-web",
//   },
//   {
//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size)
//     transpileClientSDK: true,

//     // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
//     tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,
//   }
// );
