/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/objects/twitter-meta.ts
// twitterImage is commented out assuming we're dynamically generating.

import { BsTwitter } from "react-icons/bs"

const TwitterMeta = {
    name: 'twitterMeta',
    title: 'Twitter Metadata',
    type: 'object',
    icon: BsTwitter,
    hidden: false,
    fields: [
        {
            name: 'twitterCard',
            title: 'Twitter Card',
            type: 'string',
            description: 'Placeholder for Twitter card type',
        },
        {
            name: 'twitterTitle',
            title: 'Twitter Title',
            type: 'string',
            description: 'The Twitter title of the site.',
        },
        {
            name: 'twitterDescription',
            title: 'Twitter Description',
            type: 'text',
            description: 'The Twitter description of the site.',
        },
        /*
            name: 'twitterImage',
            title: 'Twitter Image,
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
            title: 'twitterTitle',
            description: 'twitterDescription',
            icon: BsTwitter,
        },
    },
}

export default TwitterMeta;