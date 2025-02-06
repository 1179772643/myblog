<script setup lang="ts">
import CodePullOutbar from '@/components/CodePullOutbar.vue'
import MyCode from './MyCode.vue'
import MyLittleToy from './MyLittleToy.vue'
</script>

<template>
  <CodePullOutbar />
  <div class="code">
    <section id="panel1">
      <MyCode />
    </section>
    <section id="panel2">
      <MyLittleToy />
    </section>
  </div>
</template>

<style scoped>
 .dark .code {
  --c-bg: #000;
  color: aliceblue;
}
</style>
