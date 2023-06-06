import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H1, Lead } from "../ui";

function WtfIsHeyRebekah() {
  return (
    <div className="p-4 mt-10 text-center border rounded border-gray-200/10 bg-slate-900 md:p-20 lg:mt-0 lg:p-28">
      <H1 as="h3" className="pb-6 text-gray-200">
        Who TF is Rebekah Radice?
      </H1>
      <div className="px-2 space-y-6 text-lg text-gray-400 md:px-20 lg:px-28">
        <Lead className="gap-7">
          According to the interwebs, Rebekah Radice is one of the top digital
          marketing experts in the world. She's an OG influencer and a
          self-employed professional since 1998.
        </Lead>
        <Lead>
          In 2019, she started{" "}
          <Link
            href="https://bril.la/"
            className={cx(hoverStyles, "pr-1 font-bold text-gray-200")}>
            BRIL.LA
          </Link>
          , a woman-owned CX agency with her longtime colleague Ambreen Dar—who
          prefers protegé, not sidekick.
        </Lead>
        <Lead>
          Hey Rebekah came about after receiving thousands of questions from the
          community. We realized we could do a lot more to help self-employed
          professionals everywhere.
        </Lead>

        <Lead>
          We're starting with a free daily newsletter to do just that. Together,
          we're on a mission to help freelance professionals build thriving
          careers, so they can experience the joy of financial freedom and
          success.
        </Lead>
      </div>
    </div>
  );
}

export default WtfIsHeyRebekah;
