import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortableText } from "@/components/blog/portabletext";
import Container from "@/components/container";
import { H1, H3, Prose } from "@/components/ui";
import Label from "@/components/ui/label";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";
import category from "@/sanity/schemas/category-schema";

export default function Tool(props) {
  const { data } = props;

  if (!data?.slug) {
    notFound();
  }

  return (
    <div className="relative isolate bg-gradient-to-r from-midnight via-indigo-950 to-pink-950 py-10">
      <Container
        large
        className="absolute inset-0 -z-10 border-l border-r border-neutral-200 border-opacity-10"
      />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-center">
          <p className="inline-block text-xs font-semibold uppercase tracking-wider text-gray-400">
            {data?.category?.name}
          </p>

          <div className="mt-3">
            <H3
              as="h1"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {" "}
              Hey Rebekah x {data.name}
            </H3>
            <p className="mt-3 text-white">{data.shortDescription}</p>
          </div>

          {data?.hrUse && (
            <div className="mt-6">
              <h6 className="text-xl font-bold tracking-tight text-white ">
                What we use it for:
              </h6>
              <div className="prose prose-invert mt-2 leading-snug text-gray-300">
                <PortableText value={data.hrUse} />
              </div>
            </div>
          )}

          <div className="mt-6">
            <Link
              href={"#"}
              className="text-whitefont-medium flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Visit {data.name}
            </Link>
          </div>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:self-center">
          <MainImage image={data.image} color={data.category.color} />
        </div>
      </div>
    </div>
  );
}

const MainImage = ({ image, color }) => {
  if (!image) return null;

  const colors = {
    cyan: "bg-cyan-200",
    sky: "bg-sky-200",
    blue: "bg-blue-200",
    indigo: "bg-indigo-200",
    violet: "bg-violet-200",
    purple: "bg-purple-200",
    fuchsia: "bg-fuchsia-200",
    pink: "bg-pink-200",
    gray: "bg-gray-200",
  };

  // const bgColor = colors[color] || "bg-white";
  const bgColor = "bg-white";

  return (
    <div
      className={cx(
        "flex  aspect-video items-center justify-center rounded-lg p-5",
        bgColor
      )}>
      <Image
        {...urlForImage(image)}
        {...(image.blurDataURL && {
          placeholder: "blur",
          blurDataURL: image.blurDataURL,
        })}
        alt={
          image?.imageAltText ||
          "Default thumbnail for tool because it's missing. We're sorry about that."
        }
      />
    </div>
  );
};
