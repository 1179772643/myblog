<script lang="ts" setup>
import 'animate.css'
</script>

<template>
  <div class="Personal h-screen w-screen flex flex-col justify-center items-center">
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
