<script setup>
import { ref } from 'vue'

const activePanel = ref(1)
const panels = ref([1, 2, 3, 4, 5])

window.addEventListener('wheel', (event) => {
  const delta = event.deltaY > 0 ? 1 : -1
  if (delta > 0 && activePanel.value < panels.value.length) {
    activePanel.value++
  }
  else if (delta < 0 && activePanel.value > 1) {
    activePanel.value--
  }
})
</script>

<template>
  <div class="container">
    <div class="nav">
      <input id="nav1" v-model="activePanel" type="radio" :value="1">
      <a href="#panel1">导航1</a>
      <input id="nav2" v-model="activePanel" type="radio" :value="2">
      <a href="#panel2">导航2</a>
      <input id="nav3" v-model="activePanel" type="radio" :value="3">
      <a href="#panel3">导航3</a>
      <input id="nav4" v-model="activePanel" type="radio" :value="4">
      <a href="#panel4">导航4</a>
      <input id="nav5" v-model="activePanel" type="radio" :value="5">
      <a href="#panel5">导航5</a>
    </div>
    <div class="scroll">
      <section v-for="(panel, index) in panels" :id="`panel${index + 1}`" :key="index" class="panel" :class="{ panelColor: index % 2 !== 0 }">
        <div class="icon" :data-icon="String.fromCharCode(97 + index)" />
        <h1>Serendipity{{ index + 1 }}</h1>
        <p>you are my sunshine</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.scroll {
  height: 100vh;
}

.panel {
  height: 100vh;
}

.panelColor {
  background-color: #f0f0f0;
}
</style>
