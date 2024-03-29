<script setup lang="ts">
defineProps<{
  href: string
  target?: string
}>()
</script>

<template>
  <a class="pb-[0.1em] cursor-pointer text-nowrap" :href="href" :target="target || '_blank'">
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
