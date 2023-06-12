import Image from "next/image";
import Link from "next/link";
import React from "react";

import Container from "@/components/container";
import LogoImage from "@/public/hey-rebekah-logo.svg";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-h-screen bg-midnight">
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
      <div className="">{children}</div>
    </div>
  );
}

export default Layout;
