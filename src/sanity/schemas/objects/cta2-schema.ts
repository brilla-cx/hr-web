import { FaHandPointRight } from "react-icons/fa";
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
      description:
        "The special keyword associated with this CTA. It's like a secret code!",
    }),
    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
      description:
        "Toggle to customize the CTA content. It's like having a magic wand!",
    }),
    defineField({
      name: "customCtaTitle",
      type: "string",
      description:
        "Custom CTA title. Make it catchy and captivating like a rockstar!",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customCtaContent",
      type: "blockContent",
      description:
        "Custom CTA content. Pour your words of magic and inspiration!",
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
        title: customHeading || "CTA Two",
        subtitle: "CTA TWO Section",
        media: FaHandPointRight,
      };
    },
  },
});

export default ctaTwo;
