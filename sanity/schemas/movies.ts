export default {
  name: 'movies',
  title: 'Movies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Movie Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    //1. todo: TYPE TEXTO ENRIQUECIDO
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    //2. "normal" TODO: add new type table (plugin oficial)
    //3. Todo: añadir otra tabla con plugin (https://github.com/davydog187/sanity-portable-table)
  ],
  /*  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection: {author: string}) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  }, */
}
