<template>
  <adflux-slot :layout="type" class="ad-placeholder"></adflux-slot>
</template>

<script setup lang="ts">
const { type } = defineProps<{
  type: 'banner' | 'sidebar';
}>();
</script>

<style scoped>
.ad-placeholder {
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  overflow: hidden;
}
</style>
