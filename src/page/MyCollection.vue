<script lang="ts" setup>
const connection = [
  { title: 'vue3', img: '/src/assets/Vue.png' },
  { title: 'vue3', img: '/src/assets/Vue.png' },
  { title: 'vue3', img: '/src/assets/Vue.png' },
]
</script>

<template>
  <div class="flex absolute top-[140px] text-[38px]">
    这里是我收藏的一些网站介绍和资源噢
  </div>
  <div class=" relative top-[-80px] w-[87%] flex shadow-inner bg-inherit flex-wrap">
    <div v-for="(item, index) in connection" :key="index" class=" flex-wrap relative h-[190px] m-[20px] w-[150px] flex justify-center items-center rounded-[30px] box-shadow-custom">
      <img class="size-25 top-[10px] absolute" :src="item.img">
      <text class="text-[30px] relative top-[70px]">
        {{ item.title }}
      </text>
    </div>
  </div>
</template>
