import ToolBox from "@/components/shared/toolbox";
import { Tools } from "@/types/types";

import { H2 } from "../ui";

export default function OurPartners({ tools }: { tools: Tools[] }) {
  const renderTools = tools.filter((tool) => tool.isPartner == true);
  return (
    <div className="py-24 md:py-32 lg:py-40">
      <div className="grid grid-cols-1 gap-x-3 gap-y-20 xl:grid-cols-3">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <H2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            You're in great company
          </H2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We're honored to partner with a diverse and amazing array of brands.
            This is a growing list of companies committed to helping freelancers
            flourish.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          {renderTools.map((tool) => (
            <ToolBox key={tool._id} tool={tool} />
          ))}
        </ul>
      </div>
    </div>
  );
}
