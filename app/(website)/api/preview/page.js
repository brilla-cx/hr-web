import { PreviewSuspense } from "@/components/preview";

import Post from "./post";

export default function PagePreview() {
  return (
    <div>
      <PreviewSuspense fallback="Loading...">
        <Post />
      </PreviewSuspense>
    </div>
  );
}

//  await client.fetch(singlepostquery, { slug });
