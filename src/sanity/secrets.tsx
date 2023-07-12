import { SettingsView, useSecrets } from "@sanity/studio-secrets";
import { useEffect, useState } from "react";

const namespace = "heyrebekah";

export type SecretType = {
  secrets: {
    GIPHY_API_KEY: string;
    ITERABLE_TOKEN: string;
    OPENAI_API_KEY: string;
  };
};

const pluginConfigKeys = [
  {
    key: "GIPHY_API_KEY",
    title: "GIPHY_API_KEY",
  },
  {
    key: "OPENAI_API_KEY",
    title: "OPENAI_API_KEY",
  },
  {
    key: "ITERABLE_TOKEN",
    title: "ITERABLE_TOKEN",
  },
];

export interface ISecrets {
  keys: string;
}

export const Secret = () => {
  const { secrets } = useSecrets(namespace);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    if (!secrets) {
      setShowSettings(true);
    }
  }, [secrets]);

  if (!showSettings) {
    return null;
  }
  return (
    <SettingsView
      title={"SECRETS"}
      namespace={namespace}
      keys={pluginConfigKeys}
      onClose={() => {
        setShowSettings(false);
      }}
    />
  );
};
