<script setup lang="ts">

</script>

<template>
  <section id="land">
    <div class="g-polygon-1" />
    <div class="g-polygon-2" />
    <div class="g-polygon-3" />
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

  & > div {
    position: absolute;
    opacity: 0.5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(150px);
    z-index: 1;
  }
}

.g-polygon-1 {
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 714px;
  height: 390px;
  background: linear-gradient(#ffee55, #fdee99);
  clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
}

.g-polygon-2 {
  bottom: 0px;
  left: 30%;
  transform: translate(-50%, 0);
  width: 1000px;
  height: 450px;
  background: linear-gradient(-36deg, #e950d1, #f980d9);
  clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
}

.g-polygon-3 {
  bottom: 0px;
  left: 70%;
  transform: translate(-50%, 0);
  width: 1000px;
  height: 450px;
  background: rgba(87, 80, 233);
  clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}
</style>
