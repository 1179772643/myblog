<!-- 渐变背景小玩意 -->
<script setup lang="ts">
// import { onMounted } from 'vue'
import 'css-doodle'

function changeBg() {
  const doodle = document.querySelector('css-doodle') as any
  if (doodle) {
    doodle.update()
  }
}
</script>

<template>
  <div class="doodle-container">
    <css-doodle>
      :doodle {
      @grid: 1x20 / 100vmin;
      }
      @place-cell: center;
      width: @rand(60vmin, 100vmin);
      height: @rand(60vmin, 100vmin);
      transform: translate(@rand(-120%, 120%), @rand(-80%, 80%)) scale(@rand(.8, 2.8)) skew(@rand(45deg));
      clip-path: polygon(
      @r(0, 30%) @r(0, 50%),
      @r(30%, 60%) @r(0%, 30%),
      @r(60%, 100%) @r(0%, 50%),
      @r(60%, 100%) @r(50%, 100%),
      @r(30%, 60%) @r(60%, 100%),
      @r(0, 30%) @r(60%, 100%)
      );
      background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf, #e136eb, #f57c23, #32ed39);
      opacity: @rand(.5, .9);
      position: relative;
      top: @rand(-80%, 80%);
      left: @rand(-80%, 80%);
      animation: colorChange @rand(6.1s, 26.1s) infinite @rand(-.5s, -2.5s) linear alternate;
      @keyframes colorChange {
      100% {
      left: 0;
      top: 0;
      filter: hue-rotate(360deg);
      }
      }
    </css-doodle>
    <p @click="changeBg">点击切换背景</p>
  </div>
</template>

<style scoped lang="scss">
 .dark .code {
  --c-bg: #000;
  color: aliceblue;
}
.doodle-container {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
}

.doodle-container::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  backdrop-filter: blur(100px);
  z-index: 1;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #000;
  z-index: 10;
}
</style>
