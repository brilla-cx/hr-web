import Link from "next/link";
import React, { FC } from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3, Lead } from "../ui";

const WtfIsHeyRebekah: FC = () => {
  return (
    <div className="bg-midnight">
      <H3 as="h2" className="py-6 text-gray-200 text-center">
        Who TF is Rebekah Radice?
      </H3>
      <div className="mx-auto px-2 space-y-6 text-xl text-gray-400 max-w-2xl justify-center">
        <Lead className="gap-7">
          Rebekah Radice helps ambitious professionals thrive in today's world of work.
        </Lead>
        <Lead className="gap-7">
          For 45+ years, she's shown career-driven visionaries how to navigate constant change.
        </Lead>
        <Lead className="gap-7">
          Now the co-founder of{" "}
          <Link
            href="https://bril.la/"
            className={cx(hoverStyles, "pr-1 font-bold text-gray-100")}>
            BRIL.LA
          </Link>
          , a woman-owned agency, she launched Hey Rebekah with her longtime colleague, Ambreen Dar. The newsletter offers simple tips to help readers adapt to new technology and build careers with purpose.
        </Lead>
        <Lead className="gap-7">
          Together, they help ambitious professionals thrive in today's world of work. After years empowering people with purpose, they believe this:
          <blockquote className="mt-8 mx-4 my-7 p-6 pl-4 border-l-4 border-pink text-gray-300 text-2xl leading-loose">
            We all long to push past limits into uncharted territory. Technology may change how we work, but it can't replace our thirst for creativity, meaning, and impact.
          </blockquote>
        </Lead>
        <Lead className="gap-7">
          With Hey Rebekah, Rebekah and Ambreen aim to inspire that longing in knowledge professionals. They stoke dreams as bold as horizons. And fuel readers daily with wisdom and tools to turn visions into reality—and find success, joy, and lifelong purpose along the journey.
        </Lead>
        <Lead className="gap-7 pb-6">
          In a world of unknowns, Rebekah and Ambreen light the way. Their newsletter opens minds to new horizons of what's possible, achievable, and meaningful in our careers. For those with ambition, passion and an appetite for growth, the voyage awaits.
        </Lead>
      </div>
    </div>
  );
}

export default WtfIsHeyRebekah;