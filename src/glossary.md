<script setup>

import { data as glossary } from '../data/glossary.data.js'

function generateId(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

</script>

# Glossary

<template v-for="def, term in glossary">

<h2 :id="generateId(term)">{{ term }}</h2>

<p>{{ def }}</p>

</template>
