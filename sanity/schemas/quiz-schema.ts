// /schemas/quiz-schema.ts
// This is a placeholder and needs to be updated later.
import { FaListUl as icon } from 'react-icons/fa';

const quiz = {
    name: 'quiz',
    title: 'Quiz',
    type: 'document',
    icon,
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required(),
        },
        {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'sourceUrl',
            title: 'Source URL',
            type: 'url',
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'category.title',
        },
    },
};

export default quiz;