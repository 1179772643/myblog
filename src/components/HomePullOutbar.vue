<script lang="ts" setup>
const itemList = ref([
  { icon: '/src/assets/my_fill.png', title: '个人信息', path: '/personal', id: 1 },
  { icon: '/src/assets/Achievement.png', title: '个人成就', path: '/achievement', id: 2 },
  { icon: '/src/assets/collection-fill.png', title: '个人收藏', path: '/collection', id: 3 },
])

const isOpen = ref(false)
function openPullOutbar() {
  if (isOpen.value) {
    isOpen.value = false
  }
  else {
    isOpen.value = true
  }
}
</script>

<template>
  <!-- 测拉栏 -->
  <div class=" fixed top-[40px] content-start left-[15px] z-40 opacity-70 ">
    <label class="burger" for="burger">
      <input id="burger" type="checkbox" @click="openPullOutbar">
      <span />
      <span />
      <span />
    </label>
  </div>
  <transition name="slide-in" class="z-30">
    <div v-if="isOpen" class=" bg-slate-200 shadow-2xl fixed h-[100vh] overflow-hidden pullOutbar opacity-70 w-[250px]">
      <section v-for="(item, index) in itemList" :key="index" class="w-[800px] h-[30px]">
        <img :src="item.icon" alt="" class=" relative size-[40px] top-[200px] mt-[100px] left-[11px] opacity-[50%] icon">
        <a :href="`#panel${item.id}`" class="text-[30px] relative left-[100px] flex top-[160px]">
          {{ item.title }}
        </a>
      </section>
    </div>
  </transition>
</template>

<style scoped>
.dark .pullOutbar {
  color: aliceblue;
  background: #191919;
}
/* From Uiverse.io by Cevorob */
.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
.slide-in-enter-active {
  transition: transform 0.5s;
}
.slide-in-leave-active {
  transition: transform 0.5s;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(-100%);
}
</style>
