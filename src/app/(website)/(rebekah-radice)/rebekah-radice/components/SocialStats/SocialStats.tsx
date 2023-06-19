import Link from "next/link";
import React from "react";

import { H3, H4, Lead } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";

const socialData = [
  {
    socialData: "+31,760",
    socialName: "Email Subscribers",
    socialDesc:
      "Early on, I made a rookie mistake in undervaluing email marketing. Thanks to my incredible subscribers, email is now my favorite digital secret weapon. They're the heroes of this story.",
    socialLink: "/signup",
    linkTitle: "SUBSCRIBE TO HEY REBEKAH",
  },
  {
    socialData: "123,772",
    socialName: "Twitter Tweeps",
    socialDesc:
      "Amidst Twitter's Wild West chaos, I've built a loyal and engaged community. They're the driving force behind inspiration and opportunity. Proving we can conquer any frontier together.",
    socialLink: "https://twitter.com/rebekahradice",
    linkTitle: "FOLLOW ME ON TWITTER",
  },
  {
    socialData: "42,900",
    socialName: "Facebook Fans",
    socialDesc:
      "I've been crafting a community of die-hard Facebook fans since before it was cool. And with their help, I've turned this social media giant into a powerhouse. Collaboration and dedication FTW.",
    socialLink: "https://www.facebook.com/rebekahradicellc",
    linkTitle: "JOIN ME ON FACEBOOK",
  },
  {
    socialData: "14,794",
    socialName: "Linkedin Followers",
    socialDesc:
      "LinkedIn isn't just for suits. It's a powerful hub for mingling, networking, and creating cool stuff together. Building relationships on a professional level has never been so much fun.",
    socialLink: "https://www.linkedin.com/in/rebekahradice/",
    linkTitle: "CONNECT ON LINKEDIN",
  },
  {
    socialData: "22,258",
    socialName: "Instagram Followers",
    socialDesc:
      "Instagram might have stunning snaps, but it's also where I've captured an incredible community of followers. Together, we've created a vibrant space for connection and visual magic.",
    socialLink: "https://www.instagram.com/rebekahradice/",
    linkTitle: "GET ALL MY STORIES",
  },
  {
    socialData: "40,890",
    socialName: "Pinterest Followers",
    socialDesc:
      "Pinterest is more than a mood board. It's a gathering place for a vibrant creative community. Together, we've pinned our way to success. Sharing ideas that are making the world more colorful.",
    socialLink: "https://www.pinterest.com/rebekahradice/",
    linkTitle: "JUM-PIN TO MY PINS",
  },
];

function SocialStats() {
  return (
    <div className="px-4 py-12 mx-auto text-center lg:py-26 sm:px-8 sm:py-20">
      <H3 as="h2" className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
        My community of over 338,000
      </H3>
      <Lead className="max-w-4xl mx-auto mt-6 text-lg leading-8 text-gray-400">
        I adore my community like peanut butter loves jelly. They've been with
        me since the days when social media was only a baby. Remember when we
        had to walk uphill both ways to post a tweet? Sigh... the good 'ol days.
      </Lead>
      <div className="grid grid-cols-3 gap-8 pt-20 md-gap-8">
        {socialData.map((sd) => (
          <div
            key={sd.socialName}
            className="col-span-3 p-8 text-left border rounded border-gray-200/10 bg-slate-900 md:col-span-1">
            <H4 as="h3" className="mb-1 text-gray-200">{sd.socialData}</H4>
            <p className="mb-6 text-md uppercase tracking-wider text-gray-300">{sd.socialName}</p>
            <Lead className="mb-8 text-gray-400">{sd.socialDesc}</Lead>
            <div>
              <Link
                href={sd.socialLink ?? "#"}
                className={cx("pt-6 font-bold text-white", hoverStyles)}>
                {sd.linkTitle}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialStats;
