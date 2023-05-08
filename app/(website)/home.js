import Container from "@/components/container";
import Hero from "@/components/hero";
import PostList from "@/components/postlist";
import { H2 } from "@/components/ui";

import PostAlt from "../../components/postalt";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div className="bg-dark-blue border-t border-b border-light-grey border-opacity-10">
        <Container
          large
          className="border-l border-r border-light-grey border-opacity-10">
          <Hero />
        </Container>
      </div>
      <div className="bg-dark-blue">
        <Container
          large
          className="border-l border-r border-light-grey border-opacity-10">
          {featuredPost.length > 4 && (
            <>
              <div className="flex items-center justify-center mt-10">
                <H2 className="text-white">
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
            <H2 className="text-white">
              🫳🏼 Just <span className="text-pink">Dropped</span>
            </H2>
          </div>
          <div className="px-4 sm:px-8 lg:px-16 grid gap-10 mt-10 mb-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
            {posts.slice(0, 12).map((post) => (
              <PostAlt
                key={post._id}
                post={post}
                fontWeight="normal"
                aspect="landscape"
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
