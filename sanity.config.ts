import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { media } from "sanity-plugin-media";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { codeInput } from "@sanity/code-input";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { openaiImageAsset } from "sanity-plugin-asset-source-openai";

const config = defineConfig({
  projectId: 'smx99abf',
  dataset: 'production',
  title: 'Hey Rebekah',
  apiVersion: '2023-04-17',
  basePath: '/studio',
  plugins: [
    deskTool(),
    scheduledPublishing(),
    media(),
    unsplashImageAsset(),
    codeInput(),
    giphyAssetSourcePlugin({
      apiKey: "4Gi7oe0bE9zeStPSMpaqb98SJybKbKTz"
    }),
    openaiImageAsset({
      API_KEY: "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"
    }),
  ],
  schema: { types: schemas }
})

export default config;
