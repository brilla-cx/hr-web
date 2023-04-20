/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/book-schema.ts
import { FaBook } from "react-icons/fa";

const book = {
    name: "book",
    title: "Books",
    icon: FaBook,
    type: "document",
    groups: [
        {
            name: "bookDetails",
            title: "Book Details",
            default: true,
        },
        {
            name: "theGist",
            title: "The Gist",
        },
        {
            name: "meta",
            title: "Meta",
        },
    ],
    fields: [
        {
            name: "name",
            title: "Name",
            description: "The title of the book.",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            group: "bookDetails",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            description: "The subtitle or extended title of the book.",
            type: "string",
            group: "bookDetails",
        },
        {
            name: "bookAuthor",
            title: "Book Author",
            description: "The name of the author of the book.",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            group: "bookDetails",
        },
        {
            name: "bookUrl",
            title: "Book URL",
            description: "The AMZN url to buy the book or similar.",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            group: "bookDetails",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (Rule: any) => Rule.required(),
            group: "theGist",
        },
        {
            name: "theGist",
            title: "The Gist by ChatGPT",
            type: "array",
            of: [{ type: "block" }],
            options: { spellcheck: true },
            validation: (Rule: any) => Rule.required(),
            group: "theGist",
        },
        {
            name: "image",
            title: "Featured Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
            group: "meta",
        },
        {
            name: "imageAltText",
            title: "Image Alt Text",
            type: "string",
            description: "Enter the alternative text for the Featured Image per A11y.",
            validation: (Rule: any) => Rule.required(),
            group: "meta",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
            group: "meta",
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "date",
            group: "meta",
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "bookAuthor",
            media: "image",
        },
    },
};

export default book;
