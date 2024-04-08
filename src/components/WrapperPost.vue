<script setup lang="ts">
import type { CustomFrontmatter } from '~/types'
import { formatDate } from '~/utils/formatDate'

const { frontmatter } = defineProps<{
  frontmatter: CustomFrontmatter
}>()

const router = useRouter()
const route = useRoute()
const content = ref<HTMLElement>()

const base = getHostName()
const tweetUrl = computed(
  () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Reading @Doctorwu666\'s ${base}${route.path}\n\nI think...`)}`,
)
onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash))
      if (el) {
        const rect = el.getBoundingClientRect()
        const y = window.scrollY + rect.top - 40
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
        return true
      }
    }
  }

  const handleAnchors = (event: MouseEvent & { target: HTMLElement }) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  setTimeout(() => {
    if (!navigate())
      setTimeout(navigate, 1000)
  }, 1)
})
</script>

<template>
  <ClientOnly v-if="frontmatter.decorator">
    <FantasyLand v-if="frontmatter.decorator" />
  </ClientOnly>
  <section
    v-if="frontmatter.display ?? frontmatter.title" class="prose m-auto mb-8"
    :class="[frontmatter.wrapperClass]"
  >
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 !-mt-6 slide-enter-50">
      {{ formatDate(frontmatter.date, false) }}
      <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      <span v-if="frontmatter.tags" class="ml-2 vertical-4%">
        <span v-for="(tag, index) in frontmatter.tags.split(',') " :key="index">
          <span v-if="index > 0" class="mx-1">·</span>
          <span class="text-xs bg-zinc:45 dark:bg-zinc:15 px-1 py-0.5 rounded" ws-nowrap>{{ tag.trim() }}</span>
        </span>
      </span>
    </p>
    <p v-if="frontmatter.place" class="mt--4!">
      <span op50>at </span>
      <a v-if="frontmatter.placeLink" :href="frontmatter.placeLink" target="_blank">
        {{ frontmatter.place }}
      </a>
      <span v-else font-bold>
        {{ frontmatter.place }}
      </span>
    </p>
    <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic slide-enter">
      {{ frontmatter.subtitle }}
    </p>
    <p v-if="frontmatter.draft" class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2>
      This is a draft post, the content may be incomplete. Please check back
      later.
    </p>
  </section>
  <article ref="content" :class="[frontmatter.tocAlwaysOn ? 'toc-always-on' : '', frontmatter.class]">
    <slot />
  </article>
  <section v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
    <section v-if="frontmatter.signature" class="flex justify-end mb-12 !mt-24">
      <Signature />
    </section>
    <template v-if="frontmatter.duration">
      <span font-mono op50>> </span>
      <span op50>comment on </span>
      <a :href="tweetUrl" target="_blank" op50>twitter</a>
    </template>
    <br>
    <span font-mono op50>> </span>
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'" class="font-mono op50 hover:op75"
      v-text="'cd ..'"
    />
  </section>
</template>
