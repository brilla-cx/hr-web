import Image from "next/image";
import React from "react";

import { H3 } from "../ui";

function PartnerCommunityData() {
  return (
    <div className="mx-auto mt-32 sm:mt-40 ">
      <div className="flex flex-col items-end justify-between max-w-2xl gap-16 mx-auto lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            The largest independent community of freelancers
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-400">
            Rebekah Radice is a well known digital marketing influencer. She's
            been a successful solopreneur and freelancer since 1998, building
            her expertise through hands-on experience.
          </p>
          <Image
            src="https://cdn.sanity.io/images/smx99abf/production/ad6f0d5f399d24f4d7201b63ce36b0801e5f1ef5-1028x1028.webp"
            alt=""
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-400 object-cover lg:aspect-auto lg:h-[34.5rem]"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <ul className="-my-8 divide-y divide-slate-900">
            {[
              {
                id: 1,
                statsNumber: "310,000",
                statsTitle: "Cmmunity memebers",
              },
              {
                id: 1,
                statsNumber: "31,646",
                statsTitle: "Cmmunity memebers",
              },
              {
                id: 1,
                statsNumber: "16%",
                statsTitle: "Cmmunity memebers",
              },
              {
                id: 1,
                statsNumber: "63.3%",
                statsTitle: "Cmmunity memebers",
              },
              {
                id: 1,
                statsNumber: "100%",
                statsTitle: "Cmmunity memebers",
              },
              {
                id: 1,
                statsNumber: "92",
                statsTitle: "Cmmunity memebers",
              },
            ].map((opening) => (
              <li key={opening.id} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dd className="flex-none w-full">
                    <H3 as="h2" className="!text-4xl text-gray-200">
                      {opening.statsNumber}
                    </H3>
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-4 text-base leading-7 text-gray-400">
                    {opening.statsTitle}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PartnerCommunityData;
