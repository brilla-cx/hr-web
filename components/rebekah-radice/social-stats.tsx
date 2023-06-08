import Link from "next/link";
import React from "react";

import { H4, H6, Lead } from "../ui";

const socialData = [
  {
    socialData: "35,000",
    socialName: "Email Subscribers",
    socialDesc:
      "Early on, I made a rookie mistake in undervaluing email marketing. Thanks to my incredible subscribers, email is now my favorite digital secret weapon. They're the heroes of this story.",
    socialLink: "https://heyrebekah.com/",
    linkTitle: "SUBSCRIBE TO HEY REBEKAH",
  },
  {
    socialData: "124,600",
    socialName: "Twitter Tweeps",
    socialDesc:
      "Amidst Twitter's Wild West chaos, I've built a loyal and engaged community. They're the driving force behind inspiration and opportunity. Proving we can conquer any frontier together.",
    socialLink: "https://twitter.com/rebekahradice",
    linkTitle: "FOLLOW ME ON TWITTER",
  },
  {
    socialData: "42,812",
    socialName: "Facebook Fans",
    socialDesc:
      "I've been crafting a community of die-hard Facebook fans since before it was cool. And with their help, I've turned this social media giant into a powerhouse. Collaboration and dedication FTW.",
    socialLink: "https://www.facebook.com/rebekahradicellc",
    linkTitle: "JOIN ME ON FACEBOOK",
  },
  {
    socialData: "13,964",
    socialName: "Linkedin Connections",
    socialDesc:
      "LinkedIn isn't just for suits. It's a powerful hub for mingling, networking, and creating cool stuff together. Building relationships on a professional level has never been so much fun.",
    socialLink: "https://www.linkedin.com/in/rebekahradice/",
    linkTitle: "CONNECT ON LINKEDIN",
  },
  {
    socialData: "22,387",
    socialName: "Instagram Followers",
    socialDesc:
      "Instagram might have stunning snaps, but it's also where I've captured an incredible community of followers. Together, we've created a vibrant space for connection and visual magic.",
    socialLink: "",
    linkTitle: "GET ALL MY STORIES",
  },
  {
    socialData: "40,700",
    socialName: "Pinterest Followers",
    socialDesc:
      "Pinterest is more than a mood board. It's a gathering place for a vibrant creative community. Together, we've pinned our way to success. Sharing ideas that are making the world more colorful.",
    socialLink: "https://www.pinterest.com/rebekahradice/",
    linkTitle: "UM-PIN TO MY PINS",
  },
];

function SocialStats() {
  return (
    <div className="grid grid-cols-3 gap-8 pt-20">
      {socialData.map((sd) => (
        <div
          key={sd.socialName}
          className="p-4 py-4 space-y-6 text-center rounded bg-slate-900">
          <H4 className="text-gray-200">{sd.socialData}</H4>
          <H6 className="text-gray-200">{sd.socialName}</H6>
          <Lead className="text-gray-400">{sd.socialDesc}</Lead>
          <div>
            <Link
              href={sd.socialLink ?? "#"}
              className="pt-6 font-bold text-white">
              {sd.linkTitle}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialStats;
