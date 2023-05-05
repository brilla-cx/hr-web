"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fragment } from "react";

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

const recentPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    imageAltText: "An image representing the concept of marketing",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    category: { title: "Sales", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    imageAltText: "An image representing the concept of marketing",
  },
];

export default function Menu() {
  return (
    <Popover className="">
      <Popover.Button
        variant="secondary"
        className="px-3 py-3 text-lg uppercase font-semibold leading-none inline-flex gap-1 items-center justify-center relative bg-dark-blue text-white rounded focus:outline-none focus:ring-0 z-30">
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
        <Popover.Panel className="absolute inset-x-0 top-0 z-20 bg-dark-blue pt-16 border-b-2 border-black">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-aqua">
                  Resources
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        style={{
                          fontFamily: "var(--font-apfel-grotezk)",
                          letterSpacing: "-0.02em",
                        }}
                        className="flex gap-x-4 py-4 text-xl md:text-3xl leading-6 text-white hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-aqua">
                  Company
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {company.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        style={{
                          fontFamily: "var(--font-apfel-grotezk)",
                          letterSpacing: "-0.02em",
                        }}
                        className="flex gap-x-4 py-4 text-xl md:text-3xl leading-6 text-white hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Recent posts</h3>
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
                  <div className="relative flex-none">
                    <Image
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                      src={post.imageUrl}
                      alt={post.imageAltText}
                      width={300}
                      height={200}
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time
                        dateTime={post.datetime}
                        className="text-sm leading-6 text-aqua">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-8 bg-gray-50 px-3 py-1.5 text-xs font-medium text-dark-blue hover:bg-yellow">
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="mt-2 h-16 text-xl font-semibold leading-6 text-white line-clamp-2  hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-white hover:decoration-2 transition-all duration-200">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
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
