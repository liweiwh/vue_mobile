<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view />
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.box {
  width: 375px;
  height: 200px;
  background-color: red;
}
</style>
