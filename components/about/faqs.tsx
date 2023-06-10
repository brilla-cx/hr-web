"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

import { H3, Lead } from "../ui";

function Faqs({ faqs }: { faqs: any[] }) {
  return (
    <div className="px-6 pb-24 mx-auto max-w-7xl sm:px-8 sm:py-20 lg:px-16 lg:py-26">
      <div className="max-w-5xl mx-auto">
        <H3 as="h2" className="text-gray-200">
          Frequently asked questions
        </H3>
        <Lead className="mt-6 text-gray-400">
          Have a question? We've got answers. If the FAQ below don't do the trick,{" "}
          <Link className={cx("font-bold text-gray-200", hoverStyles)} href="/contact">drop us a line</Link>.
        </Lead>

        <dl className="grid grid-cols-1 gap-10 pt-10 mt-10 divide-y divide-neutral-200/10 md:grid-cols-2 ">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="col-span-1 pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-200">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="flex items-center ml-6 h-7">
                        {open ? (
                          <MinusSmallIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="pr-12 mt-2">
                    <div className="mt-2 leading-snug prose text-gray-400 no-effects prose-invert">
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
