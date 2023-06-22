import { FaAccusoft } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "reference",
      to: [{ type: "keyword" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Upload a 400px x 400px web-optimized image for the product.",
      validation: (Rule) =>
        Rule.required().error("Please upload an image for the product."),
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
          description: "Use this to add your AI prompt or attribute a source.",
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
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ],
});
