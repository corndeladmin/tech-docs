import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Corndel SWE',
  description: 'for software apprenticeships',
  srcDir: 'src',
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          {
            text: 'Javascript',
            link: '/js/'
          },
          {
            text: 'Python',
            link: '/python/'
          },
          {
            text: 'SQL',
            link: '/sql/'
          },
          {
            text: 'HTML & CSS',
            link: '/html-css/'
          }
        ]
      },
      {
        text: 'Frameworks',
        items: [
          {
            text: 'React',
            link: '/react/'
          },
          {
            text: 'Express',
            link: '/express/'
          }
        ]
      }
    ],

    sidebar: {
      '/js/': [
        {
          text: 'Introduction'
        },
        {
          text: 'Pre-reading',
          collapsed: true,
          items: [
            { text: 'Variables' },
            { text: 'Operators and expressions' },
            { text: 'Data types' },

            { text: 'Conditional statements' },
            { text: 'While loops' },
            { text: 'For loops' }
          ]
        },

        {
          text: 'Fundamentals',
          collapsed: true,
          items: [
            // W1D1
            { text: 'Functions' },
            { text: 'Parameters' },
            { text: 'Composing functions' },

            // W1D2
            { text: 'Arrays' },
            { text: 'Strings' },
            { text: 'Iteration' },

            // W1D3
            { text: 'Objects' },
            { text: 'Methods' },
            { text: 'Error handling' }
          ]
        },

        {
          text: 'Testing',
          collapsed: true,
          items: [
            // W2D1
            { text: 'Unit testing with Jest' },
            { text: 'Jest features' },
            { text: 'TDD' }
          ]
        },

        {
          text: 'OOP',
          collapsed: true,
          items: [
            // W2D2
            { text: 'Classes' },
            { text: 'Inheritance' },
            { text: 'Object oriented design' },

            // W3D3
            { text: 'Static' },
            { text: 'Private' },
            { text: 'Getters and setters' }
          ]
        },

        {
          text: 'Asynchronous code',
          collapsed: true,
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
