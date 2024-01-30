"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import { Fragment } from "react";

import { H5 } from "@/components/ui";
import DateTime from "@/components/ui/time";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { client } from "@/sanity/client";

const resources = [
  { name: "Archives", href: "/gists" },
  { name: "Built With", href: "/built-with" },
  { name: "Book Club", href: "/books" },
  { name: "Subscribe", href: "/signup" },
  { name: "Help", href: "/contact" },
];
const company = [
  { name: "Advertise", href: "/contact" },
  { name: "Partner", href: "/partners" },
  { name: "About", href: "/about" },
  { name: "Rebekah Radice", href: "/rebekah-radice" },
  { name: "Contact", href: "/contact" },
];

export default function Menu({ recentPosts }) {
  return (
    <Popover className="">
      {({ open }) => (
        <>
          <Popover.Button
            variant="secondary"
            className="text-med relative z-30 inline-flex items-center justify-center gap-1 rounded bg-midnight px-3 py-3 font-semibold uppercase leading-none text-gray-200 focus:outline-none focus:ring-0">
            {open ? "Close" : "Menu"}
            {open ? (
              <XMarkIcon
                className="h-5 w-5 transition-all"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5 transition-all ui-open:rotate-180"
                aria-hidden="true"
              />
            )}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1">
            <Popover.Panel className="fixed inset-0 top-0 z-20 max-h-screen overflow-y-auto border-b-8 border-pink bg-midnight pt-16">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 py-10 lg:grid-cols-[3fr,1fr]">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase leading-6 text-gray-400">
                      Resources
                    </h3>
                    <div className="mt-6 flow-root">
                      <div>
                        {resources.map((item) => (
                          <Popover.Button
                            as={Link}
                            key={item.name}
                            href={item.href}
                            aria-label={`Go to ${item.name} page`}
                            className="mb-10 flex gap-x-4 text-4xl font-semibold leading-6 tracking-tight text-gray-200 md:mb-16 md:text-5xl">
                            <span className={cx("hover:pb-4", ...hoverStyles)}>
                              {item.name}
                            </span>
                          </Popover.Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase leading-6 text-gray-400">
                      Company
                    </h3>
                    <div className="mt-6 flow-root">
                      <div>
                        {company.map((item) => (
                          <Popover.Button
                            as={Link}
                            key={item.name}
                            href={item.href}
                            aria-label={`Go to ${item.name} page`}
                            className="mb-10 flex gap-x-4 text-4xl font-semibold leading-6 tracking-tight text-gray-200 md:mb-16 md:text-5xl">
                            <span className={cx("hover:pb-4", ...hoverStyles)}>
                              {item.name}
                            </span>
                          </Popover.Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden gap-8 lg:grid lg:grid-cols-1 xl:grid-cols-1 xl:grid-rows-3">
                  <h3 className="sr-only">Recent posts</h3>
                  {recentPosts.slice(0, 3).map((post) => (
                    <NavArticles key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function NavArticles({ post }) {
  const imageProps = useNextSanityImage(client, post.image);
  return (
    <article
      key={post._id}
      className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
      <Popover.Button
        as={Link}
        href={`/gists/${post.slug.current}`}
        aria-label={`Read post ${post.name}`}>
        {post.image && (
          <div className="relative flex-none">
            <Image
              className="aspect-[2/1] w-full rounded bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
              src={imageProps.src}
              alt={post.image.alt || "cover"}
              width={300}
              height={200}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-x-4">
            <DateTime
              className="text-sm text-gray-500"
              date={post?.publishedAt || post._createdAt}
            />
          </div>
          <H5
            as="h2"
            className={cx(
              "mt-2 line-clamp-2 inline text-gray-200",
              hoverStyles,
            )}>
            <span className="absolute inset-0" />
            {post.name}
          </H5>
        </div>
      </Popover.Button>
    </article>
  );
}
