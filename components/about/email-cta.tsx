import Link from "next/link";

import { GlowingButton, H4 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
}

function EmailCta(props: Props) {
  return (
    <div className="max-w-6xl px-4 mx-auto border rounded lg:py-26 border-gray-200/10 bg-slate-900 sm:px-8 sm:py-20 lg:my-24 lg:flex lg:justify-between lg:px-16">
      <div className="max-w-3xl">
        <H4 as="h2" className="text-white ">
          {props.title}
        </H4>
        <p className="mt-3 text-lg leading-relaxed text-gray-300">
          {props.subtitle}
        </p>
      </div>
      <div className="mt-4 md:mt-5 md:max-w-xs">
        <GlowingButton variant="link" href="/signup" id="about-cta2">
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

export default EmailCta;
