<script setup>
import { ref, onMounted, reactive, nextTick } from 'vue'

import { basicSetup } from 'codemirror'
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'

import { sql } from '@codemirror/lang-sql'
import { javascript } from '@codemirror/lang-javascript'

const el = ref(null)

const editor = reactive({
  view: null
})

onMounted(async () => {
  const doc = el.value.querySelector('code').textContent.trim()
  const lang = el.value.querySelector('.lang').textContent.trim()
  el.value.innerHTML = ''

  const state = EditorState.create({
    doc,
    extensions: [basicSetup, javascript({ jsx: true })]
  })

  editor.view = new EditorView({
    state,
    parent: el.value
  })
})
</script>

<template>
  <div id="editor" class="editor" ref="el">
    <slot></slot>
  </div>
</template>

<style>
/* Editor */
.editor {
  margin-top: 16px;
  margin-bottom: 16px;
}

.cm-editor {
  background-color: var(--vp-code-block-bg);
  border-radius: 8px;
  font-size: 14px;
}

.cm-editor .cm-content {
  font-family: var(--vp-font-family-mono);
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Lines */
.cm-editor .cm-line {
  line-height: var(--vp-code-line-height);
  color: var(--vp-c-text-1);
}

.cm-editor .cm-activeLine {
  background-color: var(--vp-code-line-highlight-color);
}

/* Gutters */
.cm-editor .cm-gutters {
  background-color: var(--vp-code-block-bg);
  line-height: var(--vp-code-line-height);
  border-right-color: var(--vp-code-block-divider-color);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.cm-editor .cm-foldGutter {
  line-height: var(--vp-code-line-height);
}

.cm-editor .cm-activeLineGutter {
  background-color: var(--vp-code-line-highlight-color);
}

/* Syntax */

.cm-editor .cm-line span {
  color: var(--shiki-light, inherit);
}
.dark .cm-editor .cm-line span {
  color: var(--shiki-dark, inherit);
}

/* keywords */
.ͼp {
  --shiki-light: #d73a49;
  --shiki-dark: #f97583;
}

/* functions */
.ͼs,
.ͼq {
  --shiki-light: #6f42c1;
  --shiki-dark: #b392f0;
}

/* param */
.ͼs + .ͼr {
  --shiki-light: #e36209;
  --shiki-dark: #ffab70;
}

/* var */
.ͼr {
  --shiki-light: #005cc5;
  --shiki-dark: #79b8ff;
}

/* plain string */
.ͼ17 {
  --shiki-light: #032f62;
  --shiki-dark: #9ecbff;
}
</style>
