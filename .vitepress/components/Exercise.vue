<script setup>
import { ref, onMounted, reactive, nextTick } from 'vue'
import { useData } from 'vitepress'
import { basicSetup } from 'codemirror'
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { sql } from '@codemirror/lang-sql'
import Judge from '../judge'

const { page } = useData()
const { cases, expected } = page.value.frontmatter

const el = ref(null)

const editor = reactive({
  view: null,
  lang: null,
  stdout: null
})

async function handleRun() {
  const judge = new Judge(editor.lang)
  const code = editor.view.state.doc.toString()
  const submission = [code, ...cases].join('\n').trim()
  const data = await judge.createSubmission(submission)
  editor.stdout = data.stdout
  const results = editor.stdout.trim().split('\n')

  for (let i = 0; i < cases.length; i++) {
    console.log(results)
    console.log(expected)
    if (results[i] != expected[i]) {
      alert('Try again!')
      return
    }
  }

  alert('Correct!')
}

function handleClear() {
  editor.stdout = null
}

onMounted(async () => {
  const doc = el.value.querySelector('code').textContent.trim()
  editor.lang = el.value.querySelector('.lang').textContent.trim()
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
    <button class="btn btn_clear" @click="handleClear">Clear</button>
    <button class="btn btn_run" @click="handleRun">Run</button>
  </div>
  <div v-if="editor.stdout" class="stdout">
    <pre>{{ editor.stdout }}</pre>
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
  gap: 1rem;
  align-items: center;
  justify-content: end;
}

.btn {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
}

.btn_run {
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
}

.btn_run:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.btn_run:active {
  background-color: var(--vp-button-brand-active-bg);
}

.btn_clear {
  background-color: var(--vp-button-alt-bg);
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
}

.btn_clear:hover {
  background-color: var(--vp-button-alt-hover-bg);
}

.btn_clear:active {
  background-color: var(--vp-button-alt-active-bg);
}
</style>
