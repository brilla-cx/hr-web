/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/blockContent.ts

import { FaEdit } from "react-icons/fa";

const blockContent = {
    name: 'blockContent',
    title: 'Block Content',
    icon: FaEdit,
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Number', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Code', value: 'code' },
                    { title: 'Strike', value: 'strike-through' },
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                                validation: (Rule: any) =>
                                    Rule.uri({
                                        allowRelative: true,
                                        scheme: ['https', 'http', 'mailto', 'tel'],
                                    }),
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                type: 'boolean',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    options: {
                        isHighlighted: true,
                    },
                    validation: (Rule: any) => Rule.required(),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true,
                    },
                },
            ],
        },
    ],
};

export default blockContent;