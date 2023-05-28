import { codeInput } from "@sanity/code-input";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { openaiImageAsset } from "sanity-plugin-asset-source-openai";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";

import hrLogo from "./components/studio/logo/logo";
import { SITE_URL } from "./lib/constants";
import schemas from "./sanity/schemas";
import {
  defaultDocumentNode,
  structure,
} from "./sanity/settings/deskStructure";


function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} missing!`);
  }
  return value;
}

const giphyApiKey = getEnvVar('SANITY_STUDIO_GIPHY_API_KEY');
const openaiApiKey = getEnvVar('SANITY_STUDIO_OPENAI_API_KEY');


const config = defineConfig({
  projectId: "smx99abf",
  dataset: "production",
  title: "Hey Rebekah",
  apiVersion: "2023-04-17",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),

    scheduledPublishing(),
    media(),
    visionTool(),
    unsplashImageAsset(),
    codeInput(),
    giphyAssetSourcePlugin({
      apiKey: giphyApiKey,
    }),
    openaiImageAsset({
      API_KEY: openaiApiKey,
    }),
  ],
  studio: {
    components: {
      logo: hrLogo,
    },
  },
  schema: { types: schemas },
  document: {
    productionUrl: async (prev, context) => {
      const { getClient, document } = context;
      const doctype = document._type === "post" ? "gists" : document._type;

      // console.log(getClient);
      const client = getClient({ apiVersion: "2023-05-19" });

      if (document._type === "post" || document._type === "socialBlog") {
        const slug = await client.fetch(
          `*[_type == '${document._type}' && (_id == $postId || _id == $draftId)][0].slug.current`,
          { postId: document._id, draftId: `drafts.${document._id}` }
        );

        const params = new URLSearchParams();
        params.set("slug", slug);
        params.set("type", doctype);

        return `${SITE_URL}/api/draft?${params}`;
      }

      return prev;
    },
  },
});

export default config;
