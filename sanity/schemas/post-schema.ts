/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/post-schema.ts
import { FaFeatherAlt } from "react-icons/fa";

const post = {
  name: "post",
  title: "Posts",
  icon: FaFeatherAlt,
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  groups: [
    {
      name: "editorialWorkflow",
      title: "Workflow",
    },
    {
      name: "compose",
      title: "Compose",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "Select the status of the document.",
      group: "editorialWorkflow",
      options: {
        list: [
          { title: "Ideation", value: "ideation" },
          { title: "Rough draft", value: "rough_draft" },
          { title: "First draft", value: "first_draft" },
          { title: "Final draft", value: "final_draft" },
          { title: "Editing", value: "editing" },
          { title: "Approved", value: "approved" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      description: "The title of the post.",
      type: "string",
      group: "compose",
      validation: Rule => Rule.required().warning("Every post needs a name, right?"),
    },
    {
      name: "slug",
      title: "Slug",
      description: "The slug of the post.",
      type: "slug",
      group: ["compose", "seo"],
      options: { source: "name", maxLength: 96 },
      validation: Rule => Rule.required().uri().warning("A post needs a slug as a slug needs a post."),
    },
    {
      name: "approved",
      title: "Approved",
      description: "Is this post approved?",
      type: "boolean",
      group: "editorialWorkflow",
    },
    {
      name: "featured",
      title: "Mark as featured",
      description: "Is this a featured post?.",
      type: "boolean",
      group: "editorialWorkflow",
    },
    {
      name: "category",
      title: "Category",
      description: "Select the most relevant category for this post.",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: "editorialWorkflow",
      validation: Rule => Rule.required().warning("Please select a category/topic for the post.?"),
    },
    {
      name: "author",
      title: "Author",
      description: "The author of the post.",
      type: "reference",
      to: { type: "author" },
      group: "editorialWorkflow",
      validation: Rule => Rule.required().warning("This post didn't just write itself, did it?"),
    },
    {
      name: "image",
      title: "Featured image",
      description:
        "The really big image at the top of every post.",
      type: "image",
      group: "meta",
      validation: Rule => Rule.required().warning("Use the built-in OpenAI image generation thingamajig to create one"),
      fields: [
        {
          name: "caption",
          title: "Image caption",
          description:
            "Use this to add your Stable Diffusion prompt or attribute a source.",
          type: "string",
        },
        {
          name: "imageAltText",
          title: "Image Alt Text",
          description: "E.g. A grumpy looking bald man on a chair.",
          type: "string",
          validation: Rule => Rule.required().warning("Use your OpenAI image generation prompt for the imageAltText."),
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "tldr",
      title: "TLDR",
      description: "The TL;DR of the post. Not for SEO",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 300, spellcheck: true },
      group: "compose",
      validation: Rule => Rule.required().warning("Too long, didn't read. Please ensure to include a TLDR."),
    },
    {
      name: "content",
      title: "Content",
      description: "This is the primary content of the post.",
      type: "blockContent",
      options: { spellcheck: true },
      group: "compose",
      validation: Rule => Rule.required().warning("A post without content is like a host without the most."),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "meta",
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
      subtitle: "author.name",
      media: "image",
    },
  },
};

export default post;
