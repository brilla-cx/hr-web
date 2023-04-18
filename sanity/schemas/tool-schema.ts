// /schema/tool-schema.ts

import { FaTools } from "react-icons/fa";

const tool = {
    name: 'tool',
    title: 'Built With Tools',
    icon: FaTools,
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        description: 'The title of the tool.',
        type: 'string',
    },
    ]
}
export default tool;