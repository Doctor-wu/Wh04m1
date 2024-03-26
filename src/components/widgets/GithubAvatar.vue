<script setup lang="ts">
defineProps<{
  avatarId: string
}>()
</script>

<template>
  <img class="inline !rounded-4 h-5 !w-5 !m0 border" :src="`https://avatars.githubusercontent.com/u/${avatarId}`">
</template>

<style lang="scss" scoped></style>
