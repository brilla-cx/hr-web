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
    // canonical: "https://heyrebekah.com",
  },
  title: {
    default: "Hey Rebekah | Like Morning Brew for freelancers",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter for freelancers. We'll help you upskill your work in 6 minutes or less. Build a thriving career, earn more, and find your joy. Our moms think it's awesome, you will too. 🔥",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyrebekah.com",
    title: "Hey Rebekah | Like Morning Brew for freelancers",
    description:
      "Hey Rebekah is a free daily newsletter for freelancers. We'll help you upskill your work in 6 minutes or less. Build a thriving career, earn more, and find your joy. Our moms think it's awesome, you will too. 🔥",
    siteName: "Hey Rebekah",
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
    index: "noindex",
    follow: "nofollow",
  },
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Hey Rebekah Team",
      url: "https://heyrebekah.com",
    },
  ],
  keywords: [
    "Like Morning Brew",
    "freelance newsletter",
    "freelancer training",
  ],
  creator: "Hey Rebekah Team",
  publisher: "BRIL.LA, LLC.",
  icons: [
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      src: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      src: "/favicon-194x194.png",
      sizes: "194x194",
      type: "image/png",
    },
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      src: "/safari-pinned-tab.svg",
      type: "image/svg+xml",
      color: "#ff00fe",
    },
    {
      src: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
  manifest: "/site.webmanifest",
  categories: [
    "Freelancing",
    "AI for Freelancers",
    "Freelancer Training",
    "Freelancer Newsletter",
    "Self-Employed",
    "Career",
    "Productivity",
  ],
};

const lexend = localFont({
  src: [
    {
      path: "./assets/fonts/lexend.ttf",
    },
  ],
  variable: "--font-lexend",
});

const lexendDeca = localFont({
  src: "./assets/fonts/lexend-deca.ttf",
  variable: "--font-lexend-deca",
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
