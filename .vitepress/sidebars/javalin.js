export const javalin = [
  { text: 'Introduction', link: '/javalin/index' },
  {
    text: 'Data layer',
    items: [
      {
        text: 'Managing the database',
        link: '/javalin/managing-the-database'
      },
      {
        text: 'Connecting to a database',
        link: '/javalin/connecting-to-a-database'
      },
      {
        text: 'Models and repositories',
        collapsed: true,
        items: [
          { text: 'Querying for data', link: '/javalin/adding-a-model-layer' },
          {
            text: 'Querying with substitutions',
            link: '/javalin/adding-a-model-layer-2'
          },
          { text: 'Inserting data', link: '/javalin/adding-a-model-layer-3' }
        ]
      }
    ]
  },
  {
    text: 'Creating an API',
    items: [
      { text: 'Creating a server', link: '/javalin/creating-a-server' },
      {
        text: 'Request and response',
        link: '/javalin/request-response',
        collapsed: true,
        items: [
          { text: 'Query params', link: '/javalin/query-params' },
          { text: 'URL params', link: '/javalin/url-params' },
          { text: 'Body and headers', link: '/javalin/body-and-headers' }
        ]
      },
      { text: 'Routing and Controllers', link: '/javalin/routing' },
      { text: 'Sending errors', link: '/javalin/sending-errors' },
      { text: 'Schema validation', link: '/javalin/schema-validation' }
    ]
  },
  {
    text: 'Server side rendering',
    items: [
      { text: 'Static files', link: '/javalin/static-files' },
      { text: 'Views and templates', link: '/javalin/views-and-templates' },
      { text: 'Using loops', link: '/javalin/using-loops' },
      { text: 'Template partials', link: '/javalin/template-partials' },
      { text: 'CSS and assets', link: '/javalin/css-and-assets' },
      { text: 'User input', link: '/javalin/user-input' }
    ]
  }
]
