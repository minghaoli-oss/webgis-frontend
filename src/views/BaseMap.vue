<!-- src/components/BaseMap.vue -->
<template>
    <div id="map-container"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  export default {
    setup() {
      const mapInstance = ref(null)
  
      // 初始化地图
      onMounted(() => {
        mapInstance.value = L.map('map-container').setView([30, 104], 3)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(mapInstance.value)
  
        // 添加示例标记
        const marker1 = L.marker([46.5, 125.0])
          .bindPopup('大庆油田<br>储量：50亿吨')
          .addTo(mapInstance.value)
      })
  
      // 暴露地图操作方法
      const flyTo = (coords) => {
        mapInstance.value.flyTo(coords, 8)
      }
  
      return { flyTo }
    }
  }
  </script>
  
  <style>
  #map-container {
    height: 600px;
    width: 100%;
  }
  </style>