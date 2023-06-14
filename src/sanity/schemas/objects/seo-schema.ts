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
            validation: Rule => Rule.required().error("Please add a keyword/phrase."),
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
            validation: Rule => Rule.required().max(58).error("Please add an SEO optimized Title that's max 58 characters."),
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'string',
            description: 'Add an SEO optimized description using the keyword/phrase.',
            options: { spellCheck: true },
            validation: Rule => Rule.required().max(158).error("Please add an SEO optimized description that's max 158 characters."),
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
