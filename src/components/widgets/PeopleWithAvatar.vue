<script setup lang="ts">
defineProps<{
  avatarUrl: string
  name: string
  link?: string
}>()
</script>

<template>
  <a
    class="!transition-all !border-none !no-underline cursor-pointer !text-inherit rounded-4 !h-6 pr-2 py-[0px] vertical-middle inline-flex items-center justify-start hover:bg-gray-100 hover:dark:bg-gray-800 "
    :href="link ?? 'javascript: void 0;'"
    target="_blank"
  >
    <img class="inline !rounded-4 h-full !w-6 !m0" :src="avatarUrl">
    <span class="ml-1 text-sm">{{ name }}</span>
  </a>
</template>

<style lang="scss" scoped></style>
