/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/tool-schema.ts
import { FaTools } from "react-icons/fa";

const tool = {
  name: "tool",
  title: "Tools",
  icon: FaTools,
  type: "document",
  groups: [
    {
      name: "toolInfo",
      title: "Tool Info",
      default: true,
    },
    {
      name: "partnerInfo",
      title: "Partner Info",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "isPartner",
      title: "Is Partner",
      description: "Is the company/maker of the tool a Hey Rebekah partner?",
      type: "boolean",
      group: "partnerInfo",
      validation: (Rule) =>
        Rule.required().error(
          "Please indicate if the company is a partner or not?"
        ),
    },
    {
      name: "companyName",
      title: "Company",
      description:
        "The name of the company that makes the tool. i.e. BRIL.LA, LLC.",
      type: "string",
      group: "partnerInfo",
      validation: (Rule) =>
        Rule.required().error("What's the company/creator's name?"),
    },
    {
      name: "toolUrl",
      title: "Tool URL",
      description:
        "Enter the full url to the tool's web page. i.e. https://height.app",
      type: "string",
      group: "toolInfo",
      validation: (Rule) =>
        Rule.required()
          .uri()
          .error("Every tool needs a link to clickity click"),
    },
    {
      name: "partnerContactName",
      title: "Partner Contact",
      description:
        "What's the name of the contact person at the Partner Company?",
      type: "string",
      group: "partnerInfo",
    },
    {
      name: "discount",
      title: "Reader Discount",
      description:
        "What's the discount for Hey Rebekah readers? i.e. 15% off all plans.",
      type: "string",
      group: "partnerInfo",
    },
    {
      name: "name",
      title: "Name",
      description: "Title of the tool",
      type: "string",
      group: "toolInfo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      description: "The SEO Title of the post. This is probably not going to be the same as the title.",
      type: "string",
      group: "seo",
      options: { source: "name", maxLength: 60, spellcheck: true },
      validation: Rule => Rule.required().error("What's Kristen going to say if you don't have an SEO Title??"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: ["toolInfo", "seo"],
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      group: "toolInfo",
      validation: (Rule) =>
        Rule.required().error(
          "Please indicate the most appropriate category for the tool?"
        ),
    },
    {
      name: "image",
      title: "Partner's Logo",
      description:
        "Upload the partner's logo in SVG format with a transparent background.",
      type: "image",
      group: "toolInfo",
      validation: (Rule) =>
        Rule.required().error(
          "We need a logo for the partner in SVG format please."
        ),
      fields: [
        {
          name: "imageAltText",
          title: "Image Alt Text",
          description:
            "Enter the alternative text for the partner's logo Image per A11y.",
          type: "string",
          group: "toolInfo",
          validation: (Rule) =>
            Rule.required().error(
              "Please enter the alternative text for the partner's logo image."
            ),
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "shortDescription",
      title: "Short Description",
      description: "Write a brief description of the tool. Like super brief.",
      type: "string",
      group: "toolInfo",
      validation: (Rule) =>
        Rule.required().error(
          "Please write a brief description of the tool."
        ),
    },
    {
      name: "seoMetaDescription",
      title: "SEO Meta Description",
      description: "The SEO Meta Description of the post.",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 158, spellcheck: true },
      group: "seo",
      validation: Rule => Rule.required().error("Keep it short and sweet otherwise from Kristen you'll feel the heat."),
    },
    {
      name: "hrUse",
      title: "HR Use",
      description: "Use bullets to describe how we use the tool",
      type: "array",
      of: [{ type: "block" }],
      options: { maxLength: 300, spellcheck: true },
      group: "toolInfo",
      validation: (Rule) =>
        Rule.required().error(
          "Please describe how we use the tool in bullet format."
        ),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
      group: ["toolInfo", "seo"],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "shortDescription",
      media: "image",
    },
  },
};

export default tool;
