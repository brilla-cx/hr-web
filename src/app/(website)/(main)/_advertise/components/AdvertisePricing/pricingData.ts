export interface PricingDataType {
  planId: string;
  tabValue: "allIn" | "leanIn" | "getIn";
  title: string;
  description: string;
  planName: string;
  planDescription: string;
  price: number;
  pricingPlanBenefits: {
    pricingPlanBenefitName: string;
    pricingPlanBenefitDescription: string;
  }[];
  pricingPlanfeatures: string[];
}

export const pricing: PricingDataType[] = [
  {
    // don't change this Tab Value
    planId: "tier-all-in",
    tabValue: "allIn",
    title: "Go all in like a boss",
    description:
      "The chance to be the exclusive sponsor of Hey Rebekah!? It's a literal takeover for your brand.",
    planName: "All In",
    price: 5000,
    planDescription: "Exclusive sponsorship",
    pricingPlanBenefits: [
      {
        pricingPlanBenefitName:
          "🏆 Exclusive takeover of the Hey Rebekah newsletter",
        pricingPlanBenefitDescription:
          "How could anyone pass up an opportunity to throw their hard-earned money at a bunch of unread emails gathering digital dust in someone's inbox?",
      },
      {
        pricingPlanBenefitName: "🚀 Unique pre-launch pricing",
        pricingPlanBenefitDescription:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        pricingPlanBenefitName: "🎧 Co-branded podcast",
        pricingPlanBenefitDescription:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
      {
        pricingPlanBenefitName: "🖥️ Co-branded webinar ",
        pricingPlanBenefitDescription:
          "Your brand will share the spotlight with us on a co-branded webinar that few will watch live. But don't worry, the replays will get way more views than we ever expected.",
      },
    ],
    pricingPlanfeatures: [
      "Exclusive, no other sponsors",
      "5 placements in 30 days",
      "All placements above the fold",
      "5 social media posts",
      "Takeover of a full-length podcast episode",
      "Co-branded webinar",
      "Bespoke creative",
      "Editorial pre-approval",
      "Real-time reporting",
      "Dedicated partner success manager",
      "Pay by card or invoice ",
      "100% Delight Guarantee!",
    ],
  },
  {
    // don't change this Tab Value
    tabValue: "leanIn",
    title: "Just lean in to it",
    description:
      "A prime opportunity for your brand to lean in to our community of readers.",
    planName: "Lean In",
    planId: "tier-lean-in",
    price: 3500,
    planDescription: "Primary sponsorship",
    pricingPlanBenefits: [
      {
        pricingPlanBenefitName:
          "🔦 Primary placement on the Hey Rebekah newsletter",
        pricingPlanBenefitDescription:
          "Be the envy of all your competitors and join the club of primary sponsors for a newsletter no one has read yet.",
      },
      {
        pricingPlanBenefitName: "🚀 Unique pre-launch pricing",
        pricingPlanBenefitDescription:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        pricingPlanBenefitName: "🎧 Co-branded podcast",
        pricingPlanBenefitDescription:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
    ],
    pricingPlanfeatures: [
      "3 placements in 30 days",
      "Primary placement above the fold",
      "3 social media posts",
      "Takeover of a full-length podcast episode",
      "Bespoke creative",
      "Editorial pre-approval",
      "Real-time reporting",
      "Dedicated partner success manager",
      "Pay by card or invoice ",
      "100% Delight Guarantee!",
    ],
  },
  {
    // don't change this Tab Value
    tabValue: "getIn",
    planId: "tier-all-in",
    title: "Get in on the action",
    description:
      "Get In now on a growing community of self-employed professionals to showcase your brand.",
    planName: "All In",
    price: 2000,
    planDescription: "Exclusive sponsorship",
    pricingPlanBenefits: [
      {
        pricingPlanBenefitName: "🚀 Unique pre-launch pricing",
        pricingPlanBenefitDescription:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        pricingPlanBenefitName: "🎧 Co-branded podcast",
        pricingPlanBenefitDescription:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
      {
        pricingPlanBenefitName: "👍🏾 Social media distrubution",
        pricingPlanBenefitDescription:
          "A great way to get in on the momentum of our social posts where a huge audience will have no idea what we're talking about yet.",
      },
    ],
    pricingPlanfeatures: [
      "2 placements in 30 days",
      "2 social media posts",
      "Bespoke creative",
      "Bespoke creative",
      "Real-time reporting",
      "Dedicated partner success manager",
      "Pay by card or invoice ",
      "100% Delight Guarantee!",
    ],
  },
];
