import { CheckIcon } from "@heroicons/react/20/solid";

import { GlowingButton, H2, H3, Lead } from "../ui";

const features = [
  {
    name: "Bespoke content developed just for your brand",
  },
  {
    name: "Editorial pre-approval from your team",
  },
  {
    name: "Featured original content produced for your product and the problems it solves for our readers",
  },
  {
    name: "Co-branded, evergreen newsletter and social posts",
  },
  {
    name: "Co-branded podcasts and live events",
  },
  {
    name: "Transparent and accessible real-time reports",
  },
];

export default function ExpectFromUs() {
  return (
    <div className="py-24 sm:py-32">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <H2 className="!text-base font-bold leading-7 text-gray-200">
            What to expect from us
          </H2>
          <H3 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Good karma, consistent channel, and a solid partner
          </H3>
          <Lead className="mt-6 text-base leading-7 text-gray-400">
            We value our partnerships and take your trust seriously. We make a
            big thing out of announcing each partnership to our community across
            social, email, and live events.
          </Lead>
        </div>
        <dl className="grid grid-cols-1 col-span-2 text-base leading-7 text-gray-400 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-6">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="font-semibold text-gray-400">
                <CheckIcon
                  className="absolute left-0 w-5 h-5 top-1 text-slate-400"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
            </div>
          ))}
          <div className="pt-16">
            <GlowingButton
              variant="link"
              href="mailto:partners@heyrebekah.com?subject=I%20m20intersted%20in%20partnerschip%20with%20hey%20rebekah%20.%20please%20contact%20me.">
              Become a partner
            </GlowingButton>
          </div>
        </dl>
      </div>
    </div>
  );
}
