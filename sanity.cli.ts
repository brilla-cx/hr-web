import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity/config";

export default defineCliConfig({
  api: {
    projectId: "smx99abf",
    dataset: "production",
  },
});
