import Container from "@/components/container";
import Hero from "@/components/hero";
import PostAlt from "@/components/postalt";
import { Button, H2 } from "@/components/ui";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div className="bg-slate-950 border-t border-b border-neutral-200 border-opacity-10">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
          <Hero />
        </Container>
      </div>
      <div className="bg-slate-950">
        <Container
          large
          className="border-l border-r border-neutral-200 border-opacity-10">
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
          <div className="my-16 flex items-center justify-center">
            <Button variant="alternate" href="/gists">
              View all posts
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
