import { defineConfig } from 'vitepress'
import * as sidebars from './sidebars/index.js'

export default defineConfig({
  title: 'Corndel',
  description: 'for digital apprenticeships',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.png',

    editLink: {
      pattern: 'https://github.com/corndeladmin/tech-docs/tree/main/src/:path'
    },

    search: {
      provider: 'local'
    },

    nav: [
      {
        text: 'Guides',
        items: [
          {
            text: 'Core',
            items: [
              {
                text: 'Command line',
                link: '/bash/'
              },
              {
                text: 'VS Code',
                link: '/vscode/'
              },
              {
                text: 'HTML & CSS',
                link: '/html-css/'
              },
              {
                text: 'SQL',
                link: '/sql/'
              }
            ]
          },
          {
            text: 'Languages',
            collapsed: true,
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
                text: 'C#',
                link: '/csharp/'
              },
              {
                text: 'Java',
                link: '/java/'
              }
            ]
          }
        ]
      },
      {
        text: 'Frameworks',
        items: [
          {
            text: 'Javascript',
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
          },
          {
            text: 'C#',
            items: [
              {
                text: '.Net',
                link: '/dotnet/'
              }
            ]
          }
        ]
      },
      {
        text: 'Glossary',
        link: '/glossary'
      },
      {
        text: 'Exercises',
        link: '/exercises/'
      }
    ],

    sidebar: {
      '/bash/': sidebars.bash,
      '/express/': sidebars.express,
      '/html-css/': sidebars.htmlCss,
      '/js/': sidebars.javascript,
      '/sql/': sidebars.sql,
      '/exercises/': sidebars.exercises
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
