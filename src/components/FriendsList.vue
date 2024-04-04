<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

defineProps<{
  friends: {
    name: string
    link: string
    avatarLink: string
    slogan: string
  }[]
}>()

const {
  greater,
} = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <p :class="greater('2xl').value ? 'mx-50' : ''">
    <section font-700 text-3xl>
      Doctor Wu's Friends
    </section>
  </p>
  <p
    class="wrapper grid grid-cols-1 gap-5xl mt-12" :class="[
      greater('lg').value ? 'grid-cols-2' : '',
      greater('xl').value ? 'grid-cols-3' : '',
      greater('2xl').value ? 'mx-50' : '',
    ]"
  >
    <template v-for="friend in friends" :key="friend.name">
      <a
        flex="~ justify-start items-center gap-4" class="overflow-hidden rounded-3 border h-50" :href="friend.link"
        target="_blank"
      >
        <img :src="friend.avatarLink" alt="friend.name" class="h-full object-cover">
        <section class=" px-4 py-6 h-full" flex="~ col gap-2">
          <span font-700 text-2xl>{{ friend.name }}</span>
          <span v-html="friend.slogan" />
        </section>
      </a>
    </template>
  </p>
</template>

<style scoped></style>
