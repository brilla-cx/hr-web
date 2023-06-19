/* eslint-disable camelcase */
/* eslint-disable no-negated-condition */
import { useToast } from "@sanity/ui";
import React from "react";
import { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { DocumentActionComponent, useDocumentOperation } from "sanity";
import { DocumentActionProps, useClient, useValidationStatus } from "sanity";

import { ValueType } from "@/types/types";

// Custom function that resolves the path from your document.
// import { resolveProductionPath } from "../resolveProductionUrl";
import { postByIdQuery } from "./client";

function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} missing!`);
  }
  return value;
}

const iterableKey = getEnvVar("SANITY_STUDIO_ITERABLE_TOKEN");

/**
 * iterable action
 */
export const SendToIterable: DocumentActionComponent = ({ id, type }) => {
  const toast = useToast();
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

      // todo right better typing for blocksContent
      const getTextFromBlocks = (blocks: { children: any[] }[]) => {
        if (!blocks || blocks.length === 0) {
          return "";
        }

        return blocks
          .map((item: { children: any[] }) =>
            item.children.map((child) => child.text).join("")
          )
          .join("");
      };

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
            "api-key": iterableKey,
          },
          body: JSON.stringify(payload),
        }
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
  }, [id, toast]);

  const isDocumentPublished = publish.disabled === false;

  return {
    label: "Send To Iterable",
    icon: BsSend,
    onHandle: handleSend,
    title: isDocumentPublished ? "This post is not published" : "",
    disabled: isDocumentPublished,
  };
};

/**
 * publish and redirect action
 */
export default function PublishAndRedirect(props: DocumentActionProps) {
  const client = useClient();
  const toast = useToast();
  const { publish } = useDocumentOperation(props.id, props.type);
  const validation = useValidationStatus(props.id, props.type);
  // Check if the document is valid before allowing the user to publish it.
  const isValid =
    !validation.isValidating &&
    validation.validation.filter((v) => v.level === "error").length === 0;

  const [isPublishing, setIsPublishing] = useState(false);
  const draftPath = resolveProductionPath(props.draft);
  const publishedPath = resolveProductionPath(props.published);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  const handlePublish = async () => {
    // This will update the button text
    setIsPublishing(true);
    // Create the redirect
    await client.create({
      _type: "redirect",
      source: publishedPath,
      destination: draftPath,
      permanent: true,
    });

    // Notify the user the redirect was created.
    toast.push({
      closable: true,
      duration: 5000,
      status: "success",
      title: `Redirect created`,
      description: `Redirect from ${publishedPath} to ${draftPath}`,
    });
    // Perform the publish
    publish.execute();
    // Signal that the action is completed
    props.onComplete();
  };
  if (publishedPath && draftPath && draftPath !== publishedPath) {
    return {
      disabled: !!publish.disabled || !isValid,
      tone: "positive",
      label: isPublishing ? "Publishing…" : "Publish & Redirect",
      onHandle: handlePublish,
    } as const;
  }

  return null;
}
