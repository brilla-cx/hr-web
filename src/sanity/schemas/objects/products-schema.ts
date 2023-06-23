import { FaShoppingCart } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const products = defineType({
  name: "products",
  title: "Products",
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
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          name: "product",
          type: "reference",
          to: [{ type: "product" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      customHeading: "customHeading",
    },
    prepare: ({ customHeading }) => {
      return {
        title: customHeading || "Products",
        subtitle: "Products Section",
        media: FaShoppingCart,
      };
    },
  },
});
