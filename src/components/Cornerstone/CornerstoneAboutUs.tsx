import { AboutUs } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

// const stats = [
//   { label: "Founded", value: "2021" },
//   { label: "Employees", value: "37" },
//   { label: "Countries", value: "12" },
//   { label: "Raised", value: "$25M" },
// ];

function CornerstoneAboutUs(props: AboutUs) {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-gray-400">
            {props?.topHeading}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            {props.heading}
          </h1>
          <div className="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <PortableText value={props?.content} />
            </div>
            <div>
              <PortableText value={props?.secondContent} />
            </div>
          </div>
          <dl className="grid grid-cols-1 mt-16 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {/* {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse pl-6 border-l gap-y-3 border-slate-800">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))} */}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneAboutUs;
