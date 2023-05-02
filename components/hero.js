import { Button, H1, Input, Lead } from "@/components/ui";
import Link from "next/link";

const Hero = (props) => {
  return (
    <div className="py-12 sm:py-20 lg:py-26">
      <div className="max-w-5xl">
        <H1>Like Morning Brew for freelancers, without all the readers</H1>
        <Lead className="mt-5 max-w-3xl">
          Hey Rebekah is a free daily newsletter. We write about things that
          help you become better at what you do in 6 minutes or less.
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
          <Button type="submit">Subscribe</Button>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          We care about your data. Read our{" "}
          <Link
            href="#"
            className="font-semibold border-b-2 border-pink hover:text-pink">
            privacy&nbsp;policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Hero;
