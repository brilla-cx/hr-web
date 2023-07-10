import { Metadata } from "next";

export function generateMetadataHelper(
  title: string,
  description: string,
  url: string
): Metadata {
  const images = "/og.png";

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      url,
    },
    twitter: {
      title,
      description,
      images,
    },
  };

  return metadata;
}
