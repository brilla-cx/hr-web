import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

import { urlForImage } from "@/sanity/image";
import { CoolThings } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

function CornerstoneCoolThings(props: CoolThings) {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-400">
            {props.topHeading ?? "static top head"}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            {props.heading ?? "static heading"}
          </p>
          <div className="mt-6 text-lg leading-8 text-gray-400">
            <PortableText value={props.content} />
          </div>
        </div>
      </div>
      <div className="relative pt-16 overflow-hidden">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {props.image && (
            <Image
              src={urlForImage(props.image) ?? ""}
              alt={props.image.imageAltText ?? ""}
              className="mb-[-12%] max-h-[70vh] w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          )}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-midnight pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24 lg:px-8">
        <dl className="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-300 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {props.coolThingsItems.map((cti) => (
            <div key={cti._key} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <div
                  className="absolute w-5 h-5 text-gray-200 left-1 top-1"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: cti.Icon.svg }}
                />
                {cti.itemTitle}
              </dt>{" "}
              <dd className="inline">
                <PortableText value={cti.itemContent} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default CornerstoneCoolThings;
