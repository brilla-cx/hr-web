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
      description:
        "A reference to a keyword that describes the target audience. It's like a secret password to unlock the perfect match!",
    }),
    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
      description:
        "Toggle to customize the content for this cool thing. Get creative and make it cool!",
    }),
    defineField({
      name: "topHeading",
      title: "Top Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "The top heading for the customized content. Make it stand out like a cherry on top!",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
      description: "The heading for this cool thing. Give it a tasty name!",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "The mouthwatering description of this cool thing. Describe it with flavor!",
    }),
    defineField({
      name: "image",
      title: "Content Image",
      type: "image",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "An enticing image to accompany the cool thing. Make their eyes scream, 'Yum!'",
    }),
    defineField({
      name: "coolThingsItems",
      title: "Cool Things Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "coolThingItem",
          title: "Cool Thing Item",
          type: "document",
          fields: [
            defineField({
              name: "itemTitle",
              title: "Item title",
              type: "string",
              description:
                "The catchy title of this cool thing item. It's like a mic drop!",
            }),
            defineField({
              title: "icon",
              name: "Icon",
              type: "iconPicker",
              options: {
                storeSvg: true,
              },
            }),
            defineField({
              name: "itemContent",
              title: "Item content",
              type: "blockContent",
              description:
                "The description or details of this cool thing item. It's like a flavor explosion in words!",
            }),
          ],
        }),
      ],
      description:
        "An array of cool thing items to showcase. Each one is cooler than the last!",
    }),
  ],
  preview: {
    select: {
      customHeading: "customHeading",
    },
    prepare: ({ customHeading }) => {
      return {
        title: customHeading || "Cool Things",
        subtitle: "Cool Things Section",
        media: FaIceCream,
      };
    },
  },
});

export default coolThings;
