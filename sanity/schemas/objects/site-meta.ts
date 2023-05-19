/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/objects/site-meta.ts

const SiteMeta = {
    name: 'sitemeta',
    title: 'Site Metadata',
    type: 'object',
    hidden: false,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the page or content',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of the page or content',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'A list of keywords for the page or content',
        },
        {
            name: 'image',
            title: 'Featured Image',
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
        },
    ],
}

export default SiteMeta;