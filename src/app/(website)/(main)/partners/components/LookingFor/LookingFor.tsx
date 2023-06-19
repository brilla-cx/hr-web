import { H3, Lead } from "@/components/ui";

const expectations = [
  {
    name: "Exclusive discount",
    description: (
      <>
        If you already have an affiliate program, no problem. We'll waive any and all commission/referral payments unconditionally. You'll never pay us in exchange for an <span>exclusive<sup>1</sup></span> Hey Rebekah reader discount.
      </>
    ),
  },
  {
    name: "Co-branded content",
    description:
      "When it makes sense, let's join forces to create edutaining co-branded content. Together, we can help knowledge workers thrive through the adoption of your product.",
  },
  {
    name: "Cross promotion",
    description:
      "When appropriate, give us a shout out to boost our social posts about your brand. We'll keep you in the loop with a publishing calendar and are happy to coordinate campaigns with you too.",
  },
];

export default function LookingFor() {
  return (
    <div className="lg:py-26 px-4 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <H3 as="h2" className="mt-2 text-gray-200">
            Invest in the potential of knowledge workers
          </H3>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Treat our readers to exclusive discounts, rather than lining our
            pockets with fat affiliate commissions. It's a win-win that's sure
            to bring smiles all around.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {expectations.map((expectation, i) => (
              <div key={expectation.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-200">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                    {i + 1}
                  </div>
                  {expectation.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{expectation.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Lead className="mt-16 text-center text-xs text-gray-400">
          Discounts are not public. They're reserved for qualified subscribers upon request.
        </Lead>
      </div>
    </div>
  );
}
