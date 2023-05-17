import Link from "next/link";

import { Button, H1, Input, Lead } from "@/components/ui";
import hoverStyles from "@/lib/hoverStyles";
import { cx } from "@/lib/utils";
// T-10009 Update Home Hero styles
const Hero = (props) => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-26">
      <div className="max-w-5xl">
        <H1 className="text-white">
          Like Morning Brew for freelancers, without all the readers
        </H1>
        <Lead className="mt-5 max-w-3xl text-neutral-300">
          Hey Rebekah is a free daily newsletter. We write about things that
          help you become better at what you do in 6 minutes or less.
        </Lead>
        <Lead className="mt-5 max-w-3xl text-neutral-300">
          Even our moms think it's pretty awesome.
        </Lead>
      </div>
      <form className=" w-full max-w-xl mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <Input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
          <Button variant="alternate">Level Up</Button>
        </div>
        <p className="mt-4 text-sm leading-6 text-neutral-300">
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
