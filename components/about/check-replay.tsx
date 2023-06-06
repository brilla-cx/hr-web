import React from "react";

interface AboutFact {
  factNumber: string;
  factTitle: string;
  factDesc: string;
}

function CheckReplayCard(props: AboutFact) {
  const { factDesc, factNumber, factTitle } = props;
  return (
    <div className="flex flex-col p-6 transition-all duration-300 border rounded border-gray-200/10 bg-slate-900 hover:scale-105 hover:transform">
      <dt className="flex items-center mb-4 text-4xl font-semibold leading-7 text-pink-500 gap-x-3">
        {factNumber}
      </dt>
      <dt className="flex items-center text-base font-semibold leading-7 text-gray-200 gap-x-3">
        {factTitle}
      </dt>
      <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-400">
        <p className="flex-auto">{factDesc}</p>
      </dd>
    </div>
  );
}

function CheckReplay() {
  return (
    <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
      <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        {aboutFactsData.map((fact) => (
          <CheckReplayCard key={fact.factNumber} {...fact} />
        ))}
      </dl>
    </div>
  );
}

export default CheckReplay;

const aboutFactsData: AboutFact[] = [
  {
    factNumber: "317 Million",
    factTitle: "Users acquired",
    factDesc:
      "Since 2001, we've helped businesses acquire over 317,000,000 users. Holy crap, that's a lot more than we thought.",
  },
  {
    factNumber: "16 MILLION",
    factTitle: "Customers converted",
    factDesc:
      "We've implemented strategies to convert a shit ton of prospects to customers for our clients. Hmm, we should've started a business earlier.",
  },
  {
    factNumber: "$10 MILLION",
    factTitle: "Lifetime earnings",
    factDesc:
      "Yeah, we've done well. But there's a lot more to fulfillment too. We're open sourcing our playbooks to help you make more money than we ever could.",
  },
  {
    factNumber: "92",
    factTitle: "Net Promoter Score®",
    factDesc:
      "We asked 100 of our former clients about our work. 96 would highly recommend us. 4 wouldn't come near us again. Hey, nobody's perfect.",
  },
  {
    factNumber: "5,160",
    factTitle: "Bottles of Pepto Bismol",
    factDesc:
      "Dayyum, the journey hasn't been a cake walk. But we're still at it. Part of why we're here is to help you avoid the costly mistakes we've made.",
  },
  {
    factNumber: "100,000",
    factTitle: "Hair follicles on heads",
    factDesc:
      "OK, yes, we needed an attention grabbing metric to balance the flex child layout of this component. But seriously, Sam’s hair loss is no joking matter.",
  },
];
