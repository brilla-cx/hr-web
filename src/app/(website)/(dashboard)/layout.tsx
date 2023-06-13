import Image from "next/image";
import Link from "next/link";
import React from "react";

import Container from "@/components/container";
import LogoImage from "@/public/hey-rebekah-logo.svg";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-midnight">
      <div className="border-b border-neutral-200/10">
        <Container
          alt
          large
          className="h-20 border-l border-r border-neutral-200/10 py-5">
          <div className="flex items-center justify-between gap-10">
            <div className="isolate" style={{ zIndex: 2 }}>
              <Link href="/" aria-label="Go to home page">
                <div style={{ zIndex: 100 }}>
                  <Image
                    src={LogoImage}
                    alt="Hey Rebekah Logo"
                    className="h-8 w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
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
      <div className="mx-auto max-w-7xl border-l border-r border-neutral-200/10 px-5 py-6">
        <div className="mx-auto pb-4 md:flex md:items-center md:justify-between">
          <div className="order-2 space-x-4">
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
            &copy; {new Date().getFullYear()} Hey Rebekah is a product of
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

export default Layout;
