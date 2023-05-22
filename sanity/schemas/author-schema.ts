/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/author-schema.ts
import { FaUserAstronaut } from "react-icons/fa";

const author = {
    name: "author",
    title: "Authors",
    icon: FaUserAstronaut,
    type: "document",
    groups: [
        {
            name: 'basicInfo',
            title: 'Basic Info',
            default: true,
        },
        {
            name: 'eeatInfo',
            title: 'EEAT Info',
        },
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
        {
            name: "name",
            title: "Name",
            description: "The author's full name. E.g. Rebekah Radice",
            type: "string",
            group: 'basicInfo',
            validation: Rule => Rule.required().warning("Does't the author have a name?"),
        },
        {
            name: "image",
            title: "Image",
            description: "Upload a 400px x 400px web-optimized image for the author.",
            type: "image",
            group: 'basicInfo',
            validation: Rule => Rule.required().warning("Don't you want the world to see their pretty face?"),
            fields: [
                {
                    name: "imageAltText",
                    title: "Image Alt Text",
                    description: "Enter the alternative text for the author's image per A11y.",
                    type: "string",
                    validation: Rule => Rule.required().warning("Don't you want the author profile to be accessible?"),
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: "bio",
            title: "Bio",
            description: "The author's bio, max 255 char. For EEAT.",
            type: 'array',
            of: [{ type: 'block' }],
            options: { maxLength: 255, spellcheck: true },
            group: 'basicInfo',
            validation: Rule => Rule.required().warning("Keep it short and sweet there Tolstoy."),
        },
        {
            name: "publishedAt",
            title: "Published at",
            description: "Date when the author was published",
            type: "date",
            group: 'basicInfo',
        },
        {
            name: "expertise",
            title: "Expertise",
            description: "EEAT area of expertise. i.e. Rebekah Radice writes about digital marketing, the future of remote-work, and you know—stuff.",
            type: "string",
            group: 'eeatInfo',
            validation: Rule => Rule.required().warning("You got a lot of expertise, huh? Keep it short and sweet."),
        },
        {
            name: "category",
            title: "Primary Topic",
            description: "The primary topic the author writes about. That means just one Ambreen.",
            type: "reference",
            to: [{ type: "category" }],
            group: 'eeatInfo',
            validation: Rule => Rule.required().warning("Limit this to one category, por favor."),
        },
        {
            name: "beat",
            title: "Beat or Secondary Topics",
            description: "Select one or more other topics the author writes about, other than the primary topic.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                    _id: "category",
                },
            ],
            group: 'eeatInfo',
        },
        {
            name: "credentials",
            title: "Credentials",
            description: "Licenses, credentials etc. for EEAT.",
            type: 'array',
            of: [{ type: 'block' }],
            options: { maxLength: 300, spellcheck: true },
            group: 'eeatInfo',
        },
        {
            name: "appearances",
            title: "Appearances",
            description: "Enter a list of the author's appearances, events, etc. for EEAT.",
            type: 'array',
            of: [{ type: 'block' }],
            options: { spellcheck: true },
            group: 'eeatInfo',
        },
        {
            name: "slug",
            title: "Slug",
            description: "Click generate to create a unique slug for the author based on their name. i.e. first-last",
            type: "slug",
            options: {
                source: "name",
                maxLength: 30,
            },
            group: 'meta',
        },
        {
            name: "linkedin",
            title: "LinkedIn",
            description: "Enter the full url to the author's LinkedIn profile. i.e. https://linkedin.com/in/rebekah-radice",
            type: "string",
            group: 'meta',
            validation: Rule => Rule.required().uri().warning("Gotta have a LinkedIn profile, right?"),
        },
        {
            name: "twitter",
            title: "Twitter",
            description: "Enter the full url to the author's Twitter profile. i.e. https://twitter.com/rebekahradice",
            type: "string",
            group: 'meta',
            validation: (Rule: any) => Rule.uri(),
        },
        {
            name: "teamUrl",
            title: "Team URL",
            description: "Enter the full url to the author's BRIL.LA team member page. i.e. https://bril.la/team/rebekah-radice",
            type: "string",
            group: 'meta',
            validation: (Rule: any) => Rule.uri(),
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "expertise",
            media: "image",
        },
    },
};

export default author;
