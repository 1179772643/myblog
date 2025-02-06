<script lang="ts" setup>
import ButtonFirst from '@/components/buttonFirst.vue'
import buttonSecend from '@/components/buttonSecend.vue'
</script>

<template>
  <div class="start flex w-full h-full justify-center items-center">
    <div class="flex z-10 font mt-[-70px] h-[200px] items-center">
      Life is what happens

      <div class="text-[50px] relative">
        welcome my blog
      </div>
    </div>
    <div class="justify-center items-center flex z-10 absolute mt-[260px] mr-[300px]">
      <buttonSecend />
    </div>
    <div class=" justify-center items-center flex z-10 absolute mt-[260px] ml-[300px]">
      <ButtonFirst />
    </div>
  </div>
</template>

<style scoped lang="scss">
.start {
  background-image: url('@/assets/background/day.png');
  background-size: cover; /* 保持图片比例并覆盖整个容器 */
  background-repeat: no-repeat; /* 防止图片重复 */
  background-position: center; /* 将图片居中 */
  height: 100vh; /* 设置容器高度为视口高度 */
  width: 100%; /* 设置容器宽度为100% */
}

.dark .start {
  background-image: url('@/assets/background/night.png');
}
.font {
  font-size: 80px;
  font-family: 'Sketcomic';
  color: beige;
}
</style>
