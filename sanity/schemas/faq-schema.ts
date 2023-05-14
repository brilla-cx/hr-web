/* eslint-disable @typescript-eslint/no-explicit-any */
// /schema/faq-schema.ts
import { FaQuestion } from "react-icons/fa";

const faq = {
    name: 'faq',
    title: 'FAQs',
    icon: FaQuestion,
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block' }],
            options: { spellcheck: true },
            validation: Rule => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'faqType',
            title: 'FAQ Type',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Reader', value: 'reader' },
                    { title: 'Sponsor', value: 'sponsor' },
                    { title: 'Partner', value: 'partner' },
                    { title: 'Candidate', value: 'candidate' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            group: "meta",
        },
    ],
    preview: {
        select: {
            title: "question",
            subtitle: "answer",
            media: "faqType",
        },
    },
};

export default faq;
