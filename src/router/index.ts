import Code from '@/page/Code.vue'

import { createRouter, createWebHistory } from 'vue-router'
// 引入路由参数
import Home from '@/page/Home.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      children: [{
        path: '',
        redirect: '/personal',
      }, {
        name: 'Personal',
        path: '/personal',
        component: () => import('@/page/Personal.vue'),
      }, {
        name: 'Collection',
        path: '/collection',
        component: () => import('@/page/MyCollection.vue'),
      }, {
        name: 'Achievement',
        path: '/achievement',
        component: () => import('@/page/MyAchievement.vue'),
      }],
    },
    {
      name: 'daima',
      path: '/code',
      component: Code,
      children: [{
        path: '',
        redirect: '/mycode',
      }, {
        name: 'mycode',
        path: '/mycode',
        component: () => import('@/page/MyCode.vue'),
      }, {
        name: 'wodexiaowanju',
        path: '/mylittletoy',
        component: () => import('@/page/MyLittleToy.vue'),
      }],
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/page/About.vue'),
    },
  ],
})
// 暴露router
export default router
