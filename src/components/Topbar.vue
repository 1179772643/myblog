<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import { RouterLink } from 'vue-router'

const isDark = useDark()
isDark.value = false
const toggleDark = useToggle(isDark)

// 设置语言
const { locale } = useI18n()
function changeLanguage() {
  if (locale.value === 'en') {
    locale.value = 'zh'
  }
  else {
    locale.value = 'en'
  }
}
</script>

<template>
  <div class="flex justify-center gap-20  h-[100px] shadow-md w-full fixed z-20 bg-slate-300 open opacity-50" hover-class="none" hover-stop-propagation="false">
    <RouterLink id="my-div" to="/home" class="text-[30px] relative justify-center top-[30px] flex " selectable="false" space="false" decode="false">
      {{ $t('topBar.home') }}
    </RouterLink>
    <RouterLink to="/code" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      {{ $t('topBar.code') }}
    </RouterLink>
    <RouterLink to="/about" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      {{ $t('topBar.about') }}
    </RouterLink>
    <a
      :class="isDark ? 'icon-[carbon--moon]' : 'icon-[carbon--sun]'"
      class=" text-4xl hover:text-gray-700 top-[35px] relative"
      @click="toggleDark()"
    />
    <button class="icon-[carbon--ibm-watson-language-translator] text-[30px] mt-[38px]" @click="changeLanguage"/>
  </div>
</template>

<style scoped>
  div > div:hover {
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.open > *:hover {
  color: grey;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
.dark .open {
  color: aliceblue;
  background: #191919;
}
</style>
