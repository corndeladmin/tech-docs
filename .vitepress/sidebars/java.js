export const java = [
  {
    text: 'Introduction',
    link: '/java/'
  },
  {
    text: 'Installation',
    link: '/java/installation'
  },
  {
    text: 'Foundations',
    collapsed: true,
    items: [
      { text: 'Variables', link: '/java/variables' },
      {
        text: 'Operators and expressions',
        link: '/java/operators-and-expressions'
      },
      { text: 'Data types', link: '/java/data-types' },
      { text: 'Logical operators', link: '/java/logical-operators' },
      { text: 'Comparison operators', link: '/java/comparison-operators' },
      { text: 'Conditional statements', link: '/java/conditional-statements' },
      { text: 'Methods', link: '/java/functions' },
      { text: 'Parameters', link: '/java/parameters' }
    ]
  },
  {
    text: 'Data and iteration',
    collapsed: true,
    items: [
      {
        text: 'Arrays and Lists',
        collapsed: true,
        items: [
          { text: 'Arrays', link: '/java/arrays' },
          { text: 'Array techniques', link: '/java/array-techniques' },
          { text: 'Lists', link: '/java/lists' },
          { text: 'List techniques', link: '/java/list-techniques' },
          { text: 'Map and filter', link: '/java/map-filter' }
        ]
      },
      {
        text: 'Strings',
        collapsed: true,
        items: [
          { text: 'Formatting', link: '/java/string-formatting' },
          { text: 'Split and join', link: '/java/string-split-join' }
        ]
      },
      {
        text: 'Loops',
        collapsed: true,
        items: [
          { text: 'While loops', link: '/java/while-loops' },
          { text: 'For loops', link: '/java/for-loops' },
          { text: 'For-each loops', link: '/java/for-each-loops' },
          { text: 'Control flow', link: '/java/loop-control-flow' },
          { text: 'Nested loops', link: '/java/nested-loops' }
        ]
      },

      {
        text: 'Classes and Objects',
        collapsed: true,
        items: [
          { text: 'Object basics', link: '/java/object-basics' },
          {
            text: 'Classes and instances',
            link: '/java/classes-and-instances'
          },
          { text: 'Lists of objects', link: '/java/lists-of-objects' }
        ]
      }
    ]
  },

  {
    text: 'Object oriented programming',
    collapsed: true,
    items: [
      { text: 'Instance methods', link: '/java/instance-methods' },
      { text: 'Private members', link: '/java/private-members' },
      { text: 'Static members', link: '/java/static-members' },
      { text: 'Inheritance', link: '/java/inheritance' },
      { text: 'Interfaces', link: '/java/interfaces' },
      {
        text: 'Design patterns',
        collapsed: true,
        items: [
          { text: 'Singleton pattern', link: '/java/singleton-pattern' },
          { text: 'Adapter pattern', link: '/java/adapter-pattern' },
          { text: 'Facade pattern', link: '/java/facade-pattern' },
          { text: 'Mediator pattern', link: '/java/mediator-pattern' }
        ]
      }
    ]
  },

  {
    text: 'Testing',
    collapsed: true,
    items: [
      { text: 'Unit testing', link: '/java/unit-testing' },
      { text: 'Arrange, act, assert', link: '/java/arrange-act-assert' },
      { text: 'Test driven development', link: '/java/tdd' }
    ]
  },

  {
    text: 'Building projects',
    collapsed: true,
    items: [
      { text: 'Creating a Maven project', link: '/java/creating-projects' },
      { text: 'Making a CLI', link: '/java/making-a-cli' },
      { text: 'Adding subcommands', link: '/java/adding-subcommands' },
      { text: 'Handling errors', link: '/java/handling-errors' },
      { text: 'Reading and writing files', link: '/java/file-io' },
      { text: 'Working with JSON', link: '/java/working-with-json' },
      { text: 'Environment variables', link: '/java/environment-variables' },
      { text: 'HTTP GET requests', link: '/java/http-get' },
      { text: 'HTTP POST requests', link: '/java/http-post' }
    ]
  }
]
