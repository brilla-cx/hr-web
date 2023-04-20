/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/gists-schema.ts
import { FaFeatherAlt } from 'react-icons/fa';

const gists = {
  name: 'gist',
  title: 'Gists',
  icon: FaFeatherAlt,
  type: 'document',
  groups: [
    {
      name: 'editorialWorkflow',
      title: 'Edtorial Workflow',
    },
    {
      name: 'writing',
      title: 'Writing',
      default: true,
    },
    {
      name: 'meta',
      title: 'Meta',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "Select the status of the document.",
      group: 'editorialWorkflow',
      options: {
        list: [
          { title: "Ideation", value: "ideation" },
          { title: "Rough draft", value: "rough_draft" },
          { title: "First draft", value: "first_draft" },
          { title: "Final draft", value: "final_draft" },
          { title: "Editing", value: "editing" },
          { title: "Approved", value: "approved" }
        ],
        layout: "dropdown",
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      description: 'The title of the post.',
      type: 'string',
      group: 'writing',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'The slug of the post.',
      type: 'slug',
      group: 'seo',
      options: { source: 'name', maxLength: 96 },
    },
    {
      name: 'approved',
      title: 'Approved',
      description: 'Is this post approved?',
      type: 'boolean',
      group: 'editorialWorkflow',
    },
    {
      name: "featured",
      title: "Mark as featured",
      description: 'Is this a featured post?.',
      type: "boolean",
      group: 'editorialWorkflow',
    },
    {
      name: "category",
      title: "Category",
      description: 'Select the most relevant category for this post.',
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: 'editorialWorkflow',
    },
    {
      name: "author",
      title: "Author",
      description: "The author of the post.",
      type: "reference",
      to: { type: "author" },
      group: 'editorialWorkflow',
    },
    {
      name: "image",
      title: "Featured image",
      description: "The really big image at the top of every post. You can add your own from Stable Diffusion or use the built-in Unsplash integration.",
      type: "image",
      group: 'meta',
      fields: [
        {
          name: "caption",
          title: "Image caption",
          description: "Use this to add your Stable Diffusion prompt or attribute a source.",
          type: "string",
        },
        {
          name: "imageAltText",
          title: "Image Alt Text",
          description: "E.g. A grumpy looking bald man on a chair.",
          type: "string",
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'tldr',
      title: 'TLDR',
      description: 'The TL;DR of the post. Not for SEO',
      type: 'array',
      of: [{ type: 'block' }],
      options: { maxLength: 300, spellcheck: true },
      group: 'writing',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'This is the primary content of the post.',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Code', value: 'code' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      options: { spellcheck: true },
      group: 'writing',
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "author",
      media: "image",
    },
  },
};

export default gists;
