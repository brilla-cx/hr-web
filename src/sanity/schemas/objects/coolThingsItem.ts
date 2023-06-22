import { defineArrayMember, defineField, defineType } from "sanity";

export const coolThingItem = defineType({
  name: "coolThingItem",
  title: "Cool Thing Item",
  type: "document",
  fields: [
    defineField({
      name: "itemTitle",
      title: "Item title",
      type: "string",
    }),
    defineField({
      name: "itemImage",
      title: "Item image",
      type: "image",
    }),
    defineField({
      name: "itemContent",
      title: "Item content",
      type: "blockContent",
    }),
  ],
});
