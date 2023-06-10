import Image from "next/image";
import React from "react";

import { H3 } from "../ui";

function PartnerCommunityData() {
  return (
    <div className="px-4 py-12 mx-auto lg:py-26 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <H3 as="h2" className="mt-2 text-gray-200">
          The largest independent community of freelancers
        </H3>
        <p className="mt-6 text-xl leading-8 text-gray-400">
          Rebekah Radice is a well known digital marketing influencer. She's
          been a successful solopreneur and freelancer since 1998, building her
          expertise through hands-on experience.
        </p>
      </div>
      <div className="flex flex-col items-end justify-between max-w-2xl gap-8 mx-auto lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <Image
            src="https://cdn.sanity.io/images/smx99abf/production/ad6f0d5f399d24f4d7201b63ce36b0801e5f1ef5-1028x1028.webp"
            alt=""
            className="mt-8 aspect-[6/5] w-full rounded bg-gray-400 object-cover lg:aspect-auto lg:h-[30.5rem]"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </div>
        <ul className="grid w-full grid-cols-2 gap-5">
          {[
            {
              id: 1,
              statsNumber: "310,000",
              statsTitle: "Community members",
            },
            {
              id: 1,
              statsNumber: "31,646",
              statsTitle: "Email subscribers",
            },
            {
              id: 1,
              statsNumber: "16%",
              statsTitle: "Monthly subscriber growth",
            },
            {
              id: 1,
              statsNumber: "63.3%",
              statsTitle: "Subscriber engagement",
            },
            {
              id: 1,
              statsNumber: "100%",
              statsTitle: "Free for freelancers",
            },
            {
              id: 1,
              statsNumber: "92",
              statsTitle: "Net Promoter Score",
            },
          ].map((opening) => (
            <li
              key={opening.id}
              className="w-full col-span-2 p-8 border rounded border-gray-200/10 bg-slate-900 md:col-span-1">
              <div className="flex flex-col gap-x-3">
                <H3 as="h2" className="!text-4xl text-gray-200">
                  {opening.statsNumber}
                </H3>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  {opening.statsTitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PartnerCommunityData;
