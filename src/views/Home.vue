<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>全球油气勘探案例库</h1>
      <!-- 地图容器 -->
      <div class="map-wrapper">
        <BaseMap />
      </div>
      <!-- 快速功能入口 -->
      <div class="quick-actions">
        <el-button type="primary" @click="$router.push('/data')">数据管理</el-button>
        <el-button @click="$router.push('/map')">高级检索</el-button>
      </div>
    </div>
  </template>
  
  <script>
  import BaseMap from '@/components/BaseMap.vue'
  
  export default {
    name: 'OilHome', 
    components: { BaseMap }
  }
  </script>
  
  <style scoped>
  .map-wrapper {
    height: 400px;
    margin: 20px 0;
    border: 1px solid #ddd;
  }
  .quick-actions {
    text-align: center;
    margin-top: 30px;
  }
  </style>