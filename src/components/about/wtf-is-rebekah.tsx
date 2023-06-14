import Link from "next/link";
import React, { FC, ReactNode } from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3, Lead } from "../ui";

const content: ReactNode[] = [
  "Rebekah Radice helps ambitious professionals thrive in today's world of work. For 45+ years, she's shown career-driven visionaries how to navigate constant change.",
  <>
    Now the co-founder of{" "}
    <Link
      href="https://bril.la/"
      className={cx(hoverStyles, "pr-1 font-bold text-white")}>
      BRIL.LA
    </Link>
    , a woman-owned agency, she launched Hey Rebekah with her longtime
    colleague, Ambreen Dar. The newsletter offers simple tips to help readers
    adapt to new technology and build careers with purpose.
  </>,
  "In a world of unknowns, they light the way. Their newsletter opens minds to new horizons of what's possible, achievable, and meaningful in our careers through the adoption of generative AI. For those with ambition, passion and an appetite for growth, the voyage awaits.",
  "Together, they help ambitious professionals thrive in today's world of work. After years empowering people with purpose, they believe this:",
];

const WtfIsHeyRebekah: FC = () => {
  return (
    <div className="px-2 py-16 sm:py-24 lg:px-16 lg:py-26">
      <H3 as="h2" className="pb-6 text-center text-gray-200">
        Who TF is Rebekah Radice?
      </H3>
      <div className="mx-auto max-w-2xl justify-center space-y-6 text-xl text-gray-400">
        {content.map((text, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Lead key={idx} className="gap-7">
            {text}
          </Lead>
        ))}
        <div className="mx-4 my-7 mt-8 border-l-2 border-pink p-6 pl-4 text-xl leading-relaxed text-gray-300">
          <p>We all long to push past limits into uncharted territory. Technology may change how we work, but it can't replace our thirst for creativity, meaning, and impact.</p>
          <p className="mt-6">— Ambreen & Rebekah</p>
        </div>
      </div>
    </div>
  );
};

export default WtfIsHeyRebekah;
