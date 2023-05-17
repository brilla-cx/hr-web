"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { H6 } from "@/components/ui";
import DateTime from "@/components/ui/time";
import { urlForImage } from "@/sanity/image";

const resources = [
  { name: "Archives", href: "/gists" },
  {
    name: "Hey Rebekah AI",
    href: "https://app.heyrebekah.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { name: "Community", href: "/community" },
  { name: "Discounts", href: "/built-with" },
  { name: "Help", href: "/contact" },
];
const company = [
  { name: "Advertise", href: "/advertise" },
  { name: "Partner", href: "/partner-program" },
  { name: "About", href: "/about" },
  { name: "Rebekah Radice", href: "/rebekah-radice" },
  { name: "Contact", href: "/contact" },
];

export default function Menu({ recentPosts }) {
  return (
    <Popover className="">
      <Popover.Button
        variant="secondary"
        className="px-3 py-3 text-lg uppercase font-semibold leading-none inline-flex gap-1 items-center justify-center relative bg-slate-950 text-white rounded focus:outline-none focus:ring-0 z-30">
        Menu
        <ChevronDownIcon
          className="h-5 w-5 ui-open:rotate-180 transition-all"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1">
        <Popover.Panel className="absolute inset-x-0 top-0 z-20 bg-slate-950 pt-16 border-b-2 border-pink">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-sky-500">
                  Resources
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        className="flex font-display tracking-tight gap-x-4 py-3 text-xl md:text-2xl leading-6 text-white hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-sky-500">
                  Company
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {company.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        className="flex font-display tracking-tight gap-x-4 py-3 text-xl md:text-2xl leading-6 text-white hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8 lg:grid-cols-2 hidden sm:grid">
              <h3 className="sr-only">Recent posts</h3>
              {recentPosts.map((post) => (
                <article
                  key={post._id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
                  {post.image && (
                    <div className="relative flex-none">
                      <Image
                        className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                        src={urlForImage(post.image)}
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
                        className="text-sky-500 text-xs font-bold"
                        date={post?.publishedAt || post._createdAt}
                      />
                    </div>
                    <H6
                      as="h2"
                      className="mt-2 h-16 text-white line-clamp-2 hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                      <Link href={`/gists/${post.slug.current}`}>
                        <span className="absolute inset-0" />
                        {post.name}
                      </Link>
                    </H6>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
