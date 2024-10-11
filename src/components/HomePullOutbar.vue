<script lang="ts" setup>
const itemList = ref([
  { icon: '/src/assets/my_fill.png', title: '个人信息' },
  { icon: '/src/assets/Achievement.png', title: '个人成就' },
  { icon: '/src/assets/collection-fill.png', title: '个人收藏' },
])
</script>

<template>
  <!-- 测拉栏 -->
  <div class="w-[60px] bg-slate-200 border shadow-2xl fixed h-[100vh] z-0 overflow-hidden">
    <div v-for="(item, index) in itemList" :key="index" class="w-[800px]">
      <img :src="item.icon" alt="" class=" relative size-[40px] top-[200px] mt-[100px] left-[15px] opacity-[50%] icon">
      <div class="text-[30px] relative left-[100px] flex top-[160px]">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
 div > div:hover {
  color: rgb(134, 134, 206);
  transform: translateX(0px);
  width: 300px;
  transition:
    color 0.9s ease,
    transform 0.9s ease;
}
</style>
