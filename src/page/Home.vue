<script setup lang="ts">
import HomePullOutbar from '@/components/HomePullOutbar.vue'
import personnal from '@/page/Personal.vue'
import Start from '@/page/Start.vue'
import { onMounted } from 'vue'
import MyAchievement from './MyAchievement.vue'

import MyCollection from './MyCollection.vue'

onMounted(() => {
  window.location.hash = ''
})
</script>

<template>
  <HomePullOutbar />
  <div class="home">
    <section id="panel0">
      <Start class="z-0" />
    </section>
    <section id="panel1">
      <personnal />
    </section>
    <section id="panel2">
      <MyAchievement />
    </section>
    <section id="panel3">
      <MyCollection class="z-10" />
    </section>
  </div>
</template>

<style scoped>
 .dark .home {
  color: aliceblue;
}
</style>
