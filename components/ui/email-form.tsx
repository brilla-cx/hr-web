import React from "react";

import { Input, Textarea } from "./forms";
import GlowingButton from "./glowingButton";
import { H3, Lead } from "./typography";

function EmailForm() {
  return (
    <div className="px-4 py-12 lg:py-26 sm:px-8 sm:py-20">
      <form>
        <div className="grid max-w-3xl grid-cols-2 gap-5 mx-auto md:grid-cols-4">
          <div className="col-span-4 text-center">
            <H3 as="h2" className="!text-center text-gray-200">
              Together with Hey Rebekah
            </H3>
            <Lead className="max-w-lg pt-5 mx-auto text-center text-gray-200">
              We're excited you're considering a partnership with us! Fill out
              the form below, and we'll get back to you pronto - faster than a
              chicken lays an egg.
            </Lead>
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              name="firstName"
              type="text"
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              required
              placeholder="Rebekah"
              aria-label="Enter your first name"
              autoComplete="firstName"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="lastName"
              type="text"
              required
              placeholder="Radice"
              aria-label="Enter your last name"
              autoComplete="lastName"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Enter your email address to subscribe"
              autoComplete="email"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="phoneNumber"
              type="number"
              required
              placeholder="555-555-1212"
              aria-label="Enter your phone number"
              autoComplete="email"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="jobTitle"
              type="text"
              required
              placeholder="Job Title"
              aria-label="Enter your job Title"
              autoComplete="email"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="company"
              type="text"
              required
              placeholder="My Great Company, Inc."
              aria-label="Enter your company"
              autoComplete="email"
            />
          </div>
          <div className="col-span-4">
            <Textarea
              className="text-gray-200 border-neutral-200/10 bg-slate-900"
              name="message"
              required
              placeholder="Enter your message"
              aria-label="Enter your message"
            />
          </div>
          <div className="col-span-4 pt-6 mx-auto">
            <GlowingButton
              variant="link"
              href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
              Let's make it happen
            </GlowingButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
