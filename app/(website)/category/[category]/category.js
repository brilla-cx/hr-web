import { notFound } from "next/navigation";

import Container from "@/components/container";
import PostAlt from "@/components/postalt";
import { H2 } from "@/components/ui";

export default function Category(props) {
  const { loading, posts, category } = props;

  const slug = category?.slug?.current;

  if (!loading && !slug) {
    notFound();
  }

  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <div className="flex flex-col items-center justify-center">
          <H2 as="h1" className="mt-4 text-gray-200">
            {category.name}
          </H2>
          <div className="text-center">
            <p className="mt-2 text-lg text-white/50">
              See all posts in this category.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-16 mt-16 mb-8 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-4 ">
          {posts.map((post) => (
            <PostAlt
              key={post._id}
              post={post}
              aspect="landscape"
              hideCategory
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
