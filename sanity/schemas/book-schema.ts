// /schema/book-schema.ts

import { FaBook } from "react-icons/fa";

const book = {
    name: 'book',
    title: 'Books',
    icon: FaBook,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The title of the book.',
        type: 'string',
    },
    ]
}
export default book;