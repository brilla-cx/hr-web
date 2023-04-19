/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/gists-schema.ts
import { FaFeatherAlt } from 'react-icons/fa';

const gists = {
  name: 'gist',
  title: 'Gists',
  icon: FaFeatherAlt,
  type: 'document',
  fields: [{
    name: 'name',
    title: 'Name',
    description: 'The title of the post.',
    type: 'string',
  },
  {
    name: 'slug',
    title: 'Slug',
    description: 'The slug of the post.',
    type: 'slug',
    options: { source: 'name', maxLength: 96 },
  },
  {
    name: 'approved',
    title: 'Approved',
    description: 'Is this post approved?',
    type: 'boolean',
  },
  {
    name: "featured",
    title: "Mark as featured",
    description: 'Is this a featured post?.',
    type: "boolean"
  },
  {
    name: "category",
    title: "Category",
    description: 'Select the most relevant category for this post.',
    type: "array",
    of: [{ type: "reference", to: { type: "category" } }]
  },
  {
    name: "author",
    title: "Author",
    description: "The author of the post.",
    type: "reference",
    to: { type: "author" },
  },
  {
    name: "featuredImage",
    title: "Featured image",
    description: "The really big image at the top of every post. You can add your own from Stable Diffusion or use the built-in Unsplash integration.",
    type: "image",
    fields: [
      {
        name: "caption",
        type: "string",
        title: "Image caption",
        description: "Use this to add your Stable Diffusion prompt or attribute a source.",
      },
      {
        name: "alt",
        type: "string",
        title: "Alternative text",
        description: "E.g. A grumpy looking bald man on a chair."
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
            options: {
              isHighlighted: true,
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true,
            },
          },
        ],
      },
    ],
    options: { spellcheck: true },
  },
  ]
};

export default gists;
