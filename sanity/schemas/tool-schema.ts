/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/tool-schema.ts
import { FaTools } from "react-icons/fa";

const tool = {
    name: 'tool',
    title: 'Tools',
    icon: FaTools,
    type: 'document',
    groups: [
        {
            name: 'partnerInfo',
            title: 'Partner Info',
            default: true,
        },
        {
            name: 'toolInfo',
            title: 'Tool Info',
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
            name: 'isPartner',
            title: 'Is Partner',
            description: "Is the company/maker of the tool a Hey Rebekah partner?",
            type: 'boolean',
            group: 'partnerInfo',
            validation: Rule => Rule.required().warning("Please indicate if the company is a partner or not?"),
        },
        {
            name: 'companyName',
            title: 'Company',
            description: 'The name of the company that makes the tool. i.e. BRIL.LA, LLC.',
            type: 'string',
            group: 'partnerInfo',
            validation: Rule => Rule.required().warning("What's the company/creator's name?"),
        },
        {
            name: 'toolUrl',
            title: "Tool Url",
            descriptions: "the company website link like bril.la ....",
            type: 'string',
        },
        {
            name: 'partnerContactName',
            title: 'Partner Contact',
            description: 'What\'s the name of the contact person at the Partner Company?',
            type: 'string',
            group: 'partnerInfo',
        },
        {
            name: 'discount',
            title: 'Reader Discount',
            description: 'What\'s the discount for Hey Rebekah readers? i.e. 15% off all plans.',
            type: 'string',
            group: 'partnerInfo',
        },
        {
            name: 'name',
            title: 'Name',
            description: 'Title of the tool',
            type: 'string',
            group: 'toolInfo',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'meta',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            group: 'meta',
            validation: Rule => Rule.required().warning("Please indicate the most appropriate category for the tool?"),
        },
        {
            name: 'image',
            title: "Partner's Logo",
            description: "Upload the partner's logo in SVG format with a transparent background.",
            type: 'image',
            group: 'toolInfo',
            validation: Rule => Rule.required().warning("We need a logo for the partner in SVG format please."),
            fields: [
                {
                    name: 'imageAltText',
                    title: 'Image Alt Text',
                    description: "Enter the alternative text for the partner's logo Image per A11y.",
                    type: 'string',
                    group: 'toolInfo',
                    validation: Rule => Rule.required().warning("Please enter the alternative text for the partner's logo image."),
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            description: 'Write a brief description of the tool. Like super brief.',
            type: 'string',
            group: 'toolInfo',
            validation: Rule => Rule.required().warning("Please write a brief description of the tool."),
        },
        {
            name: 'hrUse',
            title: 'HR Use',
            description: 'Use bullets to describe how we use the tool',
            type: 'array',
            of: [{ type: 'block' }],
            options: { maxLength: 300, spellcheck: true },
            group: 'toolInfo',
            validation: Rule => Rule.required().warning("Please describe how we use the tool in bullet format."),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
            group: 'meta',
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "shortDescription",
            media: "image",
        },
    },
};

export default tool;
