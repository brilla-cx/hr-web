import Container from "@/components/container";
import PostList from "@/components/postlist";
import Hero from "@/components/hero";
import { H2, H3 } from "@/components/ui";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div className="bg-blue">
        <Container large>
          <Hero />
        </Container>
      </div>
      <div className="bg-dark-blue">
        <Container large>
          {featuredPost.length > 4 && (
            <>
              <div className="flex items-center justify-center mt-10">
                <H2 className="text-white">
                  <span className="text-pink">🔥 Most</span> Popular
                </H2>
              </div>
              <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
                {featuredPost.slice(1, 2).map((post) => (
                  <div className="md:col-span-2 md:row-span-2" key={post._id}>
                    <PostList
                      post={post}
                      preloadImage={true}
                      fontSize="large"
                      aspect="custom"
                      fontWeight="normal"
                    />
                  </div>
                ))}
                {featuredPost.slice(2, 6).map((post) => (
                  <PostList
                    key={post._id}
                    post={post}
                    aspect="landscape"
                    fontWeight="normal"
                    preloadImage={true}
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
          <div className="grid gap-10 mt-10 mb-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
            {posts.slice(0, 12).map((post) => (
              <PostList
                key={post._id}
                post={post}
                fontWeight="normal"
                aspect="square"
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
