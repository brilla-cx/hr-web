/* eslint-disable no-undef */
// @ts-nocheck
import "../globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SITE_URL } from "@/lib/constants";
import { cx } from "@/lib/utils";

// export const revalidate = 86400;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Hey Rebekah | Like Morning Brew for freelancers",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter for freelancers. We'll help you upskill your work in 6 minutes or less. Build a thriving career, earn more, and find your joy. Our moms think it's awesome, you will too. 🔥",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heyrebekah.com',
    title: 'Hey Rebekah | Like Morning Brew for freelancers',
    description:
      "Hey Rebekah is a free daily newsletter for freelancers. We'll help you upskill your work in 6 minutes or less. Build a thriving career, earn more, and find your joy. Our moms think it's awesome, you will too. 🔥",
    siteName: 'Hey Rebekah',
    // Surjith to update this if needed otherwise delete
    /*images: [
      {
        url: 'public/og.png', // Surjith to update this
        width: 1200,
        height: 630,
        alt: 'An open graph image for Hey Rebekah',
      },
    ],*/
  },
  robots: {
    index: 'noindex',
    follow: 'nofollow',
  },
  referrer: 'origin-when-cross-origin',
  authors: [
    {
      name: 'Hey Rebekah Team',
      url: 'https://heyrebekah.com',
    },
  ],
  generator: {
    name: 'Hey Rebekah by BRIL.LA, LLC.',
    url: 'https://bril.la',
  },
  keywords: [
    'Like Morning Brew',
    'freelance newsletter',
    'freelancer training',
  ],
  themeColor: '#041746',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: {
    name: 'Hey Rebekah Team',
    url: 'https://heyrebekah.com',
  },
  publisher: {
    name: 'BRIL.LA, LLC.',
    url: 'https://bril.la',
    logo: 'https://uploads-ssl.webflow.com/63fd8f254924322ec4c9c439/64681f49489e82e99a23db6a_brilla-black-logo-web.png',
  },
  alternates: {
    canonical: 'https://heyrebekah.com',
  },
  icons: [
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    {
      src: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    },
    {
      src: "/favicon-194x194.png",
      sizes: "194x194",
      type: "image/png"
    },
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    },
    {
      src: "/safari-pinned-tab.svg",
      type: "image/svg+xml",
      color: "#ff00fe"
    },
    {
      src: "/favicon.ico",
      type: "image/x-icon"
    },
  ],
  manifest: '/public/manifest.json', // Update if different
  categories: [
    'Freelancing',
    'AI for Freelancers',
    'Freelancer Training',
    'Freelancer Newsletter',
    'Self-Employed',
    'Career',
    'Productivity',
  ],
};

const lexend = localFont({
  src: [
    {
      path: "./assets/fonts/lexend.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/lexend.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lexend",
  display: "swap",
});

const lexendDeca = localFont({
  src: "./assets/fonts/lexend-deca.ttf",
  variable: "--font-lexend-deca",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "antialiased font-sans",
        lexend.variable,
        lexendDeca.variable
      )}>
      <body>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
