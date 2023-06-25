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
      description:
        "The special keyword associated with these products. Unlock their potential!",
    }),
    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
      description: "Toggle to customize the content of this section.",
    }),
    defineField({
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "Customize the heading for this section. Make it unique and captivating!",
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "Customize the content for this section. Tell a compelling story about your products!",
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          name: "product",
          title: "Product",
          type: "document",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              description:
                "Upload a 400px x 400px web-optimized image for the product.",
              validation: (Rule) =>
                Rule.required().error(
                  "Please upload an image for the product."
                ),
              fields: [
                {
                  name: "imageAltText",
                  title: "Image Alt Text",
                  description:
                    "Enter the alternative text for the product's image per A11y.",
                  type: "string",
                  validation: (Rule) =>
                    Rule.required().error(
                      "Please provide alternative text for the product image."
                    ),
                },
                {
                  name: "caption",
                  title: "Image Caption",
                  description:
                    "Use this to add your AI prompt or attribute a source.",
                  type: "string",
                },
              ],
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              description:
                "The heading for the product. Make it stand out and grab attention!",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "blockContent",
              description:
                "The content describing the product. Highlight its features and benefits!",
            }),
          ],
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

export default products;
