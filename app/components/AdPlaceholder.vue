<template>
  <div class="ad-placeholder">
    <div class="ad-label">Advertisement <span v-if="$slots.default">- <slot /></span></div>
    <adflux-slot></adflux-slot>
  </div>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style scoped>
.ad-placeholder {
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px 0;
  min-height: 100px;
}

.ad-label {
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 10px;
}
</style>
