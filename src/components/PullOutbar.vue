<script lang="ts" setup>
</script>

<template>
  <!-- 测拉栏 -->
  <div class="w-[30px] bg-slate-200 border shadow-2xl fixed h-[100vh] flex z-0 open:">
    <div class=" absolute top-1/2 text-[20px] left-[6px] cursor-pointer open">
      111
    </div>
  </div>
</template>

<style scoped>
 div > div:hover {
  color: rgb(134, 134, 206);
  transform: translateX(25px);
  width: 400px;
  transition:
    color 0.9s ease,
    transform 0.9s ease;
}
</style>
