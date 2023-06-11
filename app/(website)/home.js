import { Suspense } from "react";

import ViewAllPosts from "@/components/blog/viewallposts";
import Container from "@/components/container";
import Hero from "@/components/hero";
import PostAlt from "@/components/postalt";
import { H2, H4 } from "@/components/ui";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div className="border-b border-t border-neutral-200/10 bg-midnight">
        <Container large className="border-l border-r border-neutral-200/10">
          <Hero />
        </Container>
      </div>
      <div className="bg-midnight text-gray-200">
        <Suspense fallback={<p>Herding cats...</p>}>
          <Container large className="border-l border-r border-neutral-200/10">
            {featuredPost.length > 4 && (
              <>
                <div className="mt-10 flex items-center justify-center">
                  <H4 as="h2" className="text-gray-200">
                    <span className="text-pink">🔥 Most</span> Popular
                  </H4>
                </div>
                <div className="mb-20 mt-10 grid gap-10 px-4 sm:px-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 lg:px-16 ">
                  {featuredPost.slice(1, 2).map((post) => (
                    <div className="md:col-span-2 md:row-span-2" key={post._id}>
                      <PostAlt
                        post={post}
                        isShort={post.isShort}
                        preloadImage
                        fontSize="large"
                        aspect="custom"
                        noDate
                        fontWeight="normal"
                      />
                    </div>
                  ))}
                  {featuredPost.slice(2, 6).map((post) => (
                    <PostAlt
                      key={post._id}
                      post={post}
                      isShort={post.isShort}
                      aspect="landscape"
                      fontWeight="normal"
                      noDate
                      preloadImage
                    />
                  ))}
                </div>
              </>
            )}

            <div className="mt-4 flex items-center justify-center">
              <H4 as="h2" className="text-gray-200">
                🫳🏼 Just <span className="text-pink">Dropped</span>
              </H4>
            </div>
            <div className="mb-10 mt-10 grid gap-10 px-4 sm:px-8 md:grid-cols-3 lg:gap-10 lg:px-16 xl:grid-cols-3 ">
              {posts.slice(0, 12).map((post) => (
                <PostAlt
                  key={post._id}
                  post={post}
                  isShort={post.isShort}
                  fontWeight="normal"
                  aspect="landscape"
                />
              ))}
            </div>
            <ViewAllPosts
              href="/gists"
              buttonText="View all posts"
              direction="right"
              variant="dark"
            />
          </Container>
        </Suspense>
      </div>
    </>
  );
}

export const revalidate = 3600;
