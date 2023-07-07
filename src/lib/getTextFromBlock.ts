export function getTextFromBlocks(blocks: { children: any[] }[]) {
  if (!blocks || blocks.length === 0) {
    return "";
  }
  return blocks
    .map((item: { children: any[] }) =>
      item.children.map((child) => child.text).join("")
    )
    .join("");
}
