/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/book-schema.ts
import { FaBook } from "react-icons/fa";

const book = {
    name: 'book',
    title: 'Books',
    icon: FaBook,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            description: 'The title of the book.',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            description: 'The subtitle or extended title of the book.',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'bookAuthor',
            title: 'Book Author',
            description: 'The name of the author of the book.',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'imageAltText',
            title: 'Image Alt Text',
            type: 'string',
            description: 'Enter the alternative text for the Featured Image per A11y.',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
        },
        {
            name: 'theGist',
            title: 'The Gist by ChatGPT',
            type: 'array',
            of: [{ type: 'block' }],
            options: { spellcheck: true },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'bookUrl',
            title: 'Book URL',
            description: 'The AMZN url to buy the book or similar.',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};

export default book;
