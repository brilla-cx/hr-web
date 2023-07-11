/* eslint-disable camelcase */
/* eslint-disable no-negated-condition */
import { useToast } from "@sanity/ui";
import { useEffect, useState } from "react";
import { SanityDocument, useDocumentOperation } from "sanity";
import { DocumentActionProps, useClient, useValidationStatus } from "sanity";

export function resolveProductionPath(
  document: SanityDocument | null
): string | null {
  const doc = document;
  switch (doc?._type) {
    case "post":
      return `/gists/${(doc.slug as { current: string })?.current}`;
    case "book":
      return `/books/${(doc.slug as { current: string })?.current}`;
    case "tool":
      return `/built-with/${(doc.slug as { current: string })?.current}`;
    case "author":
      return `/author/${(doc.slug as { current: string })?.current}`;
    case "category":
      return `/category/${(doc.slug as { current: string })?.current}`;
    case "legal":
      return `/${(doc.slug as { current: string })?.current}`;
    default:
      break;
  }
  return null;
}

export default function PublishAndRedirect(props: DocumentActionProps) {
  const client = useClient({ apiVersion: "2021-06-07" });
  const toast = useToast();
  const { publish } = useDocumentOperation(props.id, props.type);
  const validation = useValidationStatus(props.id, props.type);
  // Check if the document is valid before allowing the user to publish it.
  const isValid =
    !validation.isValidating &&
    validation.validation.filter((v) => v.level === "error").length === 0;

  const [isPublishing, setIsPublishing] = useState(false);
  const draftPath =
    (props.published || props.draft) && resolveProductionPath(props.draft);
  const publishedPath = resolveProductionPath(props.published);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [isPublishing, props.draft]);

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
