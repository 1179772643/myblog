<script setup lang="ts">
import CodePullOutbar from '@/components/CodePullOutbar.vue'
</script>

<template>
  <CodePullOutbar />
  <div class=" absolute flex justify-center items-center h-screen w-screen z-0 code">
    <RouterView />
  </div>
</template>

<style scoped>
 .dark .code {
  --c-bg: #000;
  color: aliceblue;
}
</style>
