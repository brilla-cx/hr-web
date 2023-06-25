import { WhyShouldCare } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

function CornerstoneWhyShouldCare(props: WhyShouldCare) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            {props?.customHeading}
          </h2>
          <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
            {props.whyCareCardItems &&
              props.whyCareCardItems.map((wci) => {
                return (
                  <div key={wci._key}>
                    <dt className="text-base font-semibold leading-7 text-gray-200">
                      <div
                        className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-slate-900"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: wci.Icon.svg }}
                      />
                      {wci.heading}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-400">
                      <PortableText value={wci.content} />
                    </dd>
                  </div>
                );
              })}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneWhyShouldCare;
