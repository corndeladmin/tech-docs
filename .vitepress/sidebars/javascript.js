export const javascript = [
  {
    text: 'Introduction',
    link: '/js/'
  },
  {
    text: 'Installation',
    link: '/js/installation'
  },
  {
    text: 'Foundations',
    collapsed: true,
    items: [
      { text: 'Variables', link: '/js/variables' },
      {
        text: 'Operators and expressions',
        link: '/js/operators-and-expressions'
      },
      { text: 'Data types', link: '/js/data-types' },

      { text: 'Logical operators', link: '/js/logical-operators' },
      { text: 'Comparison operators', link: '/js/comparison-operators' },
      {
        text: 'Conditional statements',
        link: '/js/conditional-statements'
      },

      { text: 'Functions', link: '/js/functions' },
      { text: 'Parameters', link: '/js/parameters' },
      { text: 'Arrow functions', link: '/js/arrow-functions' }
    ]
  },

  {
    text: 'Data and iteration',
    collapsed: true,
    items: [
      {
        text: 'Arrays',
        collapsed: true,
        items: [
          { text: 'Basics', link: '/js/arrays' },
          { text: 'Slice', link: '/js/array-slice' },
          { text: 'Push', link: '/js/array-push-pop' },
          { text: 'Map', link: '/js/array-map' },
          { text: 'Filter', link: '/js/array-filter' },
          { text: 'Reduce', link: '/js/array-reduce' }
        ]
      },
      {
        text: 'Strings',
        collapsed: true,
        items: [
          { text: 'Formatting', link: '/js/string-formatting' },
          { text: 'Split and join', link: '/js/string-split-join' }
        ]
      },
      {
        text: 'Loops',
        collapsed: true,
        items: [
          { text: 'While loops', link: '/js/while-loops' },
          { text: 'For loops', link: '/js/for-loops' },
          { text: 'For of loops', link: '/js/for-of-loops' },
          { text: 'Control flow', link: '/js/loop-control-flow' },
          { text: 'Nested loops', link: '/js/nested-loops' }
        ]
      },

      {
        text: 'Objects',
        collapsed: true,
        items: [
          { text: 'Objects', link: '/js/objects' },
          { text: 'Object tricks', link: '/js/object-tricks' },
          { text: 'Lists of objects', link: '/js/lists-of-objects' },
          { text: 'Object nesting', link: '/js/object-nesting' }
        ]
      }
    ]
  },

  {
    text: 'Object oriented programming',
    collapsed: true,
    items: [
      {
        text: 'Classes and instances',
        link: '/js/classes-and-instances'
      },
      { text: 'Instance Methods', link: '/js/instance-methods' },
      { text: 'Private properties', link: '/js/private-properties' },
      { text: 'Getters and setters', link: '/js/getters-and-setters' },
      { text: 'Static properties', link: '/js/static-properties' },
      { text: 'Inheritance', link: '/js/inheritance' },
      { text: 'Method overriding', link: '/js/method-overriding' },
      {
        text: 'Design patterns',
        collapsed: true,
        items: [
          { text: 'Singleton', link: '/js/singleton-pattern' },
          { text: 'Adapter', link: '/js/adapter-pattern' },
          { text: 'Facade', link: '/js/facade-pattern' },
          { text: 'Mediator', link: '/js/mediator-pattern' },
          { text: 'Event emitter', link: '/js/event-emitter' }
        ]
      }
    ]
  },

  {
    text: 'Testing',
    collapsed: true,
    items: [
      { text: 'Unit testing with Mocha', link: '/js/unit-testing' },
      { text: 'Arrange, act, assert', link: '/js/arrange-act-assert' },
      {
        text: 'Test Driven Development (TDD)',
        link: '/js/test-driven-development'
      }
    ]
  },

  {
    text: 'Building projects',
    collapsed: true,
    items: [
      { text: 'Creating a Node project', link: '/js/node-projects' },
      { text: 'Imports and exports', link: '/js/imports-and-exports' },
      { text: 'Making a CLI', link: '/js/making-a-cli' },
      { text: 'Handling errors', link: '/js/handling-errors' },
      { text: 'Environment variables', link: '/js/environment-variables' }
    ]
  },

  {
    text: 'Asynchronous code',
    collapsed: true,
    items: [
      { text: 'Async/Await', link: '/js/async-await' },
      {
        text: 'Reading and writing files',
        link: '/js/reading-and-writing-files.md'
      },
      {
        text: 'Working with JSON',
        link: '/js/working-with-json.md'
      },
      {
        text: 'Fetching data',
        link: '/js/fetching-data.md'
      }
    ]
  }
]
