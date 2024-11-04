<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import { RouterLink } from 'vue-router'

const isDark = useDark()
isDark.value = false
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex justify-center gap-20  h-[100px] shadow-md w-full fixed z-20 bg-slate-300 open" hover-class="none" hover-stop-propagation="false">
    <RouterLink id="my-div" to="/home" class="text-[30px] relative justify-center top-[30px] flex " selectable="false" space="false" decode="false">
      <svg t="1728616895801" class="icon size-[30px] absolute top-[8px] right-[60px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4241" width="200" height="200"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" p-id="4242" fill="#515151"></path></svg>
      首页
    </RouterLink>
    <RouterLink to="/code" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      <svg t="1728617077561" class="icon size-[30px] absolute top-[8px] right-[135px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7245" width="200" height="200"><path d="M768 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H256c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h512m0-64H256c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h512c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z" fill="#515151" p-id="7246"></path><path d="M352 256h320v64h-320z" fill="#515151" p-id="7247"></path><path d="M352 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7248"></path><path d="M672 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7249"></path><path d="M352 480h320v64h-320z" fill="#515151" p-id="7250"></path><path d="M352 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7251"></path><path d="M672 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7252"></path><path d="M352 704h320v64h-320z" fill="#515151" p-id="7253"></path><path d="M352 736m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7254"></path><path d="M672 736m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#515151" p-id="7255"></path></svg>
      项目/代码
    </RouterLink>
    <RouterLink to="/about" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      <svg t="1728617242942" class="icon size-[30px] absolute top-[8px] right-[65px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8332" width="200" height="200"><path d="M512 1024C229.376 1024 0 794.624 0 512S229.376 0 512 0s512 229.376 512 512-229.376 512-512 512z m0-949.248C271.36 74.752 75.776 271.36 75.776 512S271.36 949.248 512 949.248 949.248 752.64 949.248 512 752.64 74.752 512 74.752z m0 753.664a45.44 45.44 0 0 1-45.056-45.056V444.416c0-25.6 20.48-45.056 45.056-45.056s45.056 19.456 45.056 45.056V783.36A45.44 45.44 0 0 1 512 828.416z m0-474.112c-24.576 0-45.056-20.48-45.056-46.08V240.64c0-24.576 20.48-45.056 45.056-45.056s45.056 20.48 45.056 45.056v67.584c0 25.6-20.48 46.08-45.056 46.08z" p-id="8333" fill="#515151"></path></svg>
      关于
    </RouterLink>
    <a
      :class="isDark ? 'icon-[carbon--moon]' : 'icon-[carbon--sun]'"
      class=" text-4xl hover:text-gray-700 top-[35px] relative"
      @click="toggleDark()"
    />
  </div>
</template>

<style scoped>
  div > div:hover {
  transform: scale(1.2);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.open > *:hover {
  transform: scale(1.2);
  color: grey;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
</style>
