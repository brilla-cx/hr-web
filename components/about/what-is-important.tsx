import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H2, H6 } from "../ui";

interface ListItem {
  image: string;
  title: string;
  desc: string | ReactNode;
}

function ListCard(props: ListItem) {
  return (
    <div className="flex flex-col text-center transition-all duration-300 border rounded border-gray-200/10 bg-slate-800 hover:scale-105 hover:transform">
      <div className="relative w-full max-h-60">
        <Image
          src={props.image}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl object-contain sm:aspect-[4/1] lg:aspect-[5/2]"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="p-6">
        <dt className="mb-4 text-4xl font-semibold leading-7 text-gray-200 gap-x-3">
          {props.title}
        </dt>
        <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-400">
          {typeof props.desc === "string" ? (
            <p
              className="flex-auto"
            // eslint-disable-next-line react/no-danger
            >
              {props.desc}
            </p>
          ) : (
            props.desc
          )}
        </dd>
      </div>
    </div>
  );
}

function WhatIsImportant() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <H6 className="text-base font-bold text-gray-200">
          Be real, be intentional, stay hungry
        </H6>
        <H2 className="mt-2 font-bold tracking-tight text-gray-200 sm:text-6xl">
          What's important to us
        </H2>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          We imagine a world where all freelancers have fair opportunities. They
          can learn, grow, and thrive in their career. Plus, gain access to
          tools that help them make more money and find their joy.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          We're firm believers in the principles of people-first. When we put
          our team first, they put our customers first, and eventually our
          customers put us first. Even though we're not perfect, we always try
          to do the right thing.
        </p>
      </div>
      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
        <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {listItems.map((item) => (
            <ListCard {...item} key={item.title} />
          ))}
        </dl>
      </div>
    </div>
  );
}

export default WhatIsImportant;

const listItems: ListItem[] = [
  {
    image:
      "https://cdn.sanity.io/images/smx99abf/production/6832188f7d96c7e760b678275891d3297c35e292-526x384.svg",
    title: "We understand",
    desc: "As a women-owned and minority woman-owned business, we understand the importance of diversity, equity, and inclusion.",
  },
  {
    image:
      "https://cdn.sanity.io/images/smx99abf/production/2d6620d0e72a0ff6bf46864b60c7a7950f589cc5-672x480.svg",
    title: "More than just us",
    desc: "We're in the process of overhauling our corporate structure and by-laws to embed the principles of the change we seek into our corporate DNA.",
  },
  {
    image:
      "https://cdn.sanity.io/images/smx99abf/production/c77a0269d1bfcf7d1820a61d0cbf2bb26ee08bab-32x32.svg",
    title: "We love our planet",
    desc: (
      <p>
        "1% of our{" "}
        <Link
          href="https://climate.stripe.com/Dr0vIi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stripe Climate - this link opens in a new tab"
          className={cx(hoverStyles, "pr-1 font-bold text-gray-200")}>
          {" "}
          gross revenue
        </Link>
        processed via Stripe is committed to carbon removal."
      </p>
    ),
  },
];
