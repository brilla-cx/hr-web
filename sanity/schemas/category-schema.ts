/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/category-schema.ts
import { FaThList } from "react-icons/fa";

const category = {
    name: "category",
    title: "Categories",
    icon: FaThList,
    type: "document",
    groups: [
        {
            name: "relatedCategories",
            title: "Related Categories",
            default: false,
        },
    ],
    fields: [
        {
            name: "name",
            title: "Name",
            description: "The category/topic from the content development workflow.",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            description: "The slug for the category/topic.",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: Rule =>
                Rule.required().warning("This should be the same as the category/topic name."),
        },
        {
            name: "color",
            title: "Color",
            description: "The color for the category/topic.",
            type: "string",
            validation: Rule => Rule.required(),
            options: {
                list: [
                    { title: "Select a color", value: "gray" },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Cyan', value: 'cyan' },
                    { title: 'Fuchsia', value: 'fuchsia' },
                    { title: 'Indigo', value: 'indigo' },
                    { title: 'Pink', value: 'pink' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Sky', value: 'sky' },
                    { title: 'Violet', value: 'violet' },
                    { title: 'Gray', value: 'gray' },
                ],
                initialValue: "gray",
            },
        },
        {
            name: "relatedCategories",
            title: "Related Categories",
            description: "Categories that are related to the current category.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "category" }],
                },
            ],
            group: "relatedCategories",
        },
    ],
};

export default category;