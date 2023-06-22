import { defineArrayMember, defineField, defineType } from "sanity";

export const keyword = defineType({
  name: "keyword",
  title: "Keyword",
  type: "document",
  fields: [
    defineField({
      name: "keyword",
      title: "Keyword",
      type: "string",
    }),
    defineField({
      name: "synonyms",
      title: "Synonyms",
      type: "array",
      of: [
        defineArrayMember({
          name: "synonym",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "antonyms",
      title: "Antonyms",
      type: "array",
      of: [
        defineArrayMember({
          name: "antonym",
          type: "string",
        }),
      ],
    }),
  ],
});
