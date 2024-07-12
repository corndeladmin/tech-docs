export const express = [
  { text: 'Introduction', link: '/express/index' },
  {
    text: 'Data layer',
    items: [
      {
        text: 'Managing the database',
        link: '/express/managing-the-database'
      },
      {
        text: 'Connecting to a database',
        link: '/express/connecting-to-a-database'
      },
      {
        text: 'Adding a model layer',
        link: '/express/adding-a-model-layer'
      }
    ]
  },
  {
    text: 'Creating an API',
    items: [
      { text: 'Creating a server', link: '/express/creating-a-server' },
      {
        text: 'Request and response',
        link: '/express/request-response',
        collapsed: true,
        items: [
          { text: 'Query params', link: '/express/query-params' },
          { text: 'URL params', link: '/express/url-params' },
          { text: 'Body and headers', link: '/express/body-and-headers' }
        ]
      },
      { text: 'Routing', link: '/express/routing' },
      { text: 'Sending errors', link: '/express/sending-errors' },
      { text: 'Schema validation', link: '/express/schema-validation' }
    ]
  },
  {
    text: 'Server side rendering',
    items: [
      { text: 'Static files', link: '/express/static-files' },
      { text: 'Views and templates', link: '/express/views-and-templates' },
      { text: 'Using loops', link: '/express/using-loops' },
      { text: 'Template partials', link: '/express/template-partials' },
      { text: 'CSS and assets', link: '/express/css-and-assets' },
      { text: 'User input', link: 'express/user-input' }
    ]
  },
  {
    text: 'Web sockets',
    items: [
      {
        text: 'Creating a web socket server',
        link: '/express/web-socket-server'
      },
      {
        text: 'Syncing clients',
        link: '/express/syncing-clients'
      },
      {
        text: 'Creating a web socket client',
        link: '/express/web-socket-client'
      }
    ]
  }
]
