import type { CustomFrontmatter } from './src/types'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: CustomFrontmatter
  }
}
