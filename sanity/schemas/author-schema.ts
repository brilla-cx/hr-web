// /schema/author-schema.ts

import { FaUserAstronaut } from "react-icons/fa";

const author = {
    name: 'author',
    title: 'Authors',
    icon: FaUserAstronaut,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The title of the post.',
        type: 'string',
    },
    ]
}
export default author;