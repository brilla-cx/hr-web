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
            name: "seo",
            title: "SEO",
        },
    ],
    fields: [
        {
            name: "name",
            title: "Name",
            description: "The title of the book.",
            type: "string",
            validation: Rule => Rule.required().error("A book without a title is like..."),
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
            name: "summary",
            title: "Summary",
            description: "A brief summary of the book. This is human generated.",
            type: "string",
            group: "bookDetails",
            validation: Rule => Rule.required().error("We needs a brief human generated summary please."),
        },
        {
            name: "bookAuthor",
            title: "Book Author",
            description: "The name of the author of the book.",
            type: "string",
            validation: Rule => Rule.required().error("Uh, let's give the creator some mad props here and include their name."),
            group: "bookDetails",
        },
        {
            name: "bookUrl",
            title: "Book URL",
            description: "The AMZN url to buy the book or similar.",
            type: "string",
            validation: Rule => Rule.required().uri().error("Please add a valid URL to the book, so readers can get it."),
            group: "bookDetails",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: Rule => Rule.required().error("We need a category for the book."),
            group: "theGist",
        },
        {
            name: "theGist",
            title: "The Gist by ChatGPT",
            type: "array",
            of: [{ type: "block" }],
            options: { spellcheck: true },
            validation: Rule => Rule.required().error("Where's The Gist by ChatGPT?"),
            group: "theGist",
        },
        {
            name: "image",
            title: "Featured image",
            description:
                "The really big image at the top of every post. You can add your own from Stable Diffusion or use the built-in Unsplash integration.",
            type: "image",
            group: "bookDetails",
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
                    validation: Rule => Rule.required().error("Please add some alt text for the image."),
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: Rule => Rule.required().error("A post without a slug is like a slug without a post."),
            group: ["bookDetails", "seo"],
        },
        {
            name: "seoTitle",
            title: "SEO Title",
            description: "The SEO Title of the post. This is probably not going to be the same as the title.",
            type: "string",
            group: ["bookDetails", "seo"],
            options: { source: "name", maxLength: 60, spellcheck: true },
            validation: Rule => Rule.required().error("What's Kristen going to say if you don't have an SEO Title??"),
        },
        {
            name: "seoMetaDescription",
            title: "SEO Meta Description",
            description: "The SEO Meta Description of the post.",
            type: "array",
            of: [{ type: "block" }],
            options: { maxLength: 158, spellcheck: true },
            group: ["bookDetails", "seo"],
            validation: Rule => Rule.required().error("Keep it short and sweet otherwise from Kristen you'll feel the heat."),
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "date",
            group: ["bookDetails", "seo"],
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
