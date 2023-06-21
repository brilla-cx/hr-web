import PostAlt from "@/components/shared/blogs/PostAlt/PostAlt";
import { getPaginatedPosts } from "@/sanity/client";

async function CornerstoneResources() {
  const params = {
    pageIndex: 1,
    limit: 4,
  };
  const posts = await getPaginatedPosts(params);
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            From the gist
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t gap-x-8 gap-y-16 border-slate-900 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostAlt
              minimal={false}
              pathPrefix="gists"
              preloadImage
              fontSize=""
              noDate
              hideCategory={false}
              key={post._id}
              post={post}
              aspect="landscape"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CornerstoneResources;
