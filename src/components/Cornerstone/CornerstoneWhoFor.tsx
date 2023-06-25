import { CheckIcon } from "@heroicons/react/24/outline";

import { WhoFor } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

function CornerstoneWhoFor(props: WhoFor) {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="grid grid-cols-1 col-span-2 text-base leading-7 text-gray-400 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {props.whoForCardItems.map((wfci) => (
              <div key={wfci._key} className="relative pl-9">
                <dt className="font-semibold text-gray-200">
                  <CheckIcon
                    className="absolute left-0 w-5 h-5 text-gray-200 top-1"
                    aria-hidden="true"
                  />
                  {wfci.heading}
                </dt>
                <dd className="mt-2">
                  <PortableText value={wfci.content} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneWhoFor;
