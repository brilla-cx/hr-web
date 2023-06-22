import { CheckIcon } from "@heroicons/react/20/solid";

import { GlowingButton, H3, Lead } from "@/components/ui";

const benefits = [
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

interface Props {
  scrollToContact: () => void;
}

export default function ExpectFromUs(props: Props) {
  return (
    <div className="px-4 py-12 lg:py-26 sm:px-8 sm:py-20">
      <div className="grid grid-cols-1 gap-16 mx-auto sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div className="col-span-5 md:col-span-2">
          <H3 as="h2" className="mt-2 text-gray-200">
            Good karma, consistent channel, and a solid partner
          </H3>
          <Lead className="mt-6 text-base leading-7 text-gray-400">
            We value our partnerships and take your trust seriously. We make a
            big thing out of announcing each partnership to our community across
            social, email, and live events.
          </Lead>
        </div>
        <ul className="grid grid-cols-2 col-span-5 gap-8 md:col-span-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.name}
              className="relative col-span-2 pl-9 md:col-span-1">
              <p className="text-xl text-gray-400">
                <CheckIcon
                  className="absolute left-0 w-5 h-5 font-bold text-gray-400 top-1"
                  aria-hidden="true"
                />
                {benefit.name}
              </p>
            </li>
          ))}
          <li
            className="col-span-2 pt-16 mx-auto" // eslint-disable-next-line react/jsx-no-bind
            onClick={() => props.scrollToContact()}>
            <GlowingButton aria-label="Go to partner form">Become a partner</GlowingButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
