<script lang="ts" setup>
const connection = [
  { title: 'node', img: '/src/assets/vscode-icons--file-type-node.png', url: 'https://nodejs.org/zh-tw' },
  { title: 'element', img: '/src/assets/ep--element-plus.png', url: 'https://element-plus.org/zh-CN/' },
  { title: 'vue3', img: '/src/assets/Vue.png', url: 'https://cn.vuejs.org/' },
]
</script>

<template>
  <div class="flex absolute top-[140px] text-[38px] animate__animated animate__fadeIn">
    {{ $t('home.myCollection.description') }}
  </div>
  <div class=" relative top-[-80px] w-[87%] flex shadow-inner bg-inherit flex-wrap">
    <a v-for="(item, index) in connection" :key="index" :href="item.url" target="_blank" class=" flex-wrap relative h-[190px] m-[20px] w-[150px] flex justify-center items-center rounded-[30px] box-shadow-custom container">
      <img class="size-25 top-[10px] absolute" :src="item.img">
      <text class="text-[30px] relative top-[70px]">
        {{ item.title }}
      </text>
    </a>
  </div>
</template>

<style scoped>
  .dark .container {
  color: aliceblue;
  background: #191919;
}

.container:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
