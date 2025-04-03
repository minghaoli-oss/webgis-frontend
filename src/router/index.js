// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件（注意路径大小写敏感）
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')  // 正确路径写法
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/DataManagement.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/MapView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router