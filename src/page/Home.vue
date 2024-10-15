<script setup lang="ts">
import HomePullOutbar from '@/components/HomePullOutbar.vue'
</script>

<template>
  <HomePullOutbar />
  <div class=" absolute flex justify-center items-center h-screen w-screen z-0 home">
    <RouterView />
  </div>
</template>

<style scoped>
 .dark .home {
  --c-bg: #000;
  color: aliceblue;
}
</style>
