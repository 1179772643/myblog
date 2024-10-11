<script lang="ts" setup>
import PullOutbar from '@/components/PullOutbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <PullOutbar />
  <div class="body">
    <div class="flex justify-center items-center relative top-[300px]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
