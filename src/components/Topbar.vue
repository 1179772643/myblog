<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <view class="flex justify-center gap-10 relative h-[100px]" hover-class="none" hover-stop-propagation="false">
    <RouterLink to="/home" class="text-[30px] relative justify-center top-[30px]" selectable="false" space="false" decode="false">
      首页
    </RouterLink>
    <RouterLink to="/code" class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      项目/代码
    </RouterLink>
    <text class="text-[30px] relative  top-[30px]" selectable="false" space="false" decode="false">
      关于
    </text>
  </view>
</template>
