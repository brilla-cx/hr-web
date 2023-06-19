"use client";
import React, { useEffect } from "react";

import { GlowingButton, H3, H4, H6, Lead } from "@/components/ui";

const RememberedFor = () => {
  useEffect(() => {
    // Define a helper function to select elements
    const els = (sel: string, el?: HTMLElement | Document) =>
      (el || document).querySelectorAll(sel);

    // Select all ".holder" elements
    const holders = document.querySelectorAll<HTMLElement>(".holder");
    holders.forEach((elHolder) => {
      // Select ".holder__head" elements within each ".holder" element
      const elsHead = els(".holder__head", elHolder);
      const tot = elsHead.length;

      elsHead.forEach((elHead, i) => {
        const headElement = elHead as HTMLElement;
        // Set custom CSS variables "--t" and "--b" using the index values
        headElement.style.setProperty("--t", i.toString());
        headElement.style.setProperty("--b", (tot - 1 - i).toString());
      });
    });
  }, []);

  return (
    <div className="px-4 py-12 mx-auto text-center lg:py-26 sm:px-8 sm:py-20">
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-4 holder md:col-span-2">
          <div className="sticky text-left text-gray-200 holder__head">
            <H3 as="h2">Hey Rebekah is what I'll be remembered for</H3>
            <Lead className="mt-5 text-gray-400">
              Hey Rebekah is a free daily newsletter for knowledge workers. I launched it to help professionals bring AI in to their workflows. Everything we produce is free and always will be. It's about to get a whole lot better too thanks to machine learning. We're also creating some pretty cool apps to make generative AI more accessible.
            </Lead>
            <div className="max-w-sm mt-12">
              <GlowingButton type="link" href="/signup" aria-label="Go to sign-up form">
                Join hey Rebekah
              </GlowingButton>
            </div>
          </div>
        </div>

        <section className="col-span-4 gap-20 text-left text-gray-200 holder md:col-span-2">
          <div className="holder__head sticky space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <H4 as="h3">Best newsletter for AI</H4>
            <H6 as="h4">Like Morning Brew, but for ChatGPT</H6>
            <Lead className="pb-4 text-gray-400">
              A free daily newsletter. We write about things that help you
              become better at what you do with AI.
            </Lead>
          </div>
          <div className="holder__head space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <Lead className="w-48 px-2 py-2 text-center border-2 rounded border-gray-200/10 bg-midnight">
              COMING SOON
            </Lead>
            <H4 as="h3">Free Generative AI</H4>
            <H6 as="h4">OpenAI x Anthropic fine-tuned for knowledge workers</H6>
            <Lead className="text-gray-400 ">
              We created and curated embedded models in a bunch of different fields. It'll save you from fumbling around. You'll get accurate information to get your work done sooner, so you can enjoy more down time.
            </Lead>
          </div>
          <div className="holder__head space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <Lead className="w-48 px-2 py-2 text-center border-2 rounded border-gray-200/10 bg-midnight">
              COMING SOON
            </Lead>
            <H4 as="h3">Free Community</H4>
            <H6 as="h4">Like your favorite social platform but better</H6>
            <Lead className="text-gray-400 ">
              You'll have exclusive access to over 338,000 knowledge workers. Our community will also be supported by top experts, AI influencers, and a few crazy smart people.
            </Lead>
          </div>
          <div className="holder__head space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <Lead className="w-48 px-2 py-2 text-center border-2 rounded border-gray-200/10 bg-midnight">
              COMING SOON
            </Lead>
            <H4 as="h3">Exclusive discounts</H4>
            <H6 as="h4">Save tons of money on the tools you already use</H6>
            <Lead className="pb-4 text-gray-400">
              No more overpaying for the tools you rely on. Enjoy exclusive
              discounts on the tools you already use. Now you can run your
              business without breaking the bank.
            </Lead>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RememberedFor;
