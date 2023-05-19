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
        ...siteMeta.fields,
        ...ogMeta.fields,
        ...twitterMeta.fields,
        ...pinterestMeta.fields,
        ...ldJsonMeta.fields,
    ],
};

export default metadata;
