import { defineField } from "sanity";

export default defineField({
  title: "Redirect",
  name: "redirect",
  type: "document",
  initialValue: {
    permanent: true,
  },
  fields: [
    {
      title: "from",
      name: "source",
      type: "string",
      description: "The path to redircet from",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value !== "string") {
            return "The path must be a string";
          }
          if (value === "/") {
            return "The root path cannot be redirected";
          }
          if (!value.startsWith("/")) {
            return "The path must start with a /";
          }
          return true;
        }),
    },
    {
      title: "to",
      name: "destination",
      type: "string",
      description: "The path to redirect to",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value !== "string") {
            return "The path must be a string";
          }
          if (!value.startsWith("/")) {
            return "The path must start with a /";
          }
          return true;
        }),
    },
    {
      title: "Permanent",
      name: "permanent",
      type: "boolean",
      description: "Whether the redirect is permanent or temporary",
      validation: (Rule) => Rule.required(),
    },
  ],
});
