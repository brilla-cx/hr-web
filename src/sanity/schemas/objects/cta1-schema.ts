import { FaAccusoft, FaArrowRight } from "react-icons/fa";
import { defineField, defineType } from "sanity";

const ctaOne = defineType({
  name: "ctaOne",
  type: "object",
  title: "CTA One",
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
      name: "custpmCtaContent",
      type: "blockContent",
      description: "Custom cta content",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Cta one section",
        media: FaArrowRight,
      };
    },
  },
});

export default ctaOne;
