<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-eleme"></i>
          <span slot="title">Element</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="1-1">
            <span slot="title">Input</span>
            <router-link to="/input">
              <el-menu-item index="1-1"> Input输入框 </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu-item-group>
        <el-menu-item-group >
          <el-submenu index="1-2">
            <span slot="title">Form</span>
            <router-link to="/form">
              <el-menu-item index="1-3"> Form表单 </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
