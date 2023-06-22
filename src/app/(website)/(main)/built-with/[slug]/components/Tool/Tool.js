import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container/Container";
import { PortableText } from "@/components/shared/post/PortableText/PortableText";
import { GlowingButton, H3, H6, Lead } from "@/components/ui";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";

export default function Tool(props) {
  const { data } = props;

  if (!data?.slug) {
    notFound();
  }

  return (
    <div className="relative isolate bg-gradient-to-r from-midnight via-indigo-950 to-pink-950 py-10 ">
      <Container
        large
        className="absolute inset-0 -z-10 border-l border-r border-neutral-200/10"
      />

      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-14 lg:px-24">
        <div className="lg:col-span-2 lg:self-center">
          <p className="inline-block text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link
              href="/built-with"
              className="text-gray-400 hover:text-gray-200">
              Built With
            </Link>
            {" > "}
            {data?.category?.name}
          </p>

          <div className="mt-6">
            <H3 as="h1" className="text-gray-200">
              {" "}
              Hey Rebekah ❤️ <br /> {data.name}
            </H3>
            <Lead className="mt-3 text-gray-300">{data.shortDescription}</Lead>
          </div>

          {data?.hrUse && (
            <div className="mt-10">
              <H6
                as="h2"
                className="text-xl font-bold tracking-tight text-gray-200 ">
                What we use it for:
              </H6>
              <div className="no-effects prose prose-invert mt-4 leading-snug text-gray-300">
                <PortableText value={data.hrUse} />
              </div>
            </div>
          )}
          <div className="mt-12 lg:max-w-xs">
            <div className="mt-6">
              <GlowingButton
                href={data.toolUrl || "#"}
                target="_blank"
                aria-label="Go to sign-up form">
                Visit {data.name}
              </GlowingButton>
            </div>{" "}
          </div>
        </div>

        {/* Product image */}
        <div className="mt-12 lg:self-center">
          <MainImage image={data.image} color={data.category.color} />
        </div>
      </div>
    </div>
  );
}

const MainImage = ({ image, color }) => {
  if (!image) return null;

  // const bgColor = colors[color] || "bg-white";
  const bgColor = "bg-white";

  return (
    <div
      className={cx(
        "flex  aspect-video items-center justify-center rounded p-5",
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
