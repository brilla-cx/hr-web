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
      description: "The name of the legal page.",
      type: "string",
      group: "compose",
    },
    {
      name: "slug",
      title: "Slug",
      description: "The slug of the page.",
      type: "slug",
      group: "seo",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "approved",
      title: "Approved",
      description: "Is this page approved?",
      type: "boolean",
      group: "editorialWorkflow",
    },
    {
      name: "author",
      title: "Author",
      description: "The author of the post.",
      type: "reference",
      to: { type: "author" },
      group: "editorialWorkflow",
    },
    {
      name: "content",
      title: "Content",
      description: "This is the primary content of the post.",
      type: "blockContent",
      options: { spellcheck: true },
      group: "compose",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "meta",
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

export default legal;
