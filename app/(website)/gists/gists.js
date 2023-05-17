import { Suspense } from "react";

import Loading from "@/components/blog/loading";
import Container from "@/components/container";

import PaginatedPosts from "./posts";

export default function Gists() {
  return (
    <div className="bg-dark-blue">
      <Container
        large
        className="border-l border-r border-light-grey border-opacity-10">
        <div className="mx-auto px-4 max-w-6xl">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-white lg:text-4xl lg:leading-snug">
            Gists
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg text-white/50">
              See all posts we have ever written.
            </p>
          </div>

          <Suspense fallback={<Loading />}>
            <PaginatedPosts />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

export const revalidate = 3600;