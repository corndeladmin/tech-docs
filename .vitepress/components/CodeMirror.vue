<script setup>
import { ref, onMounted, reactive, nextTick } from 'vue'
import { basicSetup } from 'codemirror'
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { sql } from '@codemirror/lang-sql'

const el = ref(null)

const editor = reactive({
  view: null
})

function handleRun() {
  const code = editor.view.state.doc.toString()
  console.log(code)
}

onMounted(async () => {
  const doc = el.value.querySelector('code').textContent.trim()
  const lang = el.value.querySelector('.lang').textContent.trim()
  el.value.innerHTML = ''

  const state = EditorState.create({
    doc,
    extensions: [basicSetup, sql()]
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
  <div class="btns">
    <button class="btn btn_run" @click="handleRun">Run</button>
  </div>
</template>

<style>
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
  padding-top: 20px;
  padding-bottom: 20px;
}

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

.cm-editor .cm-line {
  line-height: var(--vp-code-line-height);
  color: var(--vp-c-text-1);
}

.cm-line span {
  color: var(--shiki-light, inherit);
}
.dark .cm-line span {
  color: var(--shiki-dark, inherit);
}

.cm-editor .ͼb {
  --shiki-light: #d73a49;
  --shiki-dark: #f97583;
}

.cm-editor .cm-activeLine {
  background-color: var(--vp-code-line-highlight-color);
}

.cm-editor .cm-activeLineGutter {
  background-color: var(--vp-code-line-highlight-color);
}

.btns {
  display: flex;
}

.btn {
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
}

.btn:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.btn:active {
  background-color: var(--vp-button-brand-active-bg);
}

.btn_run {
  margin-left: auto;
}

/*
--vp-code-line-height: 1.7;
--vp-code-font-size: 0.875em;
--vp-code-color: var(--vp-c-brand-1);
--vp-code-link-color: var(--vp-c-brand-1);
--vp-code-link-hover-color: var(--vp-c-brand-2);
--vp-code-bg: var(--vp-c-default-soft);
--vp-code-block-color: var(--vp-c-text-2);
--vp-code-block-bg: var(--vp-c-bg-alt);
--vp-code-block-divider-color: var(--vp-c-gutter);
--vp-code-lang-color: var(--vp-c-text-3);
--vp-code-line-highlight-color: var(--vp-c-default-soft);
--vp-code-line-number-color: var(--vp-c-text-3);
--vp-code-line-diff-add-color: var(--vp-c-success-soft);
--vp-code-line-diff-add-symbol-color: var(--vp-c-success-1);
--vp-code-line-diff-remove-color: var(--vp-c-danger-soft);
--vp-code-line-diff-remove-symbol-color: var(--vp-c-danger-1);
--vp-code-line-warning-color: var(--vp-c-warning-soft);
--vp-code-line-error-color: var(--vp-c-danger-soft);
--vp-code-copy-code-border-color: var(--vp-c-divider);
--vp-code-copy-code-bg: var(--vp-c-bg-soft);
--vp-code-copy-code-hover-border-color: var(--vp-c-divider);
--vp-code-copy-code-hover-bg: var(--vp-c-bg);
--vp-code-copy-code-active-text: var(--vp-c-text-2);
--vp-code-copy-copied-text-content: 'Copied';
--vp-code-tab-divider: var(--vp-code-block-divider-color);
--vp-code-tab-text-color: var(--vp-c-text-2);
--vp-code-tab-bg: var(--vp-code-block-bg);
--vp-code-tab-hover-text-color: var(--vp-c-text-1);
--vp-code-tab-active-text-color: var(--vp-c-text-1);
--vp-code-tab-active-bar-color: var(--vp-c-brand-1);
*/
</style>
