---
title: 动画签名的制作
description: 分享我制作动画签名的经历
lang: zh
date: 2024-04-12T08:16:03.404Z
duration: 10 min
tags: svg, 动画
signature: true
decorator: false
---

> [英文版本 English Version](/posts/animation-signature)

一段时间前, 我搭建了自己的个人网站。我想要把他弄得酷炫一些, 其中动画签名就是我想要的一个元素。我曾经看到过 Anthony Fu 在他的个人网站上加的动画签名, 我觉得很酷, 所以我决定给自己也搞一个。

<ArticleCard
  title="Animated SVG Logo"
  description="一篇介绍如何制作 SVG Logo 动画的文章"
  href="https://antfu.me/posts/animated-svg-logo"
  cover="https://antfu.me/og/animated-svg-logo.png"
/>

于是我开始阅读 Anthony 的文章, 并尝试理解他是如何制作动画签名的。然而, 我发现他首先用他的压感笔来给自己制作了一个签名, 但我没有压感笔。到这我甚至一度都觉得自己可能做不出一个像样的签名了, 但是想了想还是坚持一下想想办法, 于是我开始拆解任务, 我的第一个任务就是找到一个获取签名的方法。

## 搞到一个签名

我最开始的想法是让 ChatGPT 为我生成一个签名, 但结果并不理想(说实话, 这个渲染出来的效果就和普通文本没差 😅)。

<Image src="/images/animation-signature/gpt-ask-for-signature.png" alt="ChatGPT Result" />

于是我转向了 Google, 并找到了一个叫 [<span i-mdi:web/> Signaturely](https://signaturely.com/online-signature/) 的网站。它提供了一个简单的方法, 通过输入你的名字并选择一个字体来生成一个签名。我尝试了几种字体, 最终找到了一个我喜欢的。

<Image src="/images/animation-signature/google-signature-generate.png" alt="signaturely snapshot" />

然而麻烦的事又来了, 我发现生成的文件格式是 PNG 而不是 SVG。所以我又面临了一个新问题, **如何将 PNG 转换为 SVG**?

<Image src="/images/animation-signature/signature-download-preview.png" alt="signature download preview" />

## 将 PNG 转换为 SVG

我选择再次相信 ChatGPT 一次, 问它如何将 PNG 转换为 SVG。这次, 它给了我一个比较靠谱的答案。

<Image src="/images/animation-signature/how-to-convert-png-to-svg.png" alt="ChatGPT Result" />

我找到了一个免费且相对易用的工具叫 InkScape。我上传了 PNG 文件, 然后经过一番鼓捣我终于得到了一个 path!

<Image src="/images/animation-signature/get-path-from-png.png" alt="ChatGPT Result" />

## 动画

在搞定签名的 SVG 之后, 给他加上动画就比较简单了, 我利用了 **stroke-dasharray** 和 **stroke-dashoffset** 来创建绘制效果, 并使用 `@keyframes` 来控制动画, 最终得到了一个相对比较满意的效果。以下是最终代码:

```vue
<script setup lang="ts">
const isDark = useDark()
const logoColor = computed(() => (isDark.value ? '#fdfdfd' : '#303030'))
</script>

<template>
  <svg style="transform: translate3d(0, 0, 0);" width="123" height="30" viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg">
    <path
      id="signaturePath"
      d="[Your Path]"
      :stroke="logoColor" stroke-width="2"
    />
  </svg>
</template>

<style>
#signaturePath {
  stroke-dasharray: 2400;
  stroke-dashoffset: 2400;
  fill: transparent;
  animation: drawSignature 8s linear infinite;
}

@keyframes drawSignature {
  0% {
    stroke-dashoffset: 2400;
  }

  15% {
    fill: transparent;
  }

  35%,
  75% {
    stroke-dashoffset: 0;
    fill: v-bind(logoColor);
  }

  90%,
  100% {
    stroke-dashoffset: 2400;
    fill: transparent;
  }
}
</style>
```

## 总结

最终, 我成功地制作了一个动画签名, 我对结果非常满意。最开始我发现 Anthony 用他的压感笔来创建他的签名时, 我真的一度都认为我可能搞不定这个签名了。但经历各种波折后, 我最终还是成功地搞定了并且效果也还不错, 这种感觉还是很不错的~
