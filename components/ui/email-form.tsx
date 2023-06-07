import React from "react";

import { Input, Textarea } from "./forms";
import GlowingButton from "./glowingButton";
import { H3, Lead } from "./typography";

function EmailForm() {
  return (
    <div className="grid grid-cols-1 gap-6 px-0 pb-36 md:grid-cols-2 md:px-24 lg:grid-cols-2 lg:px-28">
      <H3 className="col-span-2 font-bold text-center text-gray-200">
        Together with Hey Rebekah
      </H3>
      <Lead className="max-w-lg col-span-2 mx-auto text-center text-gray-200">
        We're excited you're considering a partnership with us! Fill out the
        form below, and we'll get back to you pronto - faster than a chicken
        lays an egg.
      </Lead>
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="firstName"
        type="text"
        required
        placeholder="Rebekah"
        aria-label="Enter your first name"
        autoComplete="firstName"
      />
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="lastName"
        type="text"
        required
        placeholder="Radice"
        aria-label="Enter your last name"
        autoComplete="lastName"
      />
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        aria-label="Enter your email address to subscribe"
        autoComplete="email"
      />
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="phoneNumber"
        type="number"
        required
        placeholder="555-555-1212"
        aria-label="Enter your phone number"
        autoComplete="email"
      />
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="jobTitle"
        type="text"
        required
        placeholder="Job Title"
        aria-label="Enter your job Title"
        autoComplete="email"
      />
      <Input
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900 md:col-span-1"
        name="company"
        type="text"
        required
        placeholder="My Great Company, Inc."
        aria-label="Enter your company"
        autoComplete="email"
      />
      <Textarea
        className="col-span-2 text-gray-200 border-neutral-200/10 bg-slate-900"
        name="message"
        required
        placeholder="Enter your message"
        aria-label="Enter your message"
      />
      <div className="max-w-xs col-span-2 mx-auto">
        <GlowingButton
          variant="link"
          href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
          Let's make Good Things happen
        </GlowingButton>
      </div>
    </div>
  );
}

export default EmailForm;
