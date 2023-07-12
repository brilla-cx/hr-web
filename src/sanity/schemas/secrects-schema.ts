import { ImKey } from "react-icons/im";

import { Secret } from "../secrets";

const secrectsKeys = {
  type: "document",
  name: "secretsKeys",
  title: "SECRETS",
  icon: ImKey,
  fields: [
    {
      name: "secret",
      title: "KEY",
      type: "string",
      components: {
        field: Secret,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "secrets settings",
      };
    },
  },
};

export default secrectsKeys;
