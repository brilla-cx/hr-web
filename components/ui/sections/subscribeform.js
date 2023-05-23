// Import necessary components and utilities
import GlowingButton from "components/ui/glowingButton"; // Import GlowingButton component
import Link from "next/link"; // Import Link from Next.js

import hoverStyles from "@/lib/hover"; // Import hover styles
import { cx } from "@/lib/utils"; // Import classnames utility

import { Input } from "../forms"; // Import Input component from forms

// Define SubscribeForm component
// This component receives a formId prop that is used for form and button IDs
export default function SubscribeForm({ formId }) {
  return (
    // Form component with id passed from props, and appropriate styling
    <form id={formId} className="w-full max-w-xl mt-8 mx-auto">
      {/* Layout div for form elements */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Label for email input field, hidden for visual users but accessible to screen readers */}
        <label htmlFor="email-address" className="sr-only">
          email
        </label>
        {/* Input component for email input with necessary styling and attributes */}
        <Input
          className="bg-slate-900 border-neutral-200/10 text-gray-200"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          aria-label="Enter your email address to subscribe"
        />
        {/* GlowingButton component for form submission */}
        <GlowingButton form={formId} type="submit" variant="subscribe">
          Level Up
        </GlowingButton>
      </div>
      {/* Privacy policy link */}
      <p className="mt-4 text-xs leading-6 text-gray-400 text-left">
        We care about your{" "}
        <Link href="/privacy" className={cx("font-bold", hoverStyles)}>
          privacy
        </Link>
        .
      </p>
    </form>
  );
}
