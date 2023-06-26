import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
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
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      description:
        "The bold and powerful statement that serves as the centerpiece of the hero section. Let your words roar and captivate the souls of your audience!",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      description:
        "The body of knowledge that fills the hero section. Craft your tale, spin your yarn, and enchant all who dare to gaze upon it.",
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
    defineField({
      name: "customLinkText",
      title: "Custom Link Text",
      type: "string",
      description:
        "A string of text that holds the key to another realm. It lures the adventurous souls, promising treasures and wonders beyond imagination.",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customLinkHref",
      title: "Custom Link href",
      type: "string",
      description:
        "The mystical address that unlocks the gateway to another dimension. Step through and explore the uncharted territories that lie ahead!",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
  ],
  preview: {
    select: {
      customHeading: "customHeading",
    },
    prepare: ({ customHeading }) => {
      return {
        title: customHeading || "Hero",
        subtitle: "Hero Section",
        media: DocumentTextIcon,
      };
    },
  },
});
