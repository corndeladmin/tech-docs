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
    text: 'Pre-reading',
    // collapsed: true,
    items: [
      { text: 'Variables' },
      { text: 'Operators and expressions' },
      { text: 'Data types' },

      { text: 'Logical operators' },
      { text: 'Conditional statements' },

      { text: 'Functions' },
      { text: 'Parameters' }
    ]
  },

  {
    text: 'Fundamentals',
    // collapsed: true,
    items: [
      { text: 'Working with arrays', link: '/js/working-with-arrays' },
      { text: 'Array methods', link: '/js/array-methods' },
      { text: 'String methods', link: '/js/string-methods' },

      { text: 'Basic loops', link: '/js/basic-loops' },
      { text: 'Loop control flow', link: '/js/loop-control-flow' },
      { text: 'Applied iteration', link: '/js/applied-iteration' },

      {
        text: 'Objects as key value stores',
        link: '/js/objects-as-key-value-stores'
      },
      { text: 'Lists of objects', link: '/js/lists-of-objects' },
      { text: 'Object nesting', link: '/js/object-nesting' },
      { text: 'Array reduce', link: '/js/array-reduce.md' }
    ]
  },

  {
    text: 'OOP',
    // collapsed: true,
    items: [
      { text: 'Classes and instances', link: '/js/classes-and-instances' },
      { text: 'Instance Methods', link: '/js/instance-methods' },
      { text: 'Private properties', link: '/js/private-properties.md' },
      { text: 'Getters and setters', link: '/js/getters-and-setters.md' },
      { text: 'Static properties', link: '/js/static-properties.md' },
      { text: 'Inheritance', link: '/js/inheritance.md' },
      { text: 'Method overriding', link: '/js/method-overriding.md' }
    ]
  },

  {
    text: 'Testing',
    // collapsed: true,
    items: [
      { text: 'Unit testting with Mocha', link: '/js/testing-with-mocha' },
      { text: 'Arrange, act, assert', link: '/js/arrange-act-assert.md' },
      {
        text: 'Test Driven Development (TDD)',
        link: '/js/test-driven-development'
      }
    ]
  },

  {
    text: 'Frameworks',
    // collapsed: true,
    items: [
      { text: 'Creating a Node project', link: '/js/node-projects' },
      { text: 'Imports and exports', link: '/js/imports-and-exports' },
      { text: 'Making a CLI', link: '/js/making-a-cli' },
      { text: 'Catching errors' },
      { text: 'Throwing errors' }
    ]
  },

  {
    text: 'Asynchronous code',
    // collapsed: true,
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
