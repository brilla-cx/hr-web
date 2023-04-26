import Image from "next/image";
import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlForImage } from "@/sanity/image";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";
import { cx } from "@/lib/utils";

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

const IframePreview = ({ value }) => {
  const { url, height } = value;
  if (!url) {
    return <p>Missing Embed URL</p>;
  }
  const { id, service } = getVideoId(url);

  const isYoutubeVideo = id && service === "youtube";

  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url;

  return (
    <Iframe
      url={finalURL}
      width="100%"
      height={height || "350"}
      className={cx(!height && "aspect-video", "rounded-md")}
      display="block"
      position="relative"
      frameBorder="0"
      allowfullscreen
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
    embed: IframePreview,
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => (
      <span className="font-bold text-blue-500">{props.children}</span>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noopener" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
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
