<script lang="ts" setup>
function scrollToPanel1() {
  window.location.hash = '#panel1'
}
</script>

<template>
  <button @click="scrollToPanel1">
    Start!
  </button>
</template>

<style scoped lang="scss">
button {
  opacity: 0.8;
  padding: 10px 60px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #efeedf;
  position: relative;
  font-weight: 1000;
  font-size: 25px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

button:hover {
  color: #e8e8e8;
}

button:hover::before {
  width: 100%;
}
</style>
