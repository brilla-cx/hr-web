// /schema/socialBlog-schema.ts

import { FaArchive } from "react-icons/fa";

const socialBlog = {
    name: 'socialBlog',
    title: 'Social Blogs',
    icon: FaArchive,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The title of the social blog post from RebekahRadice.com.',
        type: 'string',
    },
    ]
}
export default socialBlog;