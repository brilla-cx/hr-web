/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/metadata-schema.ts

import LdJsonMeta from "./objects/ldjson-meta";
import OgMeta from "./objects/og-meta";
import PinterestMeta from "./objects/pinterest-meta";
import SiteMeta from "./objects/site-meta";
import TwitterMeta from "./objects/twitter-meta";

const metadata = {
    name: 'metadata',
    title: 'Metadata',
    type: 'document',
    hidden: false,
    fields: [
        ...SiteMeta.fields,
        ...OgMeta.fields,
        ...TwitterMeta.fields,
        ...PinterestMeta.fields,
        ...LdJsonMeta.fields,
    ],
};

export default metadata;
