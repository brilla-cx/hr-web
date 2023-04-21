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
            options: {
                list: [
                    { title: "Select a color", value: "white" },
                    { title: 'Red', value: 'red' },
                    { title: 'Orange', value: 'orange' },
                    { title: 'Amber', value: 'amber' },
                    { title: 'Yellow', value: 'yellow' },
                    { title: 'Lime', value: 'lime' },
                    { title: 'Green', value: 'green' },
                    { title: 'Emerald', value: 'emerald' },
                    { title: 'Teal', value: 'teal' },
                    { title: 'Cyan', value: 'cyan' },
                    { title: 'Sky', value: 'sky' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Indigo', value: 'indigo' },
                    { title: 'Violet', value: 'violet' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Fuchsia', value: 'fuchsia' },
                    { title: 'Pink', value: 'pink' },
                    { title: 'Rose', value: 'rose' },
                    { title: 'Gray', value: 'gray' }
                ],
                initialValue: "white",
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