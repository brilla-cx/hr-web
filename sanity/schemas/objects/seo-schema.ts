// /schema/seo-schema.js
const seo = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    options: { collapsible: true, collapsed: false },
    fields: [
        {
            name: 'title',
            title: 'SEO Title',
            type: 'string',
            description: 'Overrides the gist, post, or document title.',
        },
        {
            name: 'description',
            title: 'SEO Description',
            type: 'string',
            description: 'Overrides the TLDR, summary, or document description.',
        },
        {
            name: 'image',
            title: 'SEO Image',
            type: 'image',
            description: 'You probably don\'t need to change this Rebekah.',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'string',
            description: 'Kristen, this feature\'s for you.',
        },
        {
            name: 'synonyms',
            title: 'Synonyms',
            type: 'string',
            description: 'Ambreen is [beautiful], hot, gorgeous, dazzling... You get it.',
        },
    ],
};

export default seo;
