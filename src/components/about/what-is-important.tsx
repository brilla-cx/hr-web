import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3 } from "../ui";

interface ImageProps {
  src: string;
  alt: string;
}

interface ListItem {
  image: ImageProps;
  title: string;
  desc: string | ReactNode;
}

function ListCard(props: ListItem) {
  return (
    <div className="flex max-w-3xl flex-col items-center justify-center rounded border border-gray-200/10 bg-slate-900 p-4">
      <div className="mb-4 flex object-contain">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={100}
          height={100}
        />
      </div>
      <dt className="mb-4 gap-x-3 text-center text-3xl font-semibold leading-7 text-gray-200">
        {props.title}
      </dt>
      <dd className="text-base leading-7 text-gray-300">
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
  );
}

function WhatIsImportant() {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-16 sm:py-24 lg:px-16 lg:py-26">
      <div className="mx-auto max-w-2xl lg:text-center">
        <H3
          as="h2"
          className="mt-2 font-bold tracking-tight text-gray-200 sm:text-6xl">
          What's important to us
        </H3>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          We imagine a world where all knowledge workers have fair opportunities. They can learn, grow, and thrive in their career. Plus, gain access to tools that help them make more money and find their joy.
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
    image: {
      src: "https://cdn.sanity.io/images/smx99abf/production/9e109a85b9f35e5748ba8a7fa821d701ef1f6e01-300x300.png",
      alt: "Logo of Women Owned Business",
    },
    title: "We understand",
    desc: "As a women- owned and minority woman - owned business, we understand the importance of diversity, equity, and inclusion.",
  },
  {
    image: {
      src: "https://cdn.sanity.io/images/smx99abf/production/6c291e7723bc0c54aeba881e2bc27e56032572eb-300x300.png",
      alt: "Logo of Team Owned Business",
    },
    title: "More than just us",
    desc: "We're in the process of overhauling our corporate structure and by-laws to embed the principles of the change we seek into our corporate DNA.",
  },
  {
    image: {
      src: "https://cdn.sanity.io/images/smx99abf/production/8d837288ec9198cf4b21058e8d4fde3dea7c8e06-300x300.png",
      alt: "Logo for Stripe Climate",
    },
    title: "We love our planet",
    desc: (
      <p>
        1% of our{" "}
        <Link
          href="https://climate.stripe.com/Dr0vIi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stripe Climate - this link opens in a new tab"
          className={cx(hoverStyles, "pr-1 font-bold text-gray-200")}>
          {" "}
          gross revenue
        </Link>
        processed via Stripe is committed to carbon removal. We're a 100% carbon
        neutral company. We care about the environment.
      </p>
    ),
  },
];
