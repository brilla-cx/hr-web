export interface PricingDataType {
  tabValue: "allIn" | "leanIn" | "getIn";
  mainTitle: string;
  mainDescription: string;
  name: string;
  id: string;
  price: string;
  description: string;
  featuresMain: {
    name: string;
    description: string;
  }[];
  features: string[];
}

export const pricing: PricingDataType[] = [
  {
    // don't change this Tab Value
    tabValue: "allIn",
    mainTitle: "Go all in like a boss",
    mainDescription:
      "The chance to be the exclusive sponsor of Hey Rebekah!? It's a literal takeover for your brand.",
    name: "All In",
    id: "tier-all-in",
    price: "5000$",
    description: "Exclusive sponsorship",
    featuresMain: [
      {
        name: "🏆 Exclusive takeover of the Hey Rebekah newsletter",
        description:
          "How could anyone pass up an opportunity to throw their hard-earned money at a bunch of unread emails gathering digital dust in someone's inbox?",
      },
      {
        name: "🚀 Unique pre-launch pricing",
        description:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        name: "🎧 Co-branded podcast",
        description:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
      {
        name: "🖥️ Co-branded webinar ",
        description:
          "Your brand will share the spotlight with us on a co-branded webinar that few will watch live. But don't worry, the replays will get way more views than we ever expected.",
      },
    ],
    features: [
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
    mainTitle: "Just lean in to it",
    mainDescription:
      "A prime opportunity for your brand to lean in to our community of readers.",
    name: "Lean In",
    id: "tier-lean-in",
    price: "3500$",
    description: "Primary sponsorship",
    featuresMain: [
      {
        name: "🔦 Primary placement on the Hey Rebekah newsletter",
        description:
          "Be the envy of all your competitors and join the club of primary sponsors for a newsletter no one has read yet.",
      },
      {
        name: "🚀 Unique pre-launch pricing",
        description:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        name: "🎧 Co-branded podcast",
        description:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
    ],
    features: [
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
    mainTitle: "Get in on the action",
    mainDescription:
      "Get In now on a growing community of self-employed professionals to showcase your brand.",
    name: "All In",
    id: "tier-all-in",
    price: "2000$",
    description: "Exclusive sponsorship",
    featuresMain: [
      {
        name: "🚀 Unique pre-launch pricing",
        description:
          "Get in on the ground floor of the highly anticipated Hey Rebekah newsletter. Because who wouldn't want to pay more for something in the future when they could pay less for it now?",
      },
      {
        name: "🎧 Co-branded podcast",
        description:
          "After all, nothing says 'cutting-edge' like aligning your company with a decades-old medium that everyone stopped listening to in the late 2000s.",
      },
      {
        name: "👍🏾 Social media distrubution",
        description:
          "A great way to get in on the momentum of our social posts where a huge audience will have no idea what we're talking about yet.",
      },
    ],
    features: [
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
