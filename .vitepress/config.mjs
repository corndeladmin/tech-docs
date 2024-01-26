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
      '/js/': sidebars.javascript
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
