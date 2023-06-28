import { FaBolt } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const cornerstonePage = defineType({
  name: "cornerstonePage",
  type: "document",
  title: "CornerStone Pages",
  icon: FaBolt,
  groups: [
    {
      name: "compose",
      title: "Compose",
    },
    {
      name: "section",
      title: "Sections",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      group: ["compose", "seo",],
      type: "reference",
      to: [{ type: "keyword" }],
    }),
    defineField({
      name: "isCornerstone",
      type: "boolean",
      description: "Is this a cornerstone page?",
      group: "compose",
    }),
    defineField({
      name: "title",
      type: "string",
      description: "Enter an SEO optimized page title.",
      validation: (Rule) =>
        Rule.max(58).error("Title should be 58 characters or less."),
      group: ["compose", "seo",]
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The slug of the page.",
      type: "slug",
      group: ["compose", "seo",],
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "cornerstonePageSection",
      type: "array",
      title: "Page Sections",
      group: "section",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "aboutUs",
          type: "aboutUs",
        }),
        defineArrayMember({
          name: "coolThings",
          type: "coolThing",
        }),
        defineArrayMember({
          name: "ctaOne",
          type: "ctaOne",
        }),
        defineArrayMember({
          name: "ctaTwo",
          type: "ctaTwo",
        }),
        defineArrayMember({
          name: "intro",
          type: "intro",
        }),
        defineArrayMember({
          name: "products",
          type: "products",
        }),
        defineArrayMember({
          name: "resources",
          type: "resources",
        }),
        defineArrayMember({
          name: "whoFor",
          type: "whoFor",
        }),
        defineArrayMember({
          name: "whyShouldCare",
          type: "whyShouldCare",
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "associatedPage",
      title: "Associated Cornerstone",
      type: "reference",
      description: "Since this isn't a cornerstone, you need to associate it to one.",
      to: [{ type: "cornerstonePage" }],
      hidden: ({ document }) => document?.isCornerstone == true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isCornerstone: 'isCornerstone',
      keyword: 'keyword.keyword',
    },
    prepare({ title, isCornerstone, keyword }) {
      const subtitle = isCornerstone ? 'Cornerstone' : 'Pillar';
      const keywordTitle = keyword || '';

      return {
        title,
        subtitle: `${subtitle} page with keyword: ${keywordTitle}`,
      };
    },
  },
});
