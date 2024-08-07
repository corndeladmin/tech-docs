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
      '/git/': sidebars.git,
      '/bash/': sidebars.bash,
      '/vscode/': sidebars.vscode,
      '/express/': sidebars.express,
      '/javalin/': sidebars.javalin,
      '/html-css/': sidebars.htmlCss,
      '/js/': sidebars.javascript,
      '/java/': sidebars.java,
      '/sql/': sidebars.sql
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
