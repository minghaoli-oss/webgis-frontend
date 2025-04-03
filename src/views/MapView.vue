<!-- src/views/MapView.vue -->
<template>
    <div class="map-view">
      <div class="map-controls">
        <el-input v-model="searchText" placeholder="输入盆地/地区名称" />
        <el-button type="primary" @click="searchOnMap">定位搜索</el-button>
      </div>
      <BaseMap ref="baseMap" />
    </div>
  </template>
  
  <script>
  import BaseMap from '@/components/BaseMap.vue'
  
  export default {
    components: { BaseMap },
    data() {
      return {
        searchText: ''
      }
    },
    methods: {
      searchOnMap() {
        // 模拟地理编码（需替换真实API）
        const mockCoords = {
          '松辽盆地': [46.5, 125.0],
          '阿拉斯加盆地': [70.2, -148.5]
        }
        const coords = mockCoords[this.searchText]
        if (coords) {
          this.$refs.baseMap.flyTo(coords)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .map-controls {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }
  </style>