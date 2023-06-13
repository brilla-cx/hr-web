import React from "react";

import { H1, Lead } from "@/components/ui/typography";

import { GlowingButton } from "../ui";

interface PageHeaderProps {
  title: string;
  leadText: string;
  id: string;
  includeForm: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, leadText, id, includeForm = true }) => {
  return (
    <div className="bg-midnight px-2 py-16 sm:py-24 lg:px-16 lg:py-26">
      <div className="mx-auto max-w-3xl text-center">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{leadText}</Lead>
        {includeForm && (
          <div className="mx-auto mt-8 md:mt-10 md:max-w-xs">
            <GlowingButton variant="link" href="/signup" id={id}>
              Level Up
            </GlowingButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;