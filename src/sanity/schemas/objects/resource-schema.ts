import { defineField, defineType } from "sanity";

const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "keyword",
      title: "keyword",
      type: "reference",
      to: [{ type: "keyword" }],
    }),
    defineField({
      name: "resourceTitle",
      title: "Resource Title",
      type: "string",
    }),
    defineField({
      name: "resourceLinkText",
      title: "Resource link text",
      type: "string",
    }),
    defineField({
      name: "resourceLinkHref",
      title: "Resource link href",
      type: "url",
    }),
  ],
});

export default resource;
