import { FaAccusoft } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

const whyShouldCare = defineType({
  name: "whyShouldCare",
  title: "Why should care",
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
      title: "Customize Content",
      type: "boolean",
    }),
    defineField({
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "whyCareCardItems",
      title: "Why care card Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "whyCareCardItem",
          title: "Why care card item",
          type: "document",
          fields: [
            defineField({
              title: "icon",
              name: "Icon",
              type: "iconPicker",
              options: {
                outputFormat: "react",
              },
            }),
            defineField({
              title: "Heading",
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "blockContent",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Why Care Section",
        media: FaAccusoft,
      };
    },
  },
});

export default whyShouldCare;
