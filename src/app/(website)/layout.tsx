/* eslint-disable no-undef */
// @ts-nocheck
import "../globals.css";

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from "next";
import localFont from "next/font/local";
import PlausibleProvider from "next-plausible";
import React from "react";

import { SITE_URL } from "@/lib/constants";
import { cx } from "@/lib/utils";


// export const revalidate = 86400;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "https://heyrebekah.com",
  },
  title: {
    default: "Hey Rebekah | Like Morning Brew for AI",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter for knowledge workers. We help you upskill your work with AI tools like ChatGPT. Our moms love it! You will too. 🔥",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyrebekah.com",
    title: "Hey Rebekah | Like Morning Brew for AI",
    description:
      "Hey Rebekah is a free daily newsletter for knowledge workers. We'll help you upskill your work using AI tools like ChatGPT. Our moms think we're the best AI newsletter around, you will too. 🔥",
    siteName: "Hey Rebekah",
    image: "/og.png",
  },
  referrer: "origin-when-cross-origin",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#FFFFFF",
  colorScheme: "light",
  authors: [
    {
      name: "Hey Rebekah Team",
      url: "https://heyrebekah.com",
    },
  ],
  keywords: [
    "ChatGPT newsletter",
    "AI newsletter",
    "artifical intelligence",
  ],
  creator: "Hey Rebekah Team",
  publisher: "BRIL.LA, LLC.",
  twitter: {
    card: "summary_large_image",
    site: "rebekahradice",
    title: "Hey Rebekah | Like Morning Brew for AI",
    description: "Hey Rebekah is a free daily newsletter for knowledge workers. We'll help you upskill your work using AI tools like ChatGPT. Our moms think we're the best AI newsletter around, you will too. 🔥",
    creator: "rebekahradice",
    images: "/og.png",
  },
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
    "Newsletter for ChatGPT",
    "Artificial Intelligence Newsletter",
    "Newsletter for AI Tools",
    "Newsletter for AI",
    "AI Newsletter for knowledge workers",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx("font-sans antialiased", lexend.variable)}>
      <head>
        <PlausibleProvider
          domain="heyrebekah.com"
          trackOutboundLinks
          trackFileDownloads
          taggedEvents
        />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
