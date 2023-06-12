/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/quote-schema.ts
import { FaQuoteLeft } from "react-icons/fa";

const quote = {
  name: "quote",
  title: "Quotes",
  icon: FaQuoteLeft,
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      description: "Enter the quote. Make sure it is a good one.",
      type: "array",
      of: [{ type: "block" }],
      options: { spellcheck: true },
      validation: (Rule) => Rule.required().error("A quote without words is like an answer without a response."),
    },
    {
      name: "quoteAuthor",
      title: "Quote Author",
      description: "Who is the quote originally attributed to?",
      type: "string",
      validation: (Rule) => Rule.required().error("Who spoke these words of wisdom?"),
    },
    {
      name: "sourceURL",
      title: "Source URL",
      description: "The URL to the page where you found the quote.",
      type: "string",
      validation: (Rule) => Rule.required().uri().error("Please provide a valid URL for the source, ensure it's a credible site."),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      description: "Select the most appropriate category for the quote.",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required().error("Select the most appropriate category for the quote"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("This should be the same as the quote name."),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quoteAuthor",
      media: "category",
    },
  },
};

export default quote;
