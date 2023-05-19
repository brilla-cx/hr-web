/* eslint-disable no-undef */
import "../globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SITE_URL } from "@/lib/constants";
import { cx } from "@/lib/utils";

// export const revalidate = 86400;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hey Rebekah | Like Morning Brew for freelancers",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter for freelancers. We'll help you upskill your work in 6 minutes or less. Build a thriving career, earn more, and find your joy. Our moms think it's awesome, you will too. 🔥",
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
        lexendDeca.variable,
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
