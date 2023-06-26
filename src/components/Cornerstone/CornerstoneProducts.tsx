import Image from "next/image";
import Link from "next/link";

import { H3 } from "@/components/ui";
import hoverStyles from "@/lib/hover";
import { cx } from "@/lib/utils";
import { urlForImage } from "@/sanity/image";
import { ProductItem, ProductsSection } from "@/types/types";

import { PortableText } from "../shared/post/PortableText/PortableText";

function ProductCard(props: ProductItem) {
  return (
    <div className="flex flex-col max-w-3xl p-4 border rounded border-gray-200/10 bg-slate-900">
      <div className="flex object-contain h-40 mx-auto mb-4">
        <Image
          src={urlForImage(props.image)?.src}
          alt={props.image.imageAltText}
          width={100}
          height={100}
          className="object-cover w-full h-40"
        />
      </div>
      <dt className="mb-4 text-3xl font-semibold leading-7 text-center text-gray-200 gap-x-3">
        {props.heading}
      </dt>
      <dd className="text-base leading-7 text-gray-400">
        <PortableText value={props.content} />
      </dd>
      {/* TODO: update to pillar page slug for location link href */}
      <Link
        href={props.heading.toLowerCase().replace(" ", "")}
        className={cx(
          "mt-8 max-w-max !text-left text-sm font-semibold text-gray-200 hover:cursor-pointer",
          hoverStyles
        )}>
        read more about {props.heading}
      </Link>
    </div>
  );
}

function CornerstoneProducts(props: ProductsSection) {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-16 lg:py-26 sm:py-24 lg:px-16">
      <div className="max-w-2xl mx-auto lg:text-center">
        <H3
          as="h2"
          className="mt-2 font-bold tracking-tight text-gray-200 sm:text-6xl">
          {props?.customizeContent
            ? props?.customHeading
            : `What does ${props.keyword.keyword} make?`}
        </H3>
        <article className="mt-6 text-lg leading-8 text-gray-400">
          <PortableText value={props.customContent} />
        </article>
      </div>
      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
        <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {props?.products &&
            props?.products?.map((item) => (
              <ProductCard {...item} key={item._key} />
            ))}
        </dl>
      </div>
    </div>
  );
}

export default CornerstoneProducts;
