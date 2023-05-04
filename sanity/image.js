import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/config";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source) => {
  if (!source || !source.asset) return null;
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions
    ?.split("x")
    .map((num) => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, "2000"))
    .url();

  return {
    src: url,
    width: width,
    height: height,
  };
};
