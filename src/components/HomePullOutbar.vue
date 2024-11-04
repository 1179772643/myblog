<script lang="ts" setup>
const itemList = ref([
  { icon: '/src/assets/my_fill.png', title: '个人信息', path: '/personal' },
  { icon: '/src/assets/Achievement.png', title: '个人成就', path: '/achievement' },
  { icon: '/src/assets/collection-fill.png', title: '个人收藏', path: '/collection' },
])
</script>

<template>
  <!-- 测拉栏 -->
  <div class="w-[60px] bg-slate-200 border shadow-2xl fixed h-[100vh] z-10 overflow-hidden">
    <div v-for="(item, index) in itemList" :key="index" class="w-[800px] h-[30px] ">
      <img :src="item.icon" alt="" class=" relative size-[40px] top-[200px] mt-[100px] left-[11px] opacity-[50%] icon">
      <RouterLink :to="item.path" class="text-[30px] relative left-[100px] flex top-[160px] hover:translate-x-3">
        {{ item.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
 div > div:hover {
  color: rgb(134, 134, 206);
  transform: translateX(5px);
  width: 300px;
  transition:
    color 0.9s ease,
    width 0.5s ease,
    transform 0.9s ease;
}
</style>
