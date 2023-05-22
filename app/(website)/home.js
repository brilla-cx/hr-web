import Link from "next/link";

import Container from "@/components/container";
import Hero from "@/components/hero";
import PostAlt from "@/components/postalt";
import { H2 } from "@/components/ui";
import { lightHoverStyles } from "@/lib/hover";
import { cx } from "@/lib/utils";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div className="bg-midnight border-t border-b border-neutral-200 border-opacity-10">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          <Hero />
        </Container>
      </div>
      <div className="bg-midnight">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          {featuredPost.length > 4 && (
            <>
              <div className="flex items-center justify-center mt-10">
                <H2 className="text-gray-200">
                  <span className="text-pink">🔥 Most</span> Popular
                </H2>
              </div>
              <div className="px-4 sm:px-8 lg:px-16 grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
                {featuredPost.slice(1, 2).map((post) => (
                  <div className="md:col-span-2 md:row-span-2" key={post._id}>
                    <PostAlt
                      post={post}
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
                    aspect="landscape"
                    fontWeight="normal"
                    noDate
                    preloadImage
                  />
                ))}
              </div>
            </>
          )}

          <div className="flex items-center justify-center mt-4">
            <H2 className="text-gray-200">
              🫳🏼 Just <span className="text-pink">Dropped</span>
            </H2>
          </div>
          <div className="px-4 sm:px-8 lg:px-16 grid gap-10 mt-10 mb-10 lg:gap-10 md:grid-cols-3 xl:grid-cols-3 ">
            {posts.slice(0, 12).map((post) => (
              <PostAlt
                key={post._id}
                post={post}
                fontWeight="normal"
                aspect="landscape"
              />
            ))}
          </div>
          <div className="mb-7 mt-8 flex justify-center">
            <Link
              href="/gists"
              className={cx(
                "mt-4 rounded-lg px-5 py-2 uppercase text-med font-display font-semibold text-gray-400 hover:text-pink hover:font-bold hover:bg-gray-900",
                lightHoverStyles
              )}
              aria-label="View all posts">
              ← View all posts
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
