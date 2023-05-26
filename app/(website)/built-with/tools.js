"use client";

import React, { useState } from "react";

import Container from "@/components/container";
import ToolBox from "@/components/shared/toolbox";
import { Pill } from "@/components/ui";

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
        <div className="mx-auto px-4 max-w-6xl">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-white lg:text-4xl lg:leading-snug">
            Built With
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg text-white/50">
              List of tools we use to make the new version of Hey Rebekah.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center mt-10 gap-5">
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
        </div>
      </Container>
    </div>
  );
}

export const revalidate = 3600;
