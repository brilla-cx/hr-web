// /schema/faq-schema.ts

import { FaQuestion } from "react-icons/fa";

const faq = {
    name: 'faq',
    title: 'FAQS',
    icon: FaQuestion,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The question that is frequently asked.',
        type: 'string',
    },
    ]
}
export default faq;