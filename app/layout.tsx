import "./reset.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { cx } from "@/lib/utils";

export const metadata = {
  title: "HR Web App",
  description:
    "The new home of Hey Rebekah powered by Sanity.io, Next.js, and Tailwind CSS. Made with ❤️ in partnership with W3CTemplates.",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
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
      <body>{children}</body>
    </html>
  );
}
