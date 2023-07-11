"use client";

import { createClient, SanityClient } from "next-sanity";

export function getClient({
  preview,
}: {
  preview?: { token: string };
}): SanityClient {
  const client = createClient({
    projectId: "smx99abf",
    dataset: "production",
    apiVersion: "2023-06-20",
    useCdn: true,
    perspective: "previewDrafts",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
