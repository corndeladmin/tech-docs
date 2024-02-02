import { defineConfig } from 'vitepress'
import * as sidebars from './sidebars/index.js'

export default defineConfig({
  title: 'Corndel',
  description: 'for digital apprenticeships',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.png',

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
      '/bash/': sidebars.bash,
      '/js/': sidebars.javascript
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
