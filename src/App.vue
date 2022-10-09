<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from './components/sideBar.vue'

export default {
  name: "App",
  components: { SideBar }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
}
</style>
