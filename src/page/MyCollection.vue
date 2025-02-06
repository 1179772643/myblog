<script lang="ts" setup>
import { ref } from 'vue'
import { vDraggable } from 'vue-draggable-plus'

const connection = ref([
  { title: 'node', img: '/src/assets/vscode-icons--file-type-node.png', url: 'https://nodejs.org/zh-tw' },
  { title: 'element', img: '/src/assets/ep--element-plus.png', url: 'https://element-plus.org/zh-CN/' },
  { title: 'vue3', img: '/src/assets/Vue.png', url: 'https://cn.vuejs.org/' },
  { title: 'nuxt.js', img: '/src/assets/devicon--nuxtjs.png', url: 'https://www.nuxtjs.cn/' },
])

// 从localStorage中读取保存的状态即重新调用该状态
const savedState = localStorage.getItem('draggableState')
if (savedState) {
  // JSON.parse() 方法用于将一个 JSON 字符串转换为 JavaScript 对象
  connection.value = JSON.parse(savedState)
}

// 在拖拽结束后通过setItem来保存状态
function saveState() {
  localStorage.setItem('draggableState', JSON.stringify(connection.value))
}
</script>

<template>
  <div class="h-screen w-sceen">
    <div class="flex text-[38px] animate__animated animate__fadeIn top-[200px] relative justify-center">
      {{ $t('home.myCollection.description') }}
    </div>
    <div
      v-draggable="[
        connection,
        {
          animation: 150,
          onEnd: saveState,
        },
      ]" class=" relative flex shadow-inner bg-inherit flex-wrap justify-center top-[250px]"
    >
      <a v-for="(item, index) in connection" :key="index" :href="item.url" target="_blank" class=" flex-wrap relative h-[190px] m-[20px] w-[150px] flex justify-center items-center rounded-[30px] box-shadow-custom container">
        <img class="size-25 top-[10px] absolute" :src="item.img">
        <text class="text-[30px] relative top-[70px]">
          {{ item.title }}
        </text>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .dark .container {
  color: rgb(150, 169, 185);
  background: #191919;
}

.container:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
