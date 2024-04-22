<script setup>

import { data as glossary } from '../data/glossary.data.js'

const terms = Object.keys(glossary).sort()

function generateId(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

</script>

# Glossary

<template v-for="term in terms">

<h2 :id="generateId(term)">{{ term }}</h2>

<p>{{ glossary[term] }}</p>

</template>
