import Code from '@/page/Code.vue'

import { createRouter, createWebHistory } from 'vue-router'
// 引入路由参数
import Home from '@/page/Home.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/code',
      component: Code,
    },
  ],
})
// 暴露router
export default router
