import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: {
      type: 'post'
      title: string
      draft?: boolean
      description?: string
      date: string
      lang?: 'en' | 'zh'
      tags: string[]
      redirect?: string
      duration?: string
      recording?: string
      upcoming?: boolean
      place?: string
    }
  }
}
