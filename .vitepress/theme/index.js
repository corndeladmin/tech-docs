// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Vimeo from '../components/Vimeo.vue'
import Exercise from '../components/Exercise.vue'
import CodeMirror from '../components/CodeMirror.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Vimeo', Vimeo)
    app.component('Exercise', Exercise)
    app.component('CodeMirror', CodeMirror)
  }
}
