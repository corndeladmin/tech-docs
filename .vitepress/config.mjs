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

    nav: [
      {
        text: 'Guides',
        items: [
          {
            text: 'Core',
            items: [
              {
                text: 'Command line',
                link: '/command-line/'
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
      }
    ],

    sidebar: {
      '/bash/': sidebars.bash,
      '/express/': sidebars.express,
      '/html-css/': sidebars.htmlCss,
      '/js/': sidebars.javascript,
      '/sql/': sidebars.sql
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
