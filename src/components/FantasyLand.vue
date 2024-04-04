<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const isDark = useDark()
const {
  isSmaller,
} = useBreakpoints(breakpointsTailwind)
const opacity = computed(() => (isDark.value ? 0.44 : 0.52) + (isSmaller('md') ? 0.1 : 0))
const blur = computed(() => `blur(${(isSmaller('md') ? 100 : 160) + (isDark ? 10 : 0)}px)`)
</script>

<template>
  <section id="fantasy-land">
    <section class="g-polygon-1" />
    <section class="g-polygon-2" />
    <section class="g-polygon-3" />
  </section>
</template>

<style scoped>
#fantasy-land {
  will-change: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  filter: v-bind(blur);

  & > section {
    position: absolute;
    opacity: v-bind(opacity);
    transition: all ease-out 0.5s;
    transform: scale(1);
  }
}

.g-polygon-1 {
  bottom: 100px;
  left: 25%;
  transform: translate(-50%, 0);
  width: 45vw;
  height: 55vh;
  background: linear-gradient(#ffee55, #fdee99);
  clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
  animation: scale-in-middle 2.5s linear;
}

.g-polygon-2 {
  bottom: 0px;
  left: 2%;
  transform: translate(-50%, 0);
  width: 65vw;
  height: 50vh;
  animation: scale-in-bottom 2.5s linear;
  background: linear-gradient(
    -36deg,
    #e950d1,
    #f980d9,
    #ff55ff,
    #ff2c55,
    #ff5e55
  );
  clip-path: polygon(10% 0, 100% 70%, 100% 100%, 5% 90%);
}

.g-polygon-3 {
  bottom: 0px;
  left: 28%;
  transform: translate(-50%, 0);
  width: 65vw;
  height: 50vh;
  background: rgba(87, 80, 233);
  animation: scale-in-bottom 2.5s linear;
  clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}

@keyframes scale-in-bottom {
  0% {
    transform: scale(0.25);
    bottom: 50px;
  }

  40% {
    transform: scale(1.15);
    bottom: 40px;
  }

  100% {
    transform: scale(1);
    bottom: 0;
  }
}

@keyframes scale-in-middle {
  0% {
    transform: scale(0.25);
    bottom: 150px;
  }

  40% {
    transform: scale(1.15);
    bottom: 140px;
  }

  100% {
    transform: scale(1);
    bottom: 100px;
  }
}
</style>
