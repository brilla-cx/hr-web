import { defineCliConfig } from "sanity/cli";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import { dataset, projectId } from "./sanity/config";

export default defineCliConfig({
  api: {
    projectId: "smx99abf",
    dataset: "production",
  },
  vite: (prev) => ({
    ...prev,
    plugins: [...(prev.plugins || []), nodePolyfills()],
    define: {
      ...prev.define,
      "process.env": {},
    },
    build: {
      ...prev.build,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }),
});
