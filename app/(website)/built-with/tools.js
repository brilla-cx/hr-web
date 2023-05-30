"use client";

import React, { useState } from "react";

import Container from "@/components/container"; // Import Container component
import ToolBox from "@/components/shared/toolbox";
import { Pill } from "@/components/ui";
import PageHeader from "@/components/ui/sections/pageheader";

export default function Tools({ tools, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderTools = tools.filter(
    (tool) =>
      selectedCategory === null || tool?.category?._id === selectedCategory
  );

  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <PageHeader
          title="Hey Rebekah Built with"
          leadText="Wondering what tools we use to run our business? No problem. Hey Rebekah Built With shares every tool in our arsenal. Join our community of over 320,000 professionals and score some hot savings on the tools you use everyday. We don't make a dime from affiliate links."
          includeForm
          formId="built-sub"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Pill
            color="gray"
            active={selectedCategory === null}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => setSelectedCategory(null)}>
            View All
          </Pill>
          {categories.length &&
            categories.map((category) => (
              <Pill
                color={category.color}
                key={category._id}
                active={selectedCategory === category._id}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setSelectedCategory(category._id)}>
                {category.name}
              </Pill>
            ))}
        </div>

        <div className="my-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {renderTools.map((tool) => (
            <ToolBox key={tool._id} tool={tool} aspect="landscape" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export const revalidate = 3600;
