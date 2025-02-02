<script setup lang="ts">
import HomePullOutbar from '@/components/HomePullOutbar.vue'
import personnal from '@/page/Personal.vue'
import Start from '@/page/Start.vue'
import MyAchievement from './MyAchievement.vue'
import MyCollection from './MyCollection.vue'
</script>

<template>
  <HomePullOutbar />
  <div class="home">
    <Start />
    <section id="panel1">
      <personnal />
    </section>
    <section id="panel2">
      <MyAchievement />
    </section>
    <section id="panel3">
      <MyCollection />
    </section>
  </div>
</template>

<style scoped>
 .dark .home {
  color: aliceblue;
}
</style>
