import { codeInput } from "@sanity/code-input";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";

import hrLogo from "./src/components/studio/logo/logo";
import { SITE_URL } from "./src/lib/constants";
import { SendToIterable } from "./src/sanity/actions";
import { openaiImageAsset } from "./src/sanity/OpenAiPlugin";
import PublishAndRedirect from "./src/sanity/PublishAndRedirect";
import schemas from "./src/sanity/schemas";
import {
  defaultDocumentNode,
  structure,
} from "./src/sanity/settings/deskStructure";

const config = defineConfig({
  projectId: "smx99abf",
  dataset: "production",
  title: "Hey Rebekah",
  apiVersion: "2023-04-17",
  basePath: "/studio",

  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    scheduledPublishing(),
    media(),
    visionTool(),
    unsplashImageAsset(),
    codeInput(),
    openaiImageAsset(),
  ],
  studio: {
    components: {
      logo: hrLogo,
    },
  },
  schema: { types: schemas },
  document: {
    actions: (prev, context) => {
      return context.schemaType === "post"
        ? [PublishAndRedirect, ...prev, SendToIterable]
        : [PublishAndRedirect, ...prev];
    },
    // prev is the result from previous plugins and can be composed
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      const { getClient, document } = context;
      const doctype = document._type === "post" ? "gists" : document._type;

      const client = getClient({ apiVersion: "2023-05-19" });

      if (document._type === "post") {
        const slug = await client.fetch(
          `*[_type == 'post' && (_id == $postId || _id == $draftId)][0].slug.current`,
          { postId: document._id, draftId: `drafts.${document._id}` },
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
