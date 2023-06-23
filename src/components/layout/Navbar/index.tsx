import Image from "next/image";
import Link from "next/link";
import React from "react";
import { use } from "react";

import Container from "@/components/layout/Container/Container";
import CommandMenu from "@/components/shared/search/CommandMenu/CommandMenu";
import LogoImage from "@/public/hey-rebekah-logo.svg";
import { getPaginatedPosts } from "@/sanity/client";

import Menu from "./Menu/Menu";

async function getPosts() {
  const response = await getPaginatedPosts({ limit: 3 });
  return response;
}

export default function Navbar() {
  const recentPosts = use(getPosts());
  return (
    <div
      className="sticky top-0 z-50 border-b border-neutral-200/10 bg-midnight"
      aria-label="Main navigation">
      <div className="relative shadow">
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
            <div className="hidden sm:block">
              <CommandMenu />
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:hidden">
                <CommandMenu />
              </div>
              <div style={{ zIndex: 1 }}>
                <Menu recentPosts={recentPosts} aria-label="Menu" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
