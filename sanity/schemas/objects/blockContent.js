import IframePreview from "../previews/iframe";
// import TablePreview from "./previews/table";
import { Stack, Text } from "@sanity/ui";
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    // {
    //   type: "code",
    // },
    {
      type: "object",
      name: "embed",
      title: "Embed",
      description: "Embed Social Media Posts, Youtube & Tiktok Videos",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL",
          description: `Enter the URL to Embed. See examples below`,
        },
        {
          name: "examples",
          title: "URL Examples",
          type: "string",
          components: {
            input: () => (
              <Stack space={3}>
                <Text size={1} muted>
                  ・ https://www.youtube.com/watch?v=uYLk6AaSwDc
                </Text>
                <Text size={1} muted>
                  ・ https://youtu.be/uYLk6AaSwDc
                </Text>
                <Text size={1} muted>
                  ・ https://www.instagram.com/p/CrgC3Fat9pn/
                </Text>
                <Text size={1} muted>
                  ・
                  https://www.tiktok.com/@realcodiesanchez/video/7224611583027301678
                </Text>
                <Text size={1} muted>
                  ・ https://twitter.com/SpaceX/status/1650165156729569280
                </Text>
                <Text size={1} muted>
                  ・ https://open.spotify.com/embed/track/6zTbtySCRStJOv5xA4XvRE
                </Text>
              </Stack>
            ),
          },
        },
        {
          name: "width",
          type: "number",
          description:
            "Optional. Enter custom width or leave it blank for auto.",
        },
        {
          name: "height",
          type: "number",
          description:
            "Optional. Enter custom height or leave it blank for auto.",
        },
      ],
      components: {
        preview: IframePreview,
      },
      preview: {
        select: { url: "url", height: "height" },
      },
    },
    // {
    //   name: "tables",
    //   title: "Table",
    //   type: "object",
    //   fields: [
    //     {
    //       name: "table",
    //       title: "Add Table",
    //       description:
    //         "The first row will be treated as the header. If you want to skip, just leave the first row empty.",
    //       type: "table"
    //     }
    //   ],
    //   components: {
    //     preview: TablePreview
    //   },
    //   preview: {
    //     select: { table: "table" }
    //   }
    // }
  ],
};
