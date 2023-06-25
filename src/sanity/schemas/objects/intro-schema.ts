import { FiFilm } from "react-icons/fi";
import { defineField, defineType } from "sanity";

export const intro = defineType({
  name: "intro",
  title: "Intro",
  type: "object",
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "reference",
      to: [{ type: "keyword" }],
    }),
    defineField({
      name: "customizeHeading",
      title: "Customize Heading?",
      type: "boolean",
    }),
    defineField({
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeHeading,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      customHeading: "customHeading",
    },
    prepare: ({ customHeading }) => {
      return {
        title: customHeading || "Intro",
        subtitle: "Intro section",
        media: FiFilm,
      };
    },
  },
});
