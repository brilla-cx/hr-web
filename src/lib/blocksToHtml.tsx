import blocksToHtml from "@sanity/block-content-to-html";

import { dataset, projectId } from "@/sanity/config";

const serializers = {
  types: {
    // todo
    embed: (props) => {},
  },
};

export function blocksToHtmlString(blocks: any[]) {
  const el = blocksToHtml({
    blocks: blocks,
    projectId: projectId,
    dataset: dataset,
    serializers: serializers,
  });
  return el;
}
