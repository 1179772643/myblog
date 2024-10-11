<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center gap-10  h-[100px] shadow-md w-full fixed z-10 bg-slate-300 open" hover-class="none" hover-stop-propagation="false">
    <RouterLink id="my-div" to="/home" class="text-[30px] relative justify-center top-[30px]" selectable="false" space="false" decode="false">
      首页
    </RouterLink>
    <RouterLink to="/code" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      项目/代码
    </RouterLink>
    <text class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      关于
    </text>
  </div>
</template>

<style scoped>
  div > div:hover {
  color: rgb(134, 134, 206);
  transform: scale(1.2);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
</style>
