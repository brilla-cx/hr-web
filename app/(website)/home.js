import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function HomePage({ posts }) {
  const featuredPost = posts.filter((item) => item.featured) || null;

  return (
    <>
      <div>Hero section</div>

      <Container large>
        {featuredPost.length > 4 && (
          <>
            <div className="flex items-center justify-center mt-10">
              <h2 className="text-2xl">
                <strong>Featured</strong> Posts
              </h2>
            </div>
            <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
              {featuredPost.slice(1, 2).map((post) => (
                <div className="md:col-span-2 md:row-span-2" key={post._id}>
                  <PostList
                    post={post}
                    preloadImage={true}
                    pathPrefix="lifestyle"
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
                  pathPrefix="lifestyle"
                  fontWeight="normal"
                  preloadImage={true}
                />
              ))}
            </div>
          </>
        )}

        <div className="flex items-center justify-center mt-4">
          <h3 className="text-2xl">
            <strong>Our</strong> Latest
          </h3>
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
          {posts.map((post) => (
            <PostList
              key={post._id}
              post={post}
              fontWeight="normal"
              pathPrefix="lifestyle"
              aspect="square"
            />
          ))}
        </div>
      </Container>
    </>
  );
}
