<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Post } from '~/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
  extra?: Post[]
}>()
const router = useRouter()
const routes: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.meta.frontmatter.draft)
  .filter(i => !i.path.endsWith('.html') && (i.meta.frontmatter.type || 'blog').split('+').includes(props.type))
  .map(i => ({
    path: i.meta.frontmatter.redirect || i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    lang: i.meta.frontmatter.lang,
    duration: i.meta.frontmatter.duration,
    recording: i.meta.frontmatter.recording,
    upcoming: i.meta.frontmatter.upcoming,
    redirect: i.meta.frontmatter.redirect,
    place: i.meta.frontmatter.place,
  }))

const posts = computed(() =>
  [...(props.posts || routes), ...props.extra || []]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .filter(i => !englishOnly.value || i.lang !== 'zh'),
)
</script>

<template>
  <template v-if="!posts.length">
    <div py2 op50>
      { nothing here yet }
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
