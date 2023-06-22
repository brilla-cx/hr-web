import { defineArrayMember, defineField, defineType } from "sanity";

export const cornerstonePage = defineType({
  name: "cornerstonePage",
  type: "document",
  title: "CornerStone Pages",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "hero",
      title: "Hero",
    },
    {
      name: "compose",
      title: "Compose",
    },
    {
      name: "section",
      title: "Sections",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Cornerstone Page Title",
      group: "seo",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The slug of the page.",
      type: "slug",
      group: "compose",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "reference",
      to: [{ type: "keyword" }],
    }),

    defineField({
      name: "cornerstonePageSection",
      type: "array",
      title: "Cornerstone page sections",
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
  ],
});
