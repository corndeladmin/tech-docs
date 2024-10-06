export const flask = [
  { text: 'Introduction', link: '/flask/index' },
  {
    text: 'Data layer',
    items: [
      {
        text: 'Managing the database',
        link: '/flask/managing-the-database'
      },
      {
        text: 'Connecting to a database',
        link: '/flask/connecting-to-a-database'
      },
      {
        text: 'Models and repositories',
        collapsed: true,
        items: [
          { text: 'Querying for data', link: '/flask/adding-a-model-layer' },
          {
            text: 'Querying with substitutions',
            link: '/flask/adding-a-model-layer-2'
          },
          { text: 'Inserting data', link: '/flask/adding-a-model-layer-3' }
        ]
      }
    ]
  },
  {
    text: 'Creating an API',
    items: [
      { text: 'Creating a server', link: '/flask/creating-a-server' },
      {
        text: 'Request and response',
        link: '/flask/request-response',
        collapsed: true,
        items: [
          { text: 'Query params', link: '/flask/query-params' },
          { text: 'URL params', link: '/flask/url-params' },
          { text: 'Body and headers', link: '/flask/body-and-headers' }
        ]
      },
      { text: 'Routing and Controllers', link: '/flask/routing' },
      { text: 'Sending errors', link: '/flask/sending-errors' },
      { text: 'Schema validation', link: '/flask/schema-validation' }
    ]
  },
  {
    text: 'Server side rendering',
    items: [
      { text: 'Static files', link: '/flask/static-files' },
      { text: 'Views and templates', link: '/flask/views-and-templates' },
      { text: 'Using loops', link: '/flask/using-loops' },
      { text: 'Template partials', link: '/flask/template-partials' },
      { text: 'CSS and assets', link: '/flask/css-and-assets' },
      { text: 'User input', link: '/flask/user-input' }
    ]
  },
  {
    text: 'Web sockets',
    items: [
      {
        text: 'Creating a web socket server',
        link: '/flask/web-socket-server'
      },
      {
        text: 'Syncing clients',
        link: '/flask/syncing-clients'
      },
      {
        text: 'Creating a web socket client',
        link: '/flask/web-socket-client'
      }
    ]
  },
  {
    text: 'Testing',
    items: [{ text: 'Testing with Flask' }, { text: 'Testing with pytest' }]
  },
  {
    text: 'Deploying',
    items: [
      { text: 'Multiple environments', link: '/flask/multiple-environments' },
      { text: 'Deploying a flask app', link: '/flask/deploying-app' },
      { text: 'Staging', link: '/flask/staging-app' },
      { text: 'Automated testing', link: '/flask/automated-testing' }
    ]
  }
]
