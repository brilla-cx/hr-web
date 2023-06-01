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
      name: "qa",
      title: "Checklist",
    },
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
      name: "qaH1",
      title: "H1 Checked?",
      description: "Did you check the H1 for the post?",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qaHeadings",
      title: "Body Content Headings Checked?",
      description: "Did you clean up all the headiings in the content body?",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qaAltText",
      title: "Body Images Alt Text Checked?",
      description: "Did you add/update all of the Alt Text for images within the content?",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qaInternalLinks",
      title: "Internal Links Updated?",
      description: "Did you update the internal links within the post content? i.e. https://rebekahradice.com/slug should be /social-blog/slug",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qaSlug",
      title: "Social Blog Slug Checked?",
      description: "Did you check/update the slug for the post and remove any --- or &nbsp; and or crazy formatting that shouldn't be in the slug?",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "qaRedirect",
      title: "Redirect Required?",
      description: "If you updated the slug, did you add the old slug and the new one to the redirects sheet?",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "approved",
      title: "Publish this!",
      description: "I hereby confirm that I have thoroughly checked this post and it's ready to be published. No one will need to review my work.",
      type: "boolean",
      group: "qa",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Title",
      description:
        "The title of the post. Don't change this, but ensure there's no &nbsp; in the title etc.",
      type: "string",
      options: { spellcheck: true },
      group: ["compose", "seo"],
      validation: Rule => Rule.required().warning("Every post needs a name, right?"),
    },
    {
      name: "yoastTitle",
      title: "Yoast Title",
      description: "The legacy Yoast Title from RebekahRadice.com. If empty, copy and paste the Title from above.",
      type: "string",
      options: { spellcheck: true },
      group: ["compose", "seo"],
      validation: Rule => Rule.required().warning("What's Kristen going to say if you don't have an SEO Title??"),
    },
    {
      name: "yoastDescription",
      title: "Yoast Description",
      description: "The legacy Yoast Description from RebekahRadice.com.",
      type: "string",
      options: { spellcheck: true },
      group: ["compose", "seo"],
      validation: Rule => Rule.required().warning("Keep it short and sweet otherwise from Kristen you'll feel the heat."),
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
              validation: Rule => Rule.required().warning("Please add an appropriate A11y compliant Alt Text for the image."),
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
      name: "featured",
      title: "Top Post",
      description: "Is this one of Rebekah's top 50 posts?",
      type: "boolean",
      group: "compose",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "If you notice the slug is wonky, be sure to copy and paste into a sheet where you're tracking old and new slugs before you update it.",
      type: "slug",
      group: ["compose", "seo"],
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
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
      description: "This will always be social media management. Please don't add any other categories.",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: "compose",
      hidden: true,
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