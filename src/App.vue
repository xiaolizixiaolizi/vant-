<template>
  <div id="app">
    <h1>黑马头条</h1>

    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "APP",
  data() {
    return {};
  },
  created() {
    this.$api.getAnnouncements({ cityCode: "12223" }, { a: 1, b: 2 });
  },
};
</script>
<style lang="less">
#app {
  h1 {
    color: @color-primary;
    font-size: 75px;
  }
  .iconshanchu {
    color: @color-primary;
    font-size: 75px;
  }
}
</style>
