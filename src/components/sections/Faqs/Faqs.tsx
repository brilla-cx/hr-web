"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3, Lead } from "../../ui";

function Faqs({ faqs }: { faqs: any[] }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-16 lg:py-26">
      <div className="mx-auto max-w-5xl">
        <H3 as="h2" className="text-gray-200">
          Frequently asked questions
        </H3>
        <Lead className="mt-6 text-gray-400">
          Have a question? We've got answers. If the FAQ below don't do the
          trick,{" "}
          <Link
            className={cx("font-bold text-gray-200", hoverStyles)}
            href="/contact">
            drop us a line
          </Link>
          .
        </Lead>

        <dl className="mt-10 grid grid-cols-1 gap-10 divide-y divide-neutral-200/10 pt-10 md:grid-cols-2 ">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="col-span-1 pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-200">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <div className="no-effects prose prose-invert mt-2 leading-snug text-gray-400">
                      <PortableText value={faq.answer} />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Faqs;
