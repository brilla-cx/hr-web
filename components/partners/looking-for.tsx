import { H2, Lead } from "../ui";

const features = [
  {
    name: "Exclusive discount",
    description:
      "If you already have an affiliate program, no problem. We'll waive any and all payments unconditionally. You'll never pay us in exchange for an exclusive1 Hey Rebekah reader discount.",
  },
  {
    name: "Co-branded content",
    description:
      "When it makes sense, let's join forces to create edutaining co-branded content for the freelance community. Together, we can help freelancers thrive through the adoption of your product.",
  },
  {
    name: "Cross promotion",
    description:
      "When appropriate, give us a shout out to boost our social posts about your brand. We'll keep you in the loop with a publishing calendar and are happy to coordinate campaigns with you too.",
  },
];

export default function LookingFor() {
  return (
    <div className="py-24 sm:py-28">
      <div className="mx-auto">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <Lead className="mb-3 font-bold text-gray-200">
            What we're looking for
          </Lead>
          <H2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Invest in the potential of freelancers
          </H2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Treat our readers to exclusive discounts, rather than lining our
            pockets with fat affiliate commissions. It's a win-win that's sure
            to bring smiles all around.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-slate-900">
                    {i + 1}
                  </div>
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Lead className="mt-16 text-sm text-center text-gray-200">
          1Discounts are not public. They're reserved for qualified and
          subscribed readers upon request.
        </Lead>
      </div>
    </div>
  );
}
