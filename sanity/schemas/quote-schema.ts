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
            description: "Enter the quote. Make sure it\'s a good one.",
            type: "array",
            of: [{ type: "block" }],
            options: { spellcheck: true },
            validation: Rule => Rule.required(),
        },
        {
            name: "quoteAuthor",
            title: "Quote Author",
            description: "Who is the quote originally attributed to?",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "sourceURL",
            title: "Source URL",
            description: "The URL to the page where you found the quote.",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            description: "Select the most appropriate category for the quote.",
            to: [{ type: "category" }],
            validation: Rule => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
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
