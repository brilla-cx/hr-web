import PreviewProvider from "@/components/shared/PreviewProvider/PreviewProvider";
import { SITE_URL } from "@/lib/constants";
import { isInPreview } from "@/lib/isInPreview";
import { getToolbySlug } from "@/sanity/client";

import PostPreview from "./components/Preview/Preview";
import Tool from "./components/Tool/Tool";

export function generateStaticParams() {
  return [];
}
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const data = await getToolbySlug(params.slug);

  const title = `Hey Rebekah ❤️ ${data.seoTitle || data.name}`;
  const description = `We’ll show you how we use ${
    data.seoTitle || data.name
  } and hook you up with our discount. Not an affiliate`;

  const dataUrl = `${SITE_URL}/built-with/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: dataUrl,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function PostPage({ params }) {
  const data = await getToolbySlug(params.slug);

  if (isInPreview) {
    return (
      <PreviewProvider token={isInPreview.token}>
        <PostPreview data={data} slug={params.slug} />
      </PreviewProvider>
    );
  }

  return <Tool data={data} />;
}
