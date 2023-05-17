/* eslint-disable no-undef */
import "../globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cx } from "@/lib/utils";

export const revalidate = 86400;

export const metadata = {
  title: {
    default: "Hey Rebekah | Like Morning Brew for freelancers",
    template: "%s | Hey Rebekah",
  },
  description:
    "Hey Rebekah is a free daily newsletter. We write about things that help you become better at what you do in 6 minutes or less. Even our moms think it’s pretty awesome.",
};

const poppins = localFont({
  src: [
    {
      path: "./assets/fonts/poppins-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/poppins-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const apfelGrotezk = localFont({
  src: "./assets/fonts/apfel-grotezk-fett.woff2",
  variable: "--font-apfel-grotezk",
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
        "antialiased font-sans text-black",
        poppins.variable,
        apfelGrotezk.variable
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
