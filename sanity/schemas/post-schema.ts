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
      name: "compose",
      title: "Compose",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "iterable",
      title: "Iterable",
    },

  ],
  fields: [
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "Select the status of the document.",
      group: "compose",
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
      name: "approved",
      title: "Approved",
      description: "Is this post approved?",
      type: "boolean",
      group: "compose",
      hidden: true,
    },
    {
      name: "name",
      title: "Title",
      description: "The title of the post.",
      type: "string",
      group: ["compose", "iterable"],
      validation: Rule => Rule.required().warning("Every post needs a name, right?"),
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      description: "The SEO Title of the post. Believe it or not, it could be different than the title of the post.",
      type: "string",
      group: "seo",
      options: { source: "name", maxLength: 60, spellcheck: true },
      validation: Rule => Rule.required().warning("What's Kristen going to say if you don't have an SEO Title??"),
    },
    {
      name: "nameIterable",
      title: "Iterable Title",
      description: "The title of the post on Iterable, it will probably be different than the website.",
      type: "string",
      group: "iterable",
      options: { maxLength: 60, spellcheck: true },
      validation: Rule => Rule.required().warning("Every Itable post needs a name, right?"),
    },
    {
      name: "tldr",
      title: "TLDR",
      description: "The TL;DR of the post that displays on cards on the website or short email sections. This should be a short and sweet summary of 1-2 sentences.",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 100, spellcheck: true },
      group: ["compose", "iterable"],
      validation: Rule => Rule.required().warning("Too long, didn't read. Please ensure to include a TLDR."),
    },
    {
      name: "seoMetaDescription",
      title: "SEO Meta Description",
      description: "The SEO Meta Description of the post.",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 158, spellcheck: true },
      group: "seo",
      validation: Rule => Rule.required().warning("Keep it short and sweet otherwise from Kristen you'll feel the heat."),
    },
    {
      name: "content",
      title: "Content",
      description: "This is the primary content of the post on the website.",
      type: "blockContent",
      options: { spellcheck: true },
      group: ["compose", "iterable"],
      validation: Rule => Rule.required().warning("A post without content is like a host without the most."),
    },
    {
      name: "iterableContent",
      title: "Iterable Content",
      description: "This is the content that will be shown in Iterable and emails.",
      type: "blockContent",
      options: { spellcheck: true },
      group: "iterable",
      validation: Rule => Rule.required().warning("An email section without content is like a ballgame without a cold one."),
    },
    {
      name: "slug",
      title: "Slug",
      description: "The slug of the post.",
      type: "slug",
      group: ["compose", "seo"],
      options: { source: "name", maxLength: 96 },
      validation: Rule => Rule.required().warning("A post needs a slug as a slug needs a post."),
    },
    {
      name: "featured",
      title: "Mark as featured",
      description: "Is this a featured post?",
      type: "boolean",
      group: ["compose", "iterable"],
    },
    {
      name: "category",
      title: "Category",
      description: "Select the most relevant category for this post.",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: ["compose", "iterable"],
      validation: Rule => Rule.required().warning("Please select a category/topic for the post.?"),
    },
    {
      name: "author",
      title: "Author",
      description: "The author of the post.",
      type: "reference",
      to: { type: "author" },
      group: ["compose", "iterable"],
      validation: Rule => Rule.required().warning("This post didn't just write itself, did it?"),
    },
    {
      name: "image",
      title: "Featured image",
      description:
        "The really big image at the top of every post.",
      type: "image",
      group: ["compose", "iterable"],
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
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: ["compose", "iterable"],
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