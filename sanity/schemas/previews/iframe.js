import React from "react";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";

const IframePreview = ({ url, height }) => {
  if (!url) {
    return <p>Missing Embed URL</p>;
  }

  if (url.includes("twitter") || url.includes("instagram")) {
    return (
      <div>
        <p>Embed: {url}</p>
        <small>This embed will render in the frontend only. </small> <br />
        <small>&nbsp;</small>
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
