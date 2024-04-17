<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  cover: string
  link: string
}>()
</script>

<template>
  <a
    flex="~ col md:row"
    class="rounded-3 overflow-hidden border h-56 dark:!border-gray-700 !border-gray-200"
    md="h-36"
    hover="!border-gray-400 dark:!border-gray-600"
    :href="link"
    target="_blank"
  >
    <img
      :src="cover" alt="article cover"
      class="!m-0 w-full h-42 object-cover object-left"
      md="!w-30% h-full"
    >
    <section
      class="h-full box-border flex-1 content-center px-4"
      md="p-4"
      flex="~ col 1 content-center justify-center"
    >
      <span
        class="text-base font-bold"
        md="text-xl ml-0"
      >
        {{ title }}
      </span>
      <p class="text-sm text-gray !my-0 line-clamp-1" md="block !my-4 ml-0">
        {{ description }}
      </p>
    </section>
  </a>
</template>

<style scoped>

</style>
