import { FaAccusoft } from "react-icons/fa";
import { defineField, defineType } from "sanity";

const ctaTwo = defineType({
  name: "ctaTwo",
  type: "object",
  title: "CTA two",
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
      name: "customCtaTitle",
      type: "string",
      description: "Custom cta title",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customCtaContent",
      type: "blockContent",
      description: "Custom cta content",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "custpmCtaLinkText",
      type: "string",
      description: "Custom cta link text",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "custpmCtaLinkHref",
      type: "string",
      description: "Custom cta link href",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "CTA two section",
        media: FaAccusoft,
      };
    },
  },
});

export default ctaTwo;
