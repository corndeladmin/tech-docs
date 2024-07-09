<script setup>
const props = defineProps({
  id: { type: String },
  user: { type: String },
  height: { type: Number, default: 500 },
  editable: { type: Boolean, default: true }
})
</script>

<template>
  <div class="wrapper">
    <iframe
      :height="props.height"
      style="width: 100%"
      scrolling="no"
      :title="props.title"
      :src="`https://codepen.io/${props.user}/embed/${props.id}?editable=${props.editable}`"
      frameborder="no"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
    />
  </div>
</template>

<style scoped>
.wrapper {
  border-radius: 8px;
  overflow: hidden;
}
</style>
