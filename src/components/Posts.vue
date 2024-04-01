<script setup lang="ts">
import { useRouter } from 'vue-router'
import { breakpointsTailwind } from '@vueuse/core'
import { formatDate } from '~/utils/formatDate'
import type { Post } from '~/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
  extra?: Post[]
}>()
const router = useRouter()
const routes: Post[] = router
  .getRoutes()
  .filter(
    i =>
      i.path.startsWith('/posts')
      && i.meta.frontmatter.date
      && !i.meta.frontmatter.draft,
  )
  .filter(
    i =>
      !i.path.endsWith('.html')
      && (i.meta.frontmatter.type || 'blog')
        .split('+')
        .includes(props.type || 'blog'),
  )
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
    desc: i.meta.frontmatter.description,
    tags: i.meta.frontmatter.tags?.split(',').map(i => i.trim()),
  }))

const posts = computed(() =>
  [...(props.posts || routes), ...(props.extra || [])]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .filter(i => !englishOnly.value || i.lang !== 'zh'),
)

const {
  greater,
} = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <template v-if="!posts.length">
    <div py2 op50>
      nothing here yet
    </div>
  </template>
  <ul v-else>
    <template v-for="(post, idx) in posts" :key="post.path">
      <div
        class="slide-enter" :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms',
        }"
      >
        <li>
          <component
            :is="post.path.includes('://') ? 'a' : 'RouterLink'" v-bind="post.path.includes('://')
              ? {
                href: post.path,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
              : {
                to: post.path,
              }
            " class="item block font-normal mb-6 mt-2 no-underline"
          >
            <section class="relative" ws-nowrap>
              <span class="text-sm mr-2">
                {{ post.title }}
              </span>
              <span class="text-sm op50">
                {{ formatDate(post.date, false) }}
                <span v-if="post.duration">· {{ post.duration }}</span>
                <span
                  v-if="post.lang === 'zh'"
                  align-middle flex-none
                  :class="`text-xs bg-zinc:45 dark:bg-zinc:15 text-zinc5 px-1 py-0.5 rounded my-auto ml-2 ${
                    greater('sm').value ? 'absolute left--12 h-min top-0 bottom-0' : ''
                  }`"
                >中文</span>
                <span v-if="post.tags && greater('sm').value" class="ml-2 vertical-3% sm-['hidden']">
                  <span v-for="(tag, index) in post.tags" :key="index">
                    <span v-if="index > 0" class="mx-1">·</span>
                    <span class="text-xs bg-zinc:45 dark:bg-zinc:15 px-1 py-0.5 rounded" ws-nowrap>{{ tag.trim() }}</span>
                  </span>
                </span>
              </span>
            </section>
            <section v-if="post.desc" class="lh-4">
              <span class="text-xs op35 line-clamp-1">
                {{ post.desc }}
              </span>
            </section>
          </component>
        </li>
      </div>
    </template>
  </ul>
</template>

<style scoped></style>
