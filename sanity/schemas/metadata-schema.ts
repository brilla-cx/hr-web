/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/metadata-schema.ts

import ldJsonMeta from "./objects/ldjson-meta";
import ogMeta from "./objects/og-meta";
import pinterestMeta from "./objects/pinterest-meta";
import siteMeta from "./objects/site-meta";
import twitterMeta from "./objects/twitter-meta";

const metadata = {
    name: 'metadata',
    title: 'Metadata',
    type: 'document',
    hidden: false,
    fields: [
        {
            name: 'siteMeta',
            title: 'Site Metadata',
            type: 'object',
            fields: siteMeta.fields
        },
        {
            name: 'ogMeta',
            title: 'OG Metadata',
            type: 'object',
            fields: ogMeta.fields
        },
        {
            name: 'twitterMeta',
            title: 'Twitter Metadata',
            type: 'object',
            fields: twitterMeta.fields
        },
        {
            name: 'pinterestMeta',
            title: 'Pinterest Metadata',
            type: 'object',
            fields: pinterestMeta.fields
        },
        {
            name: 'ldJsonMeta',
            title: 'ldJson Metadata',
            type: 'object',
            fields: ldJsonMeta.fields
        }
    ],
};

export default metadata;

