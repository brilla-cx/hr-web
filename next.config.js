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
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
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
      { hostname: "images.unsplash.com" }, // Remove this once header GROQ is completed
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
    ];
  },
  // eslint-disable-next-line require-await
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.reddit.com https://*.sanity.io/ https://*.sanity.studio/ https://*.snapchat.com https://*.tiktok.com https://*.twitter.com https://*.vercel.app/ https://*.vimeo.com https://*.youtube.com https://cdn.segment.com https://www.googletagmanager.com https://libraria-prod.s3.us-west-1.amazonaws.com/ https://youtu.be/ https://www.youtube-nocookie.com/;
      style-src 'self' 'unsafe-inline' http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.tiktok.com https://*.twitter.com https://*.vercel.app/ https://*.vimeo.com https://*.youtube.com https://youtu.be/ https://www.youtube-nocookie.com/;
      img-src 'self' data: http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.twitter.com https://*.vimeo.com https://*.youtube.com https://youtu.be/ https://www.youtube-nocookie.com/;
      frame-src http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.sanity.io/ https://*.sanity.studio/ https://*.tiktok.com https://*.twitter.com https://*.youtube.com https://cdn.segment.com https://www.googletagmanager.com https://*.vercel.com https://youtu.be/ https://www.youtube-nocookie.com/;
      connect-src 'self' http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.sanity.io/ https://*.sanity.studio/ https://*.tiktok.com https://*.twitter.com https://*.youtube.com https://cdn.segment.com https://www.googletagmanager.com https://*.vercel.com https://youtu.be/ https://www.youtube-nocookie.com/;
      font-src 'self';
      object-src 'none';
      media-src 'self' http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.sanity.io/ https://*.sanity.studio/ https://*.tiktok.com https://*.twitter.com https://*.youtube.com https://cdn.segment.com https://www.googletagmanager.com https://*.vercel.com https://youtu.be/ https://www.youtube-nocookie.com/;
      workers-src 'self' http://localhost:3000/ https://hr-web-beta.vercel.app/ https://*.cloudflare.com https://*.facebook.com https://*.google.com https://*.instagram.com https://*.linkedin.com https://*.pinterest.com https://*.sanity.io/ https://*.sanity.studio/ https://*.tiktok.com https://*.twitter.com https://*.youtube.com https://cdn.segment.com https://www.googletagmanager.com https://*.vercel.com https://youtu.be/ https://www.youtube-nocookie.com/;
      frame-ancestors 'self' http://localhost:3000/ http://localhost:3333/ https://hr-web-beta.vercel.app/ https://*.vercel.app/;
    `;

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\n/g, ""),
          },
          ...commonHeaders,
        ],
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
