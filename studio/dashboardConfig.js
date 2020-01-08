export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e15c91bffae6c2af5d9e369',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a3nokr5q',
                  apiId: '8e3e77be-09ff-4c3f-85f3-4963f834874c'
                },
                {
                  buildHookId: '5e15c91b02528b0d939a32d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-14pjhq1h',
                  apiId: '060afd48-06f3-4d86-9dfd-3f722bfd4fec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/umutergene/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-14pjhq1h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
