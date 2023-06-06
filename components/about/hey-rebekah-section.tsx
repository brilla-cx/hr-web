import Image from "next/image";
import React from "react";

import { cx } from "@/lib/utils";

interface Props {
  title: string;
  subTitle: string;
  desc: string;
  image: string;
  className?: string;
}

function HeyRebekahItem(props: Props) {
  const { desc, image, subTitle, title, className } = props;
  return (
    <div className={cx("flex items-center pb-14", className)}>
      <div className="w-1/2">
        <dt className="flex items-center mb-4 text-base font-semibold leading-7 text-gray-200 gap-x-3">
          {title}
        </dt>
        <dt className="flex items-center text-4xl font-semibold leading-7 text-gray-200 gap-x-3">
          {subTitle}
        </dt>
        <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-400">
          <p className="flex-auto">{desc}</p>
        </dd>
      </div>
      <div className="flex items-center w-1/2 h-96">
        <div className="border rounded h-96 w-fit border-gray-200/10">
          <Image
            className="h-full w-full !rounded object-contain"
            src={image}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

function HeyRebekahSection() {
  return (
    <div className="py-4 mt-10 px-28 md:py-20 lg:py-24">
      {data.map((item, i) => (
        <HeyRebekahItem
          key={item.title}
          {...item}
          className={cx(i % 2 == 0 ? "flex-row" : "flex-row-reverse")}
        />
      ))}
    </div>
  );
}

export default HeyRebekahSection;

const data: Props[] = [
  {
    desc: "No problem! We'll show you exactly how we scale customer acquisition. You'll get more clients for yourself and help your clients get more customers. It's a double scoop bonus. 🍨",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Get more clients",
    title: "Hey Rebekah!? I need help to...",
  },
  {
    desc: "Ah, the elusive client retention problem. No worries, we got you! We'll show you how to deliver mind-boggling results to your clients so you get more repeat business and referrals. LTV to the 🌕.",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Keep my clients",
    title: "Hey Rebekah!? Please help me...",
  },
  {
    desc: "OK, now you're talking. Let's do this... we'll explain the best strategies and tactics to put effective customer expansion programs in place. So you can do more with less. 👏🏽",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Grow my customers",
    title: "Hey Rebekah, I need a way to...",
  },
  {
    desc: "Awesome! Sounds like business is 💥. It's hard trying to do everything. We'll share the tech stack we use to keep things purring like an enterprise on the cheap. Plus, give you our open-sourced tech recipes to get going super fast. #picasso",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Systemize and scale",
    title: "Hey Rebekah, I'm trying to figure out how to...",
  },
  {
    desc: "Want to know how the big agencies charge bazillions for their work? Wonder no more. We'll share our insider experience, strategies, and templates so you can make any client brand look like a million bucks. 💰",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Branding and design",
    title: "Hey Rebekah, I'm stuck with...",
  },
  {
    desc: "We've seen a lot of 🍝, you probably have too. We'll hook you up with best-in-class processes and tools you can implement in minutes. Your proposals will come off as fancy as Niantic's physics and your life will become easier with a repeatable playbook for web/mobile app projects.",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Build killer apps",
    title: "Hey Rebekah, I want to",
  },
  {
    desc: "We'll help you breakthrough the insanity of vanity metrics to focus on what matters. We'll share actionable data pipelines and tech recipes you can copy. Your alliance with data science is on the fast track. 🎯",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Data science",
    title: "Hey Rebekah, how do I get started with",
  },
  {
    desc: "Good for you! ❤️ Our patent pending 8-DVD series Slow to Flow™️ will give you magical happiness superpowers in 30 minutes and last forever. No seriously though, the world's a crazy place and this has been a process of evolution for us. We're honored to have a chance to share our journey with you.",
    image:
      "https://global-uploads.webflow.com/639407458bad1a668d048184/639f11966affc0b51d6a98e1_joy.webp",
    subTitle: "Find my joy",
    title: "Hey Rebekah, I just want to",
  },
];
