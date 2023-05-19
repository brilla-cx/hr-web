/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/objects/ldjson-meta.ts

const jsonLdSchema = {
    name: 'jsonLd',
    title: 'JSON-LD Structured Data',
    type: 'object',
    hidden: false,
    fields: [
        {
            name: '@context',
            title: 'Context',
            type: 'url',
            default: 'https://schema.org',
        },
        {
            name: '@type',
            title: 'Type',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'alternateName',
            title: 'Alternate Name',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
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
                {
                    name: 'logoUrl',
                    title: 'URL to Logo',
                    type: 'string',
                },
            ],
        },
        {
            name: 'sameAs',
            title: 'Same As',
            type: 'array',
            of: [{ type: 'url' }],
            description: 'Other URLs that represent the same thing',
        },
    ],
};

export default jsonLdSchema;