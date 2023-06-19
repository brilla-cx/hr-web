import { CheckIcon } from "@heroicons/react/20/solid";

import PageHeader from "@/components/sections/pageheader";
import { GlowingButton, H3, H6 } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { pricing, PricingDataType } from "./pricing-data";

function PricingCard(props: PricingDataType) {
  return (
    <div className="flex max-w-full gap-8 p-8 mx-0 border rounded border-gray-200/10 bg-slate-900 md:mx-20">
      <div className="hidden w-2/3 space-y-4 md:block">
        <H3 className="text-xl font-semibold text-gray-200">
          {props.mainTitle}
        </H3>
        <p className="text-gray-400">{props.mainDescription}</p>
        <div className="border-b-2 border-slate-800" />
        {props.featuresMain.map((fm, index) => (
          <div
            key={fm.name}
            className={`${
              index === props.featuresMain.length - 1
                ? ""
                : "border-b border-slate-800"
            } pb-4`}>
            <H6 className="pb-2 text-sm font-semibold text-gray-200">
              {fm.name}
            </H6>
            <p className="text-gray-400">{fm.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full p-4 h-max rounded-2xl ring-1 ring-slate-800 md:w-1/3">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-200">
              {props.name}
            </h2>
            <span className="text-xs text-gray-400">{props.description}</span>
          </div>
          <p className="text-4xl font-bold tracking-tight text-gray-200">
            {props.price}
          </p>
        </div>

        <div className="my-4">
          <GlowingButton href="" aria-describedby="">
            Buy plan
          </GlowingButton>
        </div>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
          {props.features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-3">
              <CheckIcon className="w-4 h-4 text-gray-200" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PricingTabs() {
  return (
    <Tabs defaultValue="allIn">
      <TabsList className="mx-auto mb-10 grid w-[350px] grid-cols-3 text-white">
        <TabsTrigger value="allIn">All In</TabsTrigger>
        <TabsTrigger value="leanIn">Lean In</TabsTrigger>
        <TabsTrigger value="getIn">Get In</TabsTrigger>
      </TabsList>
      {pricing.map((price) => (
        <TabsContent value={price.tabValue} key={price.id}>
          <PricingCard {...price} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function AdvertisePricing() {
  return (
    <div className="px-4 pb-12 mx-auto lg:pb-26 sm:px-8 sm:pb-20">
      <PageHeader
        title="Easy flat fees"
        leadText="No more opaque pricing, no more surprise bills. All sponsorships include bespoke ads, tailor-made just for your brand, a dedicated partner success manager, and access to our anonymized data portal. Backed by our 100% Delight Guarantee."
        includeForm={false}
        id="advertise"
      />
      <PricingTabs />
    </div>
  );
}

export default AdvertisePricing;
