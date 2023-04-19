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
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block' }],
            options: { spellcheck: true },
            validation: (Rule: any) => Rule.required(),
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
            validation: (Rule: any) => Rule.required(),
        },
    ],
};

export default faq;
