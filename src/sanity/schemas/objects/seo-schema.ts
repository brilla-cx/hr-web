// /schema/seo-schema.js
const seo = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'keywords',
            title: 'Keyword',
            type: 'string',
            description: 'Define a single keyword/phrase for the document. e.g. beautiful',
        },
        {
            name: 'synonyms',
            title: 'Synonyms',
            type: 'string',
            description: 'Add related keywords here. Ambreen is [beautiful], "hot, gorgeous, dazzling"',
        },
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Add an SEO Title that uses the keyword in it.',
            options: { spellCheck: true },
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'string',
            description: 'Add an SEO optimized description using the keyword/phrase.',
            options: { spellCheck: true },
        },
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
            description: 'You probably don\'t need to change this Rebekah.',
            fields: [
                {
                    name: "imageAltText",
                    title: "Image Alt Text",
                    description: "Enter the alternative text for the image per A11y.",
                    type: "string",
                    validation: (Rule) =>
                        Rule.custom((value, context) => {
                            const { parent } = context as any

                            // Alt text only required if an image is set in the parent
                            if (!parent?.asset) {
                                return true
                            }

                            return value
                                ? true
                                : 'Alternative text is helpful for accessibility and SEO'
                        }),
                    hidden: ({ parent }) => !parent?.asset,
                },
            ],
            options: {
                hotspot: true,
            },

        },
    ],
};

export default seo;
