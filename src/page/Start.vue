<script lang="ts" setup>
</script>

<template>
  <div class="start"></div>
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
</style>
