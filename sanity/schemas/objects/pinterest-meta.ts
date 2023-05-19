/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/objects/pinterest-meta.ts
// pinterestImage is commented out assuming we're dynamically generating.

import { BsPinterest } from "react-icons/bs"

const pinterestMeta = {
    name: 'pinterestMeta',
    title: 'Pinterest Metadata',
    type: 'object',
    icon: BsPinterest,
    hidden: false,
    fields: [
        {
            name: 'pinterestRichPinDetails',
            title: 'Pinterest Rich Pin Details',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'The title of the article.',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'string',
                    description: 'The description of the article.',
                },
                {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                    description: 'The URL of the article.',
                },
                {
                    name: 'brand',
                    title: 'Brand',
                    type: 'string',
                    description: 'The brand associated with the article.',
                },
                /*
                    name: 'pinterestImage',
                    title: 'Pinterest Image',
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
        },
    ],
    preview: {
        select: {
            title: 'title',
            description: 'description',
            icon: BsPinterest,
        },
    },
}

export default pinterestMeta;