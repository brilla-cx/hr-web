import Link from "next/link";

import { GlowingButton, H3, Input } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
}

function EmailCta(props: Props) {
  return (
    <div className="gap-4 p-6 mb-24 border rounded border-gray-200/10 md:p-14 lg:flex lg:justify-between">
      <div>
        <H3 as="h2" className="text-gray-200">
          {props.title}
        </H3>
        <p className="mt-3 text-sm leading-6 text-gray-400">{props.subtitle}</p>
      </div>
      <form id="subscribe form" className={cx("w-full max-w-xl")}>
        {/* Layout div for form elements */}
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          {/* Label for email input field, hidden for visual users but accessible to screen readers */}
          <label htmlFor="email-address" className="sr-only">
            email
          </label>
          {/* Input component for email input with necessary styling and attributes */}
          <Input
            className="text-gray-200 border-neutral-200/10 bg-slate-900"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            aria-label="Enter your email address to subscribe"
            autoComplete="email"
          />
          {/* GlowingButton component for form submission */}
          <GlowingButton href="" form="email" type="submit" variant="subscribe">
            Level Up
          </GlowingButton>
        </div>
        {/* Privacy policy link */}
        <p className="mt-4 text-xs leading-6 text-left text-gray-400">
          We care about your{" "}
          <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
            privacy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default EmailCta;
