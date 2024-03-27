<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const isDark = useDark()
const {
  isSmaller,
} = useBreakpoints(breakpointsTailwind)
const opacity = computed(() => (isDark.value ? 0.45 : 0.55) + (isSmaller('md') ? 0.1 : 0))
const blur = computed(() => isSmaller('md') ? 'blur(100px)' : 'blur(150px)')
</script>

<template>
  <section id="land">
    <section class="g-polygon-1" />
    <section class="g-polygon-2" />
    <section class="g-polygon-3" />
  </section>
</template>

<style scoped>
#land {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;

  & > section {
    position: absolute;
    opacity: v-bind(opacity);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: v-bind(blur);
    z-index: 1;
  }
}

.g-polygon-1 {
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 45vw;
  height: 55vh;
  background: linear-gradient(#ffee55, #fdee99);
  clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
}

.g-polygon-2 {
  bottom: 0px;
  left: 30%;
  transform: translate(-50%, 0);
  width: 65vw;
  height: 50vh;
  background: linear-gradient(
    -36deg,
    #e950d1,
    #f980d9,
    #ff55ff,
    #ff2c55,
    #ff5e55
  );
  clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
}

.g-polygon-3 {
  bottom: 0px;
  left: 70%;
  transform: translate(-50%, 0);
  width: 65vw;
  height: 50vh;
  background: rgba(87, 80, 233);
  clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}
</style>
