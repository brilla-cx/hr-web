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
            validation: Rule => Rule.required().warning("It's FAQ, not FA."),
        },
        {
            name: "answer",
            title: "Answer",
            type: "blockContent",
            options: { spellcheck: true },
            validation: Rule => Rule.required().warning("It's FAQ, not FQ."),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "question",
                maxLength: 96,
            },
            validation: Rule => Rule.required().warning("A post without a slug is like a slug without a post."),
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
            validation: Rule => Rule.required().warning("Please select the FAQ type to organize them on the website."),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
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
