<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div rounded shadow of-hidden border="~ base op20">
    <img
      :src
      dark:invert-95 important-m0
    >
  </div>
</template>

<style lang="scss" scoped>

</style>
