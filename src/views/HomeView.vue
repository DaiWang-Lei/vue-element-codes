<template>
  <el-container>
    <el-header class="header">Vue-element-component-test-本来的master</el-header>
    <el-container>
      <el-aside class="aside" style="height: 90vh" width="200px">
        <my-left-menu />
      </el-aside>
      <el-main style="height: 100vh">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyLeftMenu from "@/components/privateComponents/MyLeftMenu.vue";
export default {
  components: { MyLeftMenu },
};
</script>

<style lang="less" scoped>
.header{
  border-bottom: 1px solid rgb(223, 223, 223);

}
.aside {
  border-right: 1px solid rgb(223, 223, 223);
}
</style>
