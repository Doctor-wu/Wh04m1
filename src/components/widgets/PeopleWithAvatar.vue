<script setup lang="ts">
defineProps<{
  avatarUrl: string
  name: string
  link?: string
}>()
</script>

<template>
  <a
    class="!transition-all !border-none !no-underline cursor-pointer !text-inherit inline-flex rounded-4 !h-6 pr-2 py-[0px] vertical-mid hover:bg-gray-200 hover:dark:bg-gray-500 !bg-op-30"
    flex="items-center justify-start" :href="link ?? 'javascript: void 0;'" target="_blank"
  >
    <img class="inline !rounded-4 h-5 !w-5 ml-[2px]" :src="avatarUrl">
    <span class="ml-1 text-sm">{{ name }}</span>
  </a>
</template>

<style lang="scss" scoped></style>
