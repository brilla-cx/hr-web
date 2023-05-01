"use client";

import {
  TwitterEmbed,
  InstagramEmbed,
  TikTokEmbed,
} from "react-social-media-embed";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";
import { cx } from "@/lib/utils";

const SocialEmbed = ({ value }) => {
  const { url, width, height } = value;
  if (!url) {
    return <p>Missing Embed URL</p>;
  }

  if (url.includes("twitter")) {
    return (
      <div className="flex justify-center">
        <TwitterEmbed url={url} width={width || 450} />
      </div>
    );
  }

  if (url.includes("instagram")) {
    return (
      <div className="flex justify-center">
        <InstagramEmbed url={url} width={width || 450} />
      </div>
    );
  }

  if (url.includes("tiktok")) {
    return (
      <div className="flex justify-center">
        <TikTokEmbed url={url} width={width || 328} />
      </div>
    );
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
      height={height}
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

export default SocialEmbed;
