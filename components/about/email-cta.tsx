
import Link from "next/link";

import { H3, H4 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import GlowingButtonLight from "../ui/glowingButtonLight";

interface Props {
  title: string;
  subtitle: string;
}

function EmailCta(props: Props) {
  return (
    <div className="gap-4 rounded lg:flex lg:justify-between sm:px-8 sm:py-20 lg:px-16 lg:py-26 mx-auto justify-center max-w-5xl">
      <div>
        <H4 as="h2" className="text-midnight">
          {props.title}
        </H4>
        <p className="mt-3 text-lg leading-6 text-gray-800">{props.subtitle}</p>
      </div>
      <div className="mt-4 md:mt-5 md:max-w-xs">
        <GlowingButtonLight variant="link" href="/signup" id="hero">
          Level Up
        </GlowingButtonLight>
        <p className="mt-4 text-xs leading-6 text-left text-gray-800">
          We care about your{" "}
          <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
            privacy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default EmailCta;
