export const javascript = [
  {
    text: 'Introduction'
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
    text: 'Frameworks',
    // collapsed: true,
    items: [
      { text: 'Creating a node project' },
      { text: 'Importing and exporting' },
      { text: 'Managing dependencies' },
      { text: 'Command line basics' },
      { text: 'Making a CLI' },
      { text: 'CLI user experience' },
      { text: 'Catching errors' },
      { text: 'Throwing errors' }
    ]
  },

  {
    text: 'OOP',
    // collapsed: true,
    items: [
      { text: 'Classes and instances' },
      { text: 'Methods' },
      { text: 'Getters and setters' },
      { text: 'Private properties' },
      { text: 'Static properties' },
      { text: 'Inheritance' },
      { text: 'Overriding and customisation' }
    ]
  },

  {
    text: 'Testing',
    // collapsed: true,
    items: [
      { text: 'Writing unit tests' },
      { text: 'Testing best practices' },
      { text: 'Mocha features' },
      { text: 'TDD' }
    ]
  },

  {
    text: 'Asynchronous code',
    // collapsed: true,
    items: [
      { text: 'Callbacks' },
      { text: 'Promises' },
      { text: 'async/await' },

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
