import { FaAccusoft } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

const resources = defineType({
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "reference",
      to: [{ type: "keyword" }],
    }),
    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
    }),
    defineField({
      name: "customHeadingResources",
      title: "Custom Heading Resources",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "resources",
      title: "Resources",
      type: "array",
      of: [
        defineArrayMember({
          name: "resource",
          type: "reference",
          to: [{ type: "resource" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      keyword: "keyword",
    },
    prepare: ({ keyword }) => {
      return {
        title: "Resources Section",
        media: FaAccusoft,
      };
    },
  },
});

export default resources;
