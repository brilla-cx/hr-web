import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { GlowingButton, H4 } from "../ui";

function CornerstoneCta1() {
  return (
    <div className="max-w-6xl px-2 py-16 mx-auto border rounded lg:py-26 border-gray-200/10 bg-slate-900 sm:py-24 lg:my-24 lg:flex lg:justify-between lg:px-16">
      <div className="max-w-3xl">
        <H4 as="h2" className="text-white ">
          You've read this far, just subscribe already
        </H4>
        <p className="mt-3 text-lg leading-relaxed text-gray-300">
          What's the worst that will happen? You'll get better at what you do,
          enjoy a few laughs? It ain't hard...click the button below and give us
          a shot.
        </p>
      </div>
      <div className="mt-4 md:mt-5 md:max-w-xs">
        <GlowingButton
          variant="link"
          href="/signup"
          id="about-cta2"
          aria-label="Go to sign-up form">
          Level Up
        </GlowingButton>
        <p className="mt-4 text-xs leading-6 text-left text-gray-300">
          We care about your{" "}
          <Link
            href="/privacy"
            className={cx("font-bold text-white", hoverStyles)}>
            privacy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default CornerstoneCta1;
