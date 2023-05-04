/* eslint-disable no-undef */
import "../globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cx } from "@/lib/utils";

export const revalidate = 86400;

export const metadata = {
  title: "HR Web App",
  description:
    "The new home of Hey Rebekah powered by Sanity.io, Next.js, and Tailwind CSS. Made with ❤️ in partnership with W3CTemplates.",
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
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
