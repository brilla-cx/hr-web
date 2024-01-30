/* eslint-disable camelcase */
/* eslint-disable no-negated-condition */
import { useSecrets } from "@sanity/studio-secrets";
import { useToast } from "@sanity/ui";
import React from "react";
import { BsSend } from "react-icons/bs";
import { DocumentActionComponent, useDocumentOperation } from "sanity";

import { ValueType } from "@/types/types";

import { getTextFromBlocks } from "../../src/lib/getTextFromBlock";
// Custom function that resolves the path from your document.
// import { resolveProductionPath } from "../resolveProductionUrl";
import { postByIdQuery } from "./client";

/**
 * iterable action
 */
export const SendToIterable: DocumentActionComponent = ({ id, type }) => {
  const toast = useToast();
  const { secrets } = useSecrets("heyrebekah");
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);

  const { publish } = useDocumentOperation(id, type);

  const handleSend = React.useCallback(async () => {
    setIsLoading(true);

    try {
      toast.push({
        status: "info",
        title: "processing post...",
      });
      const sanityRes = await postByIdQuery(id);
      const value = sanityRes as ValueType;

      const contentText = getTextFromBlocks(value.content);
      const tldrText = getTextFromBlocks(value.tldr);

      const payload = {
        itemId: value._id,
        catalogName: "sanity-posts",
        value: {
          sanity_id: value._id,
          sanity_postTitle: value.name,
          sanity_category: value.category,
          sanity_publishedAt: value.publishedAt,
          sanity_featured: value.featured === null ? false : value.featured,
          sanity_image: {
            sanity_url: value.image.asset.url,
            sanity_imageAltText: value.image.imageAltText,
            sanity_caption: value.image.caption,
          },
          sanity_slug: value.slug.current,
          sanity_tldr: tldrText,
          sanity_author: {
            sanity_name: value.author.name,
            sanity_image: value.author.image.asset.url,
            sanity_imageAltText: value.author.image.imageAltText,
            sanity_slug: value.author.slug.current,
            sanity_linkedIn: value.author.linkedin,
          },
          sanity_content: contentText,
          sanity_url: `https://heyrebekah.com/${value.category[0].name}/${value.slug.current}`,
        },
      };

      const response = await fetch(
        `https://api.iterable.com/api/catalogs/sanity-posts/items/${value._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "api-key": (secrets as { ITERABLE_TOKEN: string }).ITERABLE_TOKEN,
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Fail to send to iterable");
      }

      toast.push({
        status: "success",
        title: "Sent to iterable",
      });
    } catch (error: any) {
      toast.push({
        status: "error",
        title: error.message || "Failed to send to iterable",
      });
    } finally {
      setIsLoading(false);
    }
  }, [id, secrets, toast]);

  const isDocumentPublished = publish.disabled === false;

  return {
    label: "Send To Iterable",
    icon: BsSend,
    onHandle: handleSend,
    title: isDocumentPublished ? "This post is not published" : "",
    disabled: isDocumentPublished,
  };
};
