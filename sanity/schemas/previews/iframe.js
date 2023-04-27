import React from "react";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";
import {
  TwitterEmbed,
  InstagramEmbed,
  TikTokEmbed,
} from "react-social-media-embed";

const IframePreview = ({ url, width, height }) => {
  if (!url) {
    return <p>Missing Embed URL</p>;
  }

  if (url.includes("twitter")) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TwitterEmbed url={url} width={width || 520} />
      </div>
    );
  }

  if (url.includes("instagram")) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed url={url} width={width || 520} />
      </div>
    );
  }

  if (url.includes("tiktok")) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TikTokEmbed url={url} width={width || 328} />
      </div>
    );
  }

  // https://platform.twitter.com/embed/Tweet.html?id=463440424141459456
  // https://www.instagram.com/p/CrgC3Fat9pn/embed/
  // https://www.tiktok.com/embed/v2/6947681488750038277

  const { id, service } = getVideoId(url);

  const isYoutubeVideo = id && service === "youtube";

  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url;

  return (
    <Iframe
      url={finalURL}
      width={width || "100%"}
      height={height || "350"}
      styles={{
        ...(!height && { aspectRatio: "16 / 9" }),
      }}
      display="block"
      position="relative"
      frameBorder="0"
      allowfullscreen
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
    />
  );
};

export default IframePreview;
