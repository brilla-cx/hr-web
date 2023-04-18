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
    name: 'tldr',
    title: 'TLDR',
    description: 'The TL;DR of the post. Not for SEO',
    type: 'text',
    options: { maxLength: 300 },
  },
  /**{
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
    },*/
  {
    name: "featured",
    title: "Mark as featured",
    description: 'Is this a featured post?.',
    type: "boolean"
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
  ]
};

export default gists;