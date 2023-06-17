"use client";
import React, { useEffect } from "react";

import { GlowingButton, H3, H4, H6, Lead } from "../ui";

const RememberFor = () => {
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
              I launched Hey Rebekah to help freelancers become better at what
              they do. Everything we create will always be free for readers and
              the community. Hey Rebekah is a free daily newsletter. It's about
              to get a whole lot better thanks to machine learning. We're also
              creating some pretty cool apps to make generative AI more
              accessible.
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
            <H4 as="h3">Best newsletter for freelancers</H4>
            <H6 as="h4">Like Morning Brew for freelancers</H6>
            <Lead className="pb-4 text-gray-400">
              A free daily newsletter. We write about things that help you
              become better at what you do in 6 minutes or less.
            </Lead>
          </div>
          <div className="holder__head space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <Lead className="w-48 px-2 py-2 text-center border-2 rounded border-gray-200/10 bg-midnight">
              COMING SOON
            </Lead>
            <H4 as="h3">Generative AI for freelancers</H4>
            <H6 as="h4">OpenAI x Anthropic fine-tuned for freelancers</H6>
            <Lead className="text-gray-400 ">
              We've fine-tuned our generative AI for freelancers. Make work
              easier, boost creativity, get more done, and improve your skills.
            </Lead>
          </div>
          <div className="holder__head space-y-5 rounded border border-gray-200/10 bg-slate-900 !p-10">
            <Lead className="w-48 px-2 py-2 text-center border-2 rounded border-gray-200/10 bg-midnight">
              COMING SOON
            </Lead>
            <H4 as="h3">Free jobs with vetted clients</H4>
            <H6 as="h4">Like Upwork without the crazy fees</H6>
            <Lead className="text-gray-400 ">
              Get access to no-fee gigs and vetted clients for top-notch job
              opportunities. But without the hefty fees. Think Upwork if it was
              free forever.
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

export default RememberFor;
