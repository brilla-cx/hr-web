import ToolBox from "@/components/shared/ToolBox/ToolBox";
import { H3 } from "@/components/ui";
import { Tools } from "@/types/types";

export default function OurPartners({ tools }: { tools: Tools[] }) {
  const renderTools = tools.filter((tool) => tool.isPartner == true);
  return (
    <div className="lg:py-26 px-4 py-12 sm:px-8 sm:py-20">
      <div className="grid grid-cols-1 gap-x-3 gap-y-20 xl:grid-cols-5">
        <div className="col-span-2 mx-auto lg:mx-0">
          <H3 as="h2" className="mt-2 text-gray-200">
            You&apos;re in great company
          </H3>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We&apos;re honored to partner with a diverse and amazing array of
            brands. This is a growing list of companies committed to helping
            freelancers flourish.
          </p>
        </div>
        <ul
          role="list"
          className="col-span-3 grid grid-cols-1 gap-5 md:grid-cols-2">
          {renderTools.map((tool) => (
            <ToolBox key={tool._id} tool={tool} />
          ))}
        </ul>
      </div>
    </div>
  );
}
