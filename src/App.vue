<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- 全局导航栏 -->
    <nav class="main-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/data">数据管理</router-link>
      <router-link to="/map">地图检索</router-link>
    </nav>
    <!-- 页面内容容器 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
}
.main-nav {
  padding: 20px;
  background: #2c3e50;
}
.main-nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
}
.main-nav a.router-link-active {
  color: #42b983;
}
</style>