// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')  // 注意大小写
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('@/views/DataManagement.vue')
  },
  {  // 新增map路由配置
    path: '/map',
    name: 'Map',
    component: () => import('@/views/MapView.vue')  // 确保路径正确
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router