import { FaIceCream } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const coolThings = defineType({
  name: "coolThing",
  title: "Cool Things",
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
      name: "image",
      title: "Content Image",
      type: "image",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "coolThingsItems",
      title: "Cool Things Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "coolThingItems",
          title: "Item title",
          type: "coolThingItem",
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Cool things section",
        media: FaIceCream,
      };
    },
  },
});
