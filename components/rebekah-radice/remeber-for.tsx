"use client";
import React, { useEffect } from "react";

import { GlowingButton, H3, H4, H6, Lead } from "../ui";

const RememberFor: React.FC = () => {
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
    <div className="grid grid-cols-4 gap-5 py-40 top-40">
      <div className="col-span-4 holder md:col-span-2">
        <div className="sticky text-white holder__head">
          <H3>Hey Rebekah is what I'll be remembered for</H3>
          <Lead className="mt-5">
            I launched Hey Rebekah to help freelancers become better at what
            they do. Everything we create will always be free for readers and
            the community. Hey Rebekah is a free daily newsletter. It's about to
            get a whole lot better thanks to machine learning. We're also
            creating some pretty cool apps to make generative AI more
            accessible.
          </Lead>
          <div className="max-w-sm mt-12">
            <GlowingButton type="link" href="/">
              Join hey Rebekah
            </GlowingButton>
          </div>
        </div>
      </div>

      <section className="col-span-4 gap-20 text-white holder md:col-span-2">
        <div className="holder__head sticky space-y-5 rounded bg-slate-900 !p-10 shadow-inner shadow-pink-500/50">
          <H4>Best newsletter for freelancers</H4>
          <H6>Like Morning Brew for freelancers</H6>
          <Lead className="pb-4 text-gray-400">
            A free daily newsletter. We write about things that help you become
            better at what you do in 6 minutes or less.
          </Lead>
        </div>
        <div className="holder__head space-y-5 rounded bg-slate-900 !p-10 shadow-inner shadow-pink-500/50">
          <Lead className="w-48 px-4 py-2 text-center rounded bg-slate-800">
            COMING SOON
          </Lead>
          <H4>Generative AI for freelancers</H4>
          <H6>OpenAI x Anthropic fine-tuned for freelancers</H6>
          <Lead className="pb-4 text-gray-400">
            We've fine-tuned our generative AI for freelancers. Make work
            easier, boost creativity, get more done, and improve your skills.
          </Lead>
        </div>
        <div className="holder__head space-y-5 bg-slate-900 !p-10 shadow-inner shadow-pink-500/50">
          <Lead className="w-48 px-4 py-2 text-center rounded bg-slate-800">
            COMING SOON
          </Lead>
          <H4>Free jobs with vetted clients</H4>
          <H6>Like Upwork without the crazy fees</H6>
          <Lead className="pb-4 text-gray-400">
            Get access to no-fee gigs and vetted clients for top-notch job
            opportunities. But without the hefty fees. Think Upwork if it was
            free forever.
          </Lead>
        </div>
        <div className="holder__head space-y-5 bg-slate-900 !p-10 shadow-inner shadow-pink-500/50">
          <Lead className="w-48 px-4 py-2 text-center rounded bg-slate-800">
            COMING SOON
          </Lead>
          <H4>Exclusive discounts</H4>
          <H6>Save tons of money on the tools you already use</H6>
          <Lead className="pb-4 text-gray-400">
            No more overpaying for the tools you rely on. Enjoy exclusive
            discounts on the tools you already use. Now you can run your
            business without breaking the bank.
          </Lead>
        </div>
      </section>
    </div>
  );
};

export default RememberFor;
