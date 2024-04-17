---
title: Animated Signature
description: Experience of making an animation signature
lang: en
date: 2024-04-12T08:16:03.404Z
duration: 10 min
tags: svg, animation
signature: true
decorator: false
---

> [中文版本 Chinese Version](/posts/animation-signature-zh)

A few days ago, I built my own personal website and wanted to create some cool stuff to make it fancy. One of those things is making an animated signature. I once saw Anthony Fu's animated signature and thought it was really cool, so I decided to one for myself.

<ArticleCard
  title="Animated SVG Logo"
  description="An article about how to create an animated SVG logo."
  href="https://antfu.me/posts/animated-svg-logo"
  cover="https://antfu.me/og/animated-svg-logo.png"
/>

And I started to read Anthony's article, tried to understand how it works. However, I found he created his signature by his pressure-sensitive pen which I don't have. So my first task is to find a way to get a signature.

## Get a Signature

My initial thought was to ask ChatGPT to generate me a signature, but the outcome was not satisfactory (to be honest, it was just plain text 😅).

<Image src="/images/animation-signature/gpt-ask-for-signature.png" alt="ChatGPT Result" />

So I turned to Google and found a website called [<span i-mdi:web/> Signaturely](https://signaturely.com/online-signature/). It provides a simple way to generate a signature by typing your name and selecting a font. I tried a few fonts and finally found one that I like.

<Image src="/images/animation-signature/google-signature-generate.png" alt="signaturely snapshot" />

However I found the file format is PNG instead of SVG, so I got another problem, **how to convert a PNG to SVG**?

<Image src="/images/animation-signature/signature-download-preview.png" alt="signature download preview" />

## Convert PNG to SVG

I choose to trust ChatGPT one more time and asked it how to convert a PNG to SVG. This time, it gave me a good answer.

<Image src="/images/animation-signature/how-to-convert-png-to-svg.png" alt="ChatGPT Result" />

I found a free and relatively easy-to-use tool called InkScape. I uploaded the PNG file and I somehow got an path!

<Image src="/images/animation-signature/get-path-from-png.png" alt="ChatGPT Result" />

## Animation

Now I have the path, I can start to make the animation. I use **stroke-dasharray** and **stroke-dashoffset** to create the drawing effect, and use `@keyframes` to control the animation. Here is the final code:

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

## Wrap Up

I'm really happy with the result. When I found Anthony used his pressure-sensitive pen to create his signature, I thought maybe I couldn't make it. But when finally I found a way to make it, I felt really proud of myself.

Sharing is caring, so I decided to write this article to share my experience. I hope you can find it helpful. If you have any questions, feel free to ask me.
