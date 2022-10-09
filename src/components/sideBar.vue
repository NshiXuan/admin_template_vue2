<template>
  <div class="sidebar">
    <el-menu default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item index="/home">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/class">
        <span slot="title">班级管理</span>
      </el-menu-item>
      <el-menu-item index="/teacher">
        <span slot="title">教师管理</span>
      </el-menu-item>
      <el-menu-item index="/student">
        <span slot="title">学生管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100vh;

  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>