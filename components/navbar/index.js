import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";
import LogoImage from "@/public/hey-rebekah-logo.svg";
import { getPaginatedPosts } from "@/sanity/client";

import Menu from "./menu";

export default async function Navbar() {
  const recentPosts = await getPaginatedPosts({ limit: 2 });
  return (
    <div className="sticky top-0 z-50 bg-midnight" aria-label="Main navigation">
      <div className="relative shadow">
        <Container
          alt
          large
          className="h-20 py-5 border-l border-r border-neutral-200 border-opacity-10">
          <div className="flex justify-between items-center gap-10">
            <div className="isolate" style={{ zIndex: 2 }}>
              <Link href="/" aria-label="Go to home page">
                <div style={{ zIndex: 100 }}>
                  <Image
                    src={LogoImage}
                    alt="Hey Rebekah Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </Link>
            </div>
            <div style={{ zIndex: 1 }}>
              <Menu recentPosts={recentPosts} aria-label="Menu" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
