"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { PortableText } from "@portabletext/react";
import React from "react";

function Faqs({ faqs }: { faqs: any[] }) {
  return (
    <div className="px-6 pb-24 mx-auto max-w-7xl sm:pb-32 lg:px-8 lg:pb-40">
      <div className="max-w-4xl mx-auto divide-y divide-slate-900">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-200">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
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
