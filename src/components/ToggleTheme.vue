<script setup lang='ts'>
import { toggleDark } from '~/utils/toggleDark'
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
