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
  smaller,
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
      greater('2xl').value ? 'mx-60' : '',
      smaller('md').value ? '!gap-3xl' : '',
    ]"
  >
    <template v-for="friend in friends" :key="friend.name">
      <a
        flex="~ justify-start items-center gap-4"
        class="overflow-hidden rounded-4 border border-[#8888] cursor-pointer h-50 transition-all" :class="[
          smaller('md').value ? '!h-35' : '',
        ]" hover="border-[#888]" :href="friend.link" target="_blank"
      >
        <section
          class="h-full w-50 overflow-hidden" :class="[
            smaller('md').value ? '!w-30vw' : '',
          ]"
        >
          <img
            :src="friend.avatarLink" alt="friend.name" class="h-full object-cover transition-all transition-duration-300" :class="[
              smaller('md').value ? 'h-auto !w-30vw' : '',
            ]"
            hover="scale-[1.15]"
          >
        </section>
        <section
          class="px-4 py-6 h-full" flex="~ 1 col gap-2" :class="[
            smaller('md').value ? '!pl-0 !pr-2 !py-2' : '',
          ]"
        >
          <span font-700 text-lg md:text-2xl>{{ friend.name }}</span>
          <span text-sm md:text-lg text-gray-600 dark:text-gray-400 v-html="friend.slogan" />
        </section>
      </a>
    </template>
  </p>
</template>

<style scoped></style>
