<template>
  <div id="app">
    <home-view />
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";
export default {
  components: { HomeView },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}

#app {
  height: 10vh;
  line-height: 10vh;
  color: #2c3e50;
}
</style>
