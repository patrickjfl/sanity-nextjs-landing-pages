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
                  buildHookId: '6027f46a25e90392f6fc977b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9r6p4sbz',
                  apiId: '3e6f256d-70b6-4fa7-9efa-0795d371b8f4'
                },
                {
                  buildHookId: '6027f46a18d0d27734c22c28',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xbfkncb5',
                  apiId: '5c226295-f96d-4099-ac6d-efe898d2f0ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrickjfl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xbfkncb5.netlify.app', category: 'apps'}
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
