// /schema/category-schema.ts

import { FaThList } from "react-icons/fa";

const category = {
    name: 'category',
    title: 'Categories',
    icon: FaThList,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The category/topic from the content development workflow.',
        type: 'string',
    },
    ]
}
export default category;