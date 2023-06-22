import { FaAccusoft } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const aboutUs = defineType({
  name: "aboutUs",
  title: "About Us",
  type: "object",
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
      name: "topHeading",
      title: "Top Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "content",
      title: "content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "secondContent",
      title: "Second Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customLinkText",
      title: "Custom Link Text",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customLinkTextHref",
      title: "Custom Link Text Href",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "About Us",
        media: FaAccusoft,
      };
    },
  },
});
