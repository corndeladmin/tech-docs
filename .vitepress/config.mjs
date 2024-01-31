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
            text: 'Bash',
            link: '/bash/'
          },
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
      '/bash/': sidebars.bash,
      '/js/': sidebars.javascript
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
