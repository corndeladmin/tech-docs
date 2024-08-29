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

    nav: sidebars.topnav,

    sidebar: {
      '/bash/': sidebars.bash,
      '/express/': sidebars.express,
      '/git/': sidebars.git,
      '/html-css/': sidebars.htmlCss,
      '/java/': sidebars.java,
      '/js/': sidebars.javascript,
      '/react/': sidebars.react,
      '/sql/': sidebars.sql,
      '/vscode/': sidebars.vscode
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
