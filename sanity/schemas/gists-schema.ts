const gists = {
    name: 'gist',
    title: 'Gists',
    type: 'document',
    fields: [{
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'name', maxLength: 96 },
    },
    {
        name: 'post-summary',
        title: 'Post Summary',
        type: 'string',
        options: { maxLength: 155 },
    },
    // Need to add remaining fields here
    ]
}