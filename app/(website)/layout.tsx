/* eslint-disable no-undef */
import "../globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cx } from "@/lib/utils";

// export const revalidate = 86400;

export const metadata = {
  title: {
    default: "Hey Rebekah | Like Morning Brew for freelancers",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter. We write about things that help you become better at what you do in 6 minutes or less. Even our moms think it’s pretty awesome.",
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
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
