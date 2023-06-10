import Link from "next/link";
import React, { FC, ReactNode } from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3, Lead } from "../ui";

const content: ReactNode[] = [
  "Rebekah Radice helps ambitious professionals thrive in today's world of work. For 45+ years, she's shown career-driven visionaries how to navigate constant change.",
  <>
    Now the co-founder of{" "}
    <Link href="https://bril.la/" className={cx(hoverStyles, "pr-1 font-bold text-white")}>
      BRIL.LA
    </Link>
    , a woman-owned agency, she launched Hey Rebekah with her longtime colleague, Ambreen Dar. The newsletter offers simple tips to help readers adapt to new technology and build careers with purpose.
  </>,
  "With Hey Rebekah, Rebekah and Ambreen aim to inspire that longing in knowledge professionals. They stoke dreams as bold as horizons. And fuel readers daily with wisdom and tools to turn visions into reality—and find success, joy, and lifelong purpose along the journey.",
  "In a world of unknowns, Rebekah and Ambreen light the way. Their newsletter opens minds to new horizons of what's possible, achievable, and meaningful in our careers. For those with ambition, passion and an appetite for growth, the voyage awaits.",
  "Together, they help ambitious professionals thrive in today's world of work. After years empowering people with purpose, they believe this:",
];

const WtfIsHeyRebekah: FC = () => {
  return (
    <div className="bg-midnight sm:px-8 sm:py-20 lg:px-16 lg:py-26">
      <H3 as="h2" className="pb-6 text-gray-200 text-center">
        Who TF is Rebekah Radice?
      </H3>
      <div className="mx-auto space-y-6 text-xl text-gray-400 max-w-2xl justify-center">
        {content.map((text, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Lead key={idx} className="gap-7">
            {text}
          </Lead>
        ))}
        <div className="mt-8 mx-4 my-7 p-6 pl-4 border-l-2 border-pink text-gray-300 text-2xl leading-relaxed">
          We all long to push past limits into uncharted territory. Technology may change how we work, but it can't replace our thirst for creativity, meaning, and impact.
        </div>
      </div>
    </div>
  );
}

export default WtfIsHeyRebekah;
