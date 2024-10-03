/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/25
 */
import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'layout',
    children: [{
      path: '',
      component: () => import('@/page/Home.vue'),
      name: 'home',
    }],
  },
] satisfies RouteRecordRaw[]
