import { FaHandPointRight } from "react-icons/fa";
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
      name: "customCtaContent",
      type: "blockContent",
      description: "Custom cta content",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customCtaLinkText",
      type: "string",
      description:
        "Custom CTA link text. Choose words that make hearts skip a beat!",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customCtaLinkHref",
      type: "string",
      description:
        "Custom CTA link href. The magical gateway to exciting adventures!",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
  ],
  preview: {
    select: {
      customHeading: "customHeading",
    },
    prepare: ({ customHeading }) => {
      return {
        title: customHeading || "CTA One",
        subtitle: "CTA One Section",
        media: FaHandPointRight,
      };
    },
  },
});

export default ctaOne;
