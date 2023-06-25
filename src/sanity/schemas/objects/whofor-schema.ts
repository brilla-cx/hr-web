import { FaBullseye } from "react-icons/fa";
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
      description:
        "A reference to a keyword that describes the target audience. It's like a secret password to unlock the perfect match!",
    }),

    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
      description:
        "A switch to determine if you want to customize the content for this section. Enable it to unleash your creativity!",
    }),

    defineField({
      name: "customHeading",
      title: "Custom Heading",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "If you chose to customize the content, this field allows you to create a custom heading. Make it catchy and memorable!",
    }),

    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "Another customization option! Use this field to craft unique and engaging content for your target audience. Leave them wanting more!",
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
              description:
                "The heading for each card item. It's like the headline of a captivating story!",
            }),

            defineField({
              name: "content",
              title: "Content",
              type: "blockContent",
              description:
                "The content of each card item. Use your words wisely to captivate and engage the readers. Let your creativity flow!",
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
        title: customHeading || "Who For",
        subtitle: "Who For Section",
        media: FaBullseye,
      };
    },
  },
});

export default whoFor;
