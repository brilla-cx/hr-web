/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/post-schema.ts
import { GoLaw } from "react-icons/go";

const legal = {
  name: "legal",
  title: "Legal",
  icon: GoLaw,
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  groups: [
    {
      name: "compose",
      title: "Compose",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      description: "The name of the legal page.",
      type: "string",
      group: "compose",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      description: "The SEO Title of the post. This is probably not going to be the same as the title.",
      type: "string",
      group: ["compose", "seo"],
      options: { source: "name", maxLength: 60, spellcheck: true },
      validation: Rule => Rule.required().error("What's Kristen going to say if you don't have an SEO Title??"),
    },
    {
      name: "tldr",
      title: "TLDR",
      description: "The TL;DR of the legal that displays in cards on the website or emails. It's not for SEO",
      type: "string",
      options: { maxLength: 300, spellcheck: true },
      group: "compose",
      validation: Rule => Rule.required().error("Too long, didn't read. Please ensure to include a TLDR."),
    },
    {
      name: "seoMetaDescription",
      title: "SEO Meta Description",
      description: "The SEO Meta Description of the post.",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 158, spellcheck: true },
      group: ["compose", "seo"],
      validation: Rule => Rule.required().error("Keep it short and sweet otherwise from Kristen you'll feel the heat."),
    },
    {
      name: "slug",
      title: "Slug",
      description: "The slug of the page.",
      type: "slug",
      group: "compose",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content",
      description:
        "This is the primary content of the post. This is what you gotta look at closely.",
      group: "compose",
      validation: Rule => Rule.required().error("Hmm...this legal page needs some legalese."),
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Code", value: "code" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["https", "http", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      options: { spellcheck: true },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "compose",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};

export default legal;
