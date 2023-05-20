import { codeInput } from "@sanity/code-input";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { visionTool } from "@sanity/vision";
import { theme } from "https://themer.sanity.build/api/hues?preset=pixel-art";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { openaiImageAsset } from "sanity-plugin-asset-source-openai";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { media } from "sanity-plugin-media";

import hrLogo from "./components/studio/logo/logo";
import { SITE_URL } from "./lib/constants";
import schemas from "./sanity/schemas";
import {
  defaultDocumentNode,
  structure,
} from "./sanity/settings/deskStructure";

const giphyApiKey = process.env.GIPHY_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!giphyApiKey) {
  throw new Error(
    "Oh snap, the GIPHY_API_KEY environment variable is missing."
  );
}

if (!openaiApiKey) {
  throw new Error(
    "Ruh roh, the OPENAI_API_KEY environment variable is missing."
  );
}

const config = defineConfig({
  theme,
  projectId: "smx99abf",
  dataset: "production",
  title: "Hey Rebekah",
  apiVersion: "2023-04-17",
  basePath: "/studio",
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: "Recently published",
          query:
            '*[_type == "post" && published == true] | order(title asc) [0...10]',
        }),
        projectUsersWidget(),
      ],
    }),
    deskTool({
      structure,
      defaultDocumentNode,
    }),

    scheduledPublishing(), // Required for scheduled publishing to work
    media(), // Required for media library to work
    visionTool(), // For Development Purposes
    unsplashImageAsset(), // Add Unsplash as an asset source
    codeInput(), // Add code input for code blocks with the Content editor
    giphyAssetSourcePlugin({
      apiKey: giphyApiKey,
    }), // Add Giphy as an asset source for images within the Content editor
    openaiImageAsset({
      API_KEY: openaiApiKey,
    }), // Add OpenAI as an asset source for images within the Content editor
  ],
  studio: {
    components: {
      logo: hrLogo, // Custom logo for Hey Rebekah Studio
    },
  },
  schema: { types: schemas },
  document: {
    // prev is the result from previous plugins and can be composed
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      const { getClient, document } = context;
      const doctype = document._type === "post" ? "gists" : document._type;

      // console.log(getClient);
      const client = getClient({ apiVersion: "2023-05-19" });

      if (document._type === "post") {
        // you can now use async/await 🎉
        const slug = await client.fetch(
          `*[_type == 'post' && (_id == $postId || _id == $draftId)][0].slug.current`,
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
