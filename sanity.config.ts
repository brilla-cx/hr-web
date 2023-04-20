import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media } from "sanity-plugin-media";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { openaiImageAsset } from "sanity-plugin-asset-source-openai";
import { codeInput } from "@sanity/code-input";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import schemas from "./sanity/schemas";
import hrLogo from "./components/studio/logo/logo";

const config = defineConfig({
  projectId: 'smx99abf',
  dataset: 'production',
  title: 'Hey Rebekah',
  apiVersion: '2023-04-17',
  basePath: '/studio',
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Recently published',
          query: '*[_type == "gists" && published == true] | order(title asc) [0...10]'
        }),
        projectUsersWidget(),
      ],
    }),
    deskTool(), // Required for Sanity Studio to work
    scheduledPublishing(), // Required for scheduled publishing to work
    media(), // Required for media library to work
    unsplashImageAsset(), // Add Unsplash as an asset source
    codeInput(), // Add code input for code blocks with the Content editor
    giphyAssetSourcePlugin({
      apiKey: "4Gi7oe0bE9zeStPSMpaqb98SJybKbKTz"
    }), // Add Giphy as an asset source for images within the Content editor
    openaiImageAsset({
      API_KEY: "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"
    }), // Add OpenAI as an asset source for images within the Content editor
  ],
  studio: {
    components: {
      logo: hrLogo, // Custom logo for Hey Rebekah Studio
    }
  },
  schema: { types: schemas }
})

export default config;
