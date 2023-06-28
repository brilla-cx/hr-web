import { FaAccusoft } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

const resources = defineType({
  name: "resources",
  title: "Resources",
  type: "object",
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "reference",
      to: [{ type: "keyword" }],
      description:
        "The special keyword associated with these resources. Unlock the treasure!",
    }),
    defineField({
      name: "customizeContent",
      title: "Customize Content?",
      type: "boolean",
      description:
        "Toggle to customize the content of the resources. It's like having a superpower!",
    }),
    defineField({
      name: "customHeadingResources",
      title: "Custom Heading Resources",
      type: "string",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "Custom heading for the resources. Give it a unique touch like a shooting star!",
    }),
    defineField({
      name: "customContent",
      title: "Custom Content",
      type: "blockContent",
      hidden: ({ parent }) => !parent?.customizeContent,
      description:
        "Custom content for the resources. Let your words ignite inspiration!",
    }),
    defineField({
      name: "resources",
      title: "Resources",
      type: "array",
      of: [
        defineArrayMember({
          name: "resource",
          title: "Resource",
          type: "document",
          fields: [
            defineField({
              name: "resourceTitle",
              title: "Resource Title",
              type: "string",
              description:
                "The title of the resource. Make it captivating and intriguing!",
            }),
            defineField({
              name: "resourceLinkText",
              title: "Resource Link Text",
              type: "string",
              description:
                "The text for the link to the resource. Let it shine like a guiding star!",
            }),
            defineField({
              name: "resourceLinkHref",
              title: "Resource Link Href",
              type: "url",
              description:
                "The URL or link address of the resource. Share the pathway to knowledge!",
            }),
          ],
        }),
      ],
      description:
        "Select the resources to include. They are like precious gems in a treasure chest!",
    }),
  ],
  preview: {
    select: {
      customHeadingResources: "customHeadingResources",
    },
    prepare: ({ customHeadingResources }) => {
      return {
        title: customHeadingResources || "Resources",
        subtitle: "Resources Section",
        media: FaAccusoft,
      };
    },
  },
});

export default resources;
