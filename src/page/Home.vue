<script setup lang="ts">
import HomePullOutbar from '@/components/HomePullOutbar.vue'
</script>

<template>
  <HomePullOutbar />
  <div class=" absolute flex justify-center items-center h-screen w-screen z-0">
    <RouterView />
  </div>
</template>
