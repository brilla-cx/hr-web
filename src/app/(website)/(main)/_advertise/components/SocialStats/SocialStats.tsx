import React from "react";

import { H3, H4, Lead } from "@/components/ui";

interface Data {
  id: number;
  count: string;
  name: string;
}

interface SocialDataType {
  emailPerformance: Data[];
  socialAudience: Data[];
}

const socialData: SocialDataType = {
  emailPerformance: [
    {
      id: 1,
      count: "91",
      name: "Active Subscriptions",
    },
    {
      id: 1,
      count: "8,073",
      name: "Total Emails Sent",
    },
    {
      id: 1,
      count: "5,696",
      name: "Total Unique Opens",
    },
    {
      id: 1,
      count: "2,673",
      name: "Total Unique Clicks",
    },
    {
      id: 1,
      count: "70.6%",
      name: "Avg. Unique Opens",
    },
    {
      id: 1,
      count: "46.9%",
      name: "Avg. Unique Clicks",
    },
  ],
  socialAudience: [
    {
      id: 1,
      count: "22,418",
      name: "Instagram",
    },
    {
      id: 1,
      count: "13,816",
      name: "Linkedin",
    },
    {
      id: 1,
      count: "42,353",
      name: "Facebook",
    },
    {
      id: 1,
      count: "125,259",
      name: "Twitter",
    },
    {
      id: 1,
      count: "40,700",
      name: "Pinterest",
    },
  ],
};

function SocialStatsCard(props: Data) {
  const { id, count, name } = props;
  return (
    <div
      key={id}
      className="col-span-3 p-8 text-left border rounded border-gray-200/10 bg-slate-900 md:col-span-1">
      <H4 as="h3" className="mb-1 text-gray-200">
        {count}
      </H4>
      <Lead className="mt-4 text-gray-400">{name}</Lead>
    </div>
  );
}

function SocialStats() {
  return (
    <div className="px-4 py-12 mx-auto lg:py-26 sm:px-8 sm:py-20">
      <H4 className="mb-1 text-gray-200">Email performance</H4>
      <div className="grid grid-cols-3 gap-8 pt-20 md-gap-8">
        {socialData.emailPerformance.map((ep) => (
          <SocialStatsCard key={ep.id} {...ep} />
        ))}
      </div>
      <H4 className="pt-20 mb-1 text-gray-200">Social audience</H4>
      <div className="grid grid-cols-3 gap-8 pt-20 md-gap-8">
        {socialData.socialAudience.map((ep) => (
          <SocialStatsCard key={ep.id} {...ep} />
        ))}
      </div>
    </div>
  );
}

export default SocialStats;
