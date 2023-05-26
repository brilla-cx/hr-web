/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/socialBlog-schema.ts
import { FaArchive } from "react-icons/fa";

const socialBlog = {
  name: "socialBlog",
  title: "Social Blog",
  icon: FaArchive,
  type: "document",
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
      name: "approved",
      title: "Approved",
      description: "Has this post been formatted for the web?",
      type: "boolean",
      group: "compose",
    },
    {
      name: "featured",
      title: "Mark as featured",
      description: "Is this a featured post?.",
      type: "boolean",
      group: "compose",
    },
    {
      name: "name",
      title: "Name",
      description:
        "The title of the post. Don't change this, but ensure there's no &nbsp; in the title etc.",
      type: "string",
      options: { spellcheck: true },
      group: ["compose", "seo"],
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "If you notice the slug is wonky, be sure to copy and paste into a sheet where you're tracking old and new slugs before you update it.",
      type: "slug",
      group: ["compose", "seo"],
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "author",
      title: "Author",
      description: "This will always be theeee Rebekah.",
      type: "reference",
      to: { type: "author" },
      group: "compose",
    },
    {
      name: "category",
      title: "Category",
      description: "Select the most relevant category for this post.",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: "compose",
      hidden: true,
    },
    {
      name: "yoastTitle",
      title: "Yoast Title",
      description: "The legacy Yoast Title from RebekahRadice.com.",
      type: "string",
      options: { spellcheck: true },
      group: "seo",
    },
    {
      name: "yoastDescription",
      title: "Yoast Description",
      description: "The legacy Yoast Description from RebekahRadice.com.",
      type: "string",
      options: { spellcheck: true },
      group: "seo",
    },
    {
      name: "content",
      title: "Content",
      description:
        "This is the primary content of the post. This is what you gotta look at closely.",
      group: "compose",
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
      description:
        "This should be the original published on date from WordPress, not the date you updated it.",
      group: "compose",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "autor",
      media: "image",
    },
  },
};

export default socialBlog;