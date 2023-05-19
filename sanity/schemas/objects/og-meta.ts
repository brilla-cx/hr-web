/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/objects/og-meta.ts
// ogImage is commented out assuming we're dynamically generating.

import { FaFacebook } from "react-icons/fa"

const OgMeta = {
    name: 'og-meta',
    title: 'OG Metadata',
    type: 'object',
    icon: FaFacebook,
    hidden: false,
    fields: [
        {
            name: 'ogTitle',
            title: 'OG Title',
            type: 'string',
            description: 'The Open Graph title of the site.',
        },
        {
            name: 'ogDescription',
            title: 'OG Description',
            type: 'text',
            description: 'The Open Graph description of the site.',
        },
        {
            name: 'ogUrl',
            title: 'OG URL',
            type: 'url',
            description: 'This is the canonical URL of the site.',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            description: 'Type of the object (e.g. website, article, video)',
        },
        /*
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'This is automatically set to grab the OG image. Don\'t sweat it.',
            fields: [
                {
                    name: 'altText',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the image',
                },
                {
                    name: 'width',
                    title: 'Width',
                    type: 'number',
                    description: 'Width of the image',
                },
                {
                    name: 'height',
                    title: 'Height',
                    type: 'number',
                    description: 'Height of the image',
                },
            ],
        */
    ],
    preview: {
        select: {
            title: 'ogTitle',
            description: 'ogDescription',
            icon: FaFacebook,
        },
    },
}

export default OgMeta;