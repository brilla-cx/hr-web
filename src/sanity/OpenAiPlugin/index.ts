import { definePlugin } from "sanity";

import { getPlugin } from "./AssetSource";

export const openaiImageAsset = definePlugin(() => {
  return {
    name: "Open AI Image",
    form: {
      image: {
        assetSources: (prev) => {
          const OpenAIImagePlugin = getPlugin();
          return [...prev, OpenAIImagePlugin];
        },
      },
    },
  };
});
