import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import SocialEmbed from "@/components/post/Embed/Embed";
import { urlForImage } from "@/sanity/image";

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={urlForImage(value)}
      alt={value.alt || "Image"}
      loading="lazy"
      className="object-cover"
      sizes="(max-width: 800px) 100vw, 800px"
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
