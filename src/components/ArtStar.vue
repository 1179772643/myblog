<script setup lang="ts">
import BackgroundStar from '@/components/BackgroundStar.vue'
import random from '@/utils/random.ts'
import { onMounted, onUnmounted } from 'vue'

let pX = $ref<null | number>(null)
let pY = $ref<null | number>(null)

const positions = Array.from({ length: 50 }, () => [random(0, 100), random(0, 100)])

function handleMove({ pageX, pageY }: { pageX: number, pageY: number }) {
  pX = pageX
  pY = pageY
}

onMounted(() => {
  document.body.addEventListener('mousemove', handleMove)
})

onUnmounted(() => {
  document.body.removeEventListener('mousemove', handleMove)
})
</script>

<template>
  <section class="absolute w-screen h-screen">
    <BackgroundStar
      v-for="(item, index) in positions" :key="index" :page-x="pX" :page-y="pY" :size="index / 20 + 4"
      :top="`${item[0]}%`" :left="`${item[1]}%`"
    />
  </section>
</template>
