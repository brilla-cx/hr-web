import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";

import SocialEmbed from "@/components/shared/post/SocialEmbed/SocialEmbed";
import { client } from "@/sanity/client";

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  const imageProps = useNextSanityImage(client, value);
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={imageProps.src}
      alt={value.alt || "Image"}
      loading="lazy"
      className="object-cover"
      sizes="(max-width: 800px) 100vw, 800px"
      width={100}
      height={100}
      style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
    />
  );
};

const EmbedComponent = ({ value }) => {
  return <SocialEmbed value={value} />;
};

const components = {
  types: {
    image: ImageComponent,
    embed: EmbedComponent,
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => (
      <span className="font-bold text-blue-500">{props.children}</span>
    ),
    link: ({ children, value }) => {
      const rel = value.href.startsWith("/") ? undefined : "noopener";
      const target = value.href.startsWith("/") ? undefined : "_blank";
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return <Link href={`/docs/${value.slug.current}`}>{children}</Link>;
    },
  },
};
// Set up Portable Text serialization
export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);
