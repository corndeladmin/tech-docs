<script setup>
const props = defineProps({
  id: { type: String },
  user: { type: String },
  height: { type: Number, default: 500 }
})
</script>

<template>
  <iframe
    :height="props.height"
    style="width: 100%"
    scrolling="no"
    :title="props.title"
    :src="`https://codepen.io/${props.user}/embed/${props.id}`"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
    allowfullscreen="true"
  />
</template>
