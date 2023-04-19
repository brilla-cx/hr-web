/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/tool-schema.ts
import { FaTools } from "react-icons/fa";

const tool = {
    name: 'tool',
    title: 'Tools',
    icon: FaTools,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            description: 'Title of the tool',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
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
            name: 'isPartner',
            title: 'Is Partner',
            description: "Is the company/maker of the tool a Hey Rebekah partner?",
            type: 'boolean',
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
            name: 'logo',
            title: "Partner's Logo",
            description: "Upload the partner's logo in SVG format with a transparent background.",
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'imageAltText',
            title: 'Image Alt Text',
            description: "Enter the alternative text for the partner's logo Image per A11y.",
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            description: 'Write a brief description of the tool. Like super brief.',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'hrUse',
            title: 'HR Use',
            description: 'Use bullets to describe how we use the tool',
            type: 'array',
            of: [{ type: 'block' }],
            options: { maxLength: 300, spellcheck: true },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
        },
    ],
};

export default tool;
