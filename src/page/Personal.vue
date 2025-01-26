<script lang="ts" setup>
import 'animate.css'
</script>

<template>
  <image src="/src/assets/" class="fixed left-0 top-0 -z-20 size-full" />
  <div class="Personal">
    <div class=" absolute flex top-[230px] left-[200px] size-[150px] rounded-[50%] bg-black">
      <img src="/src/assets/myimg.jpg" alt="" class="rounded-[50%]">
    </div>
    <div class=" relative w-[100vh] justify-start bottom-[140px] animate__animated animate__fadeInDown">
      {{ $t('home.information.description') }}
      <div class=" text-[30px]">
        {{ $t('home.information.name') }}
      </div>
      <div class=" text-[18px]">
        {{ $t('home.information.front') }}
      </div>
      <div class=" text-[20px]">
        {{ $t('home.information.skill') }}
      </div>
    </div>
  </div>
</template>
