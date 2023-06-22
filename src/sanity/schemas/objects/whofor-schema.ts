import { FaAccusoft } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

const whoFor = defineType({
  name: "whoFor",
  title: "Who for",
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
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "whoForCardItems",
      title: "Who For Card Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "whoForCardItem",
          title: "Who for card item",
          type: "document",
          fields: [
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
        title: "Who for Section",
        media: FaAccusoft,
      };
    },
  },
});

export default whoFor;
