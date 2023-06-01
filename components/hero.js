import GlowingButton from "components/ui/glowingButton";
import Link from "next/link";

import { H1, Input, Lead } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

const Hero = (props) => {
  return (
    <div className="lg:py-26 px-4 py-12 sm:px-8 sm:py-20 lg:px-16">
      <div className="max-w-5xl">
        <H1 className="text-gray-200">
          Like Morning Brew for freelancers, without all the readers
        </H1>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Hey Rebekah is a free daily newsletter. We write about things that
          help you become better at what you do in 6 minutes or less.
        </Lead>
        <Lead className="mt-5 max-w-3xl text-gray-400">
          Even our moms think it's pretty awesome.
        </Lead>
      </div>
      <form id="hero-subscribe" className=" mt-8 w-full max-w-xl">
        <div className="flex flex-col gap-4 md:flex-row">
          <label htmlFor="email-address" className="sr-only">
            email
          </label>
          <Input
            className="border-neutral-200/10 bg-slate-900 text-gray-200"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Enter your email address to subscribe"
            autoComplete="email"
          />
          <GlowingButton
            form="hero-subscribe"
            type="submit"
            variant="subscribe">
            Level Up
          </GlowingButton>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-400">
          We care about your{" "}
          <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
            privacy
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Hero;
