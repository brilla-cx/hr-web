import "../../globals.css";

import localFont from "next/font/local";
import React from "react";

import RebekaLayout from "@/components/rebekah-radice/layout";
import { cx } from "@/lib/utils";

const lexend = localFont({
  src: [
    {
      path: "../assets/fonts/lexend.ttf",
    },
  ],
  variable: "--font-lexend",
});

const lexendDeca = localFont({
  src: "../assets/fonts/lexend-deca.ttf",
  variable: "--font-lexend-deca",
});

interface Props {
  children: React.ReactNode;
}

export default function RebekahLayout(props: Props) {
  const { children } = props;
  return (
    <html
      lang="en"
      className={cx(
        "font-sans antialiased",
        lexend.variable,
        lexendDeca.variable
      )}>
      <main>
        <RebekaLayout>{children}</RebekaLayout>
      </main>
    </html>
  );
}
