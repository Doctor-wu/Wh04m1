export interface Post {
  path: string
  title: string
  tags?: string[]
  place?: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}

export interface CustomFrontmatter {
  type: 'post'
  title: string
  signature?: boolean
  decorator?: boolean
  subtitle?: string
  class?: string
  tocAlwaysOn?: boolean
  display?: string
  wrapperClass?: string
  draft?: boolean
  description?: string
  date: string
  lang?: 'en' | 'zh'
  tags?: string
  redirect?: string
  duration?: string
  recording?: string
  upcoming?: boolean
  place?: string
  placeLink?: string
}
