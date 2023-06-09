"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { GlowingButton, H3, H4, Lead } from "../ui";

const services = [
  {
    serviceName: "Marketing performance coach",
    serviceMoto: "Ignite online growth",
    ServiceDesc:
      "Creating human-focused experiences to get, keep, and grow your customer base. We blend product planning, branding, marketing, and more with fact-based decisions. Side by side, we'll tackle your clients' biggest needs.",
    serviceLink: "Hire Rebekah",
    image:
      "https://cdn.sanity.io/images/smx99abf/production/47f7b91adcf28297cb0f2c4e18f44d7d4417dd35-1080x1080.webp",
  },
  {
    serviceName: "Corporate marketing trainer",
    serviceMoto: "Enable your team to thrive",
    ServiceDesc:
      "From targeted outreach to irresistible content, weI'll help you acquire new customers, keep them coming back for more, and grow your business like never before.",
    serviceLink: "Book A free consult",
    image:
      "https://cdn.sanity.io/images/smx99abf/production/f04c1aead315a8d4a8f0473ab71daeb99777ab72-1080x1080.webp",
  },
  {
    serviceName: "Marketing keynote speaker",
    serviceMoto: "Captivate your audience",
    ServiceDesc:
      "Looking for a fun and engaging speaker? With 20+ years in marketing strategy, you'll get real-life advice. No fluff, no confusing numbers, no BS stories. Only proven ways to find more customers and grow your business.",
    serviceLink: "Check Avilability",
    image:
      "https://cdn.sanity.io/images/smx99abf/production/eb2ff728a1a4f2694398a2264fe2e717d9caa304-1080x1080.webp",
  },
];

function RebekahServices() {
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
    <div className="grid items-center grid-cols-2 gap-12">
      <div className="holder">
        {services.map((srv) => (
          <div
            key={srv.image}
            className="sticky w-full rounded holder__head h-96 bg-slate-900">
            <Image
              src={srv.image}
              alt="Ambreen Dar and Rebekah Radice holding up their glasses welcoming you to the Hey Rebekah newsletter"
              className="object-cover w-full h-full rounded"
              fill
            />
          </div>
        ))}
      </div>
      <div className="holder">
        {services.map((srv) => (
          <div
            key={srv.serviceName}
            className="sticky rounded holder__head bg-slate-900">
            <div className="flex flex-col justify-center space-y-4 align-middle h-96">
              <H3 className="!text-sm font-bold text-gray-200">
                {srv.serviceName}
              </H3>
              <H4 className="font-bold text-gray-200">{srv.serviceMoto}</H4>
              <Lead className="text-gray-400">{srv.ServiceDesc}</Lead>
              <div className="max-w-sm mt-12">
                <GlowingButton size="sm">{srv.serviceLink}</GlowingButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RebekahServices;
