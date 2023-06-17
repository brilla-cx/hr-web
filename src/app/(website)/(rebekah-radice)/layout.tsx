import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

import Container from "@/components/container";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import LogoImage from "@/public/rebekah-radice-logo.svg";

function Navbar() {
  return (
    <div
      className="sticky top-0 z-50 border-b border-neutral-200/10 bg-midnight"
      aria-label="Rebekah navigation">
      <div className="relative shadow">
        <Container
          alt
          large
          className="h-20 border-l border-r border-neutral-200/10 py-5">
          <div className="flex items-center justify-between gap-10">
            <Link href="/">
              <Image
                src={LogoImage}
                alt="Hey Rebekah Logo"
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="space-x-4">
              <Link
                href="/social-blog"
                className={cx("text-md uppercase leading-6 text-gray-200", hoverStyles)}>
                Blog
              </Link>
              <Link
                href="/contact"
                className={cx("text-md uppercase leading-6 text-gray-200", hoverStyles)}>
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-neutral-200/10 bg-midnight"
      aria-labelledby="footer-heading"
      role="contentinfo">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl border-l border-r border-neutral-200/10 px-6 py-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="mx-auto pb-4 md:flex md:items-center md:justify-between">
          <div className="order-2 space-x-4">
            <Link
              href="/"
              className={cx("text-sm leading-6 text-gray-200", hoverStyles)}>
              HeyRebakah.com
            </Link>
            <Link
              href="/privacy"
              className={cx("text-sm leading-6 text-gray-200", hoverStyles)}>
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={cx("text-sm leading-6 text-gray-200", hoverStyles)}>
              Terms of Service
            </Link>
          </div>

          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Hey Rebekah and Rebekah Radice are
            registered trademakrs of
            <Link
              href="https://bril.la"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BRIL.LA - this link opens in a new tab"
              className={cx(hoverStyles)}>
              {" "}
              BRIL.LA, LLC.
            </Link>
            &nbsp;All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface Props {
  children: React.ReactNode;
}

export default function RebekaLayout(props: Props) {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
