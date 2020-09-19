<!-- TabBar -->
<template>
  <div
    class="tab"
    v-if="defaultTarBar.textList.length!==0"
    :style="{width:defaultTarBar.textList.length*0.5+'rem'}"
  >
    <span
      v-for="(item, index) in defaultTarBar.textList"
      :key="index"
      :class="[defaultTarBar.active===index?'active':'']"
      @click="tabClick(index,item)"
    >{{item}}</span>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  props: {
    tabBar: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultTarBar: {
        textList: [],
        active: 0,
      },
    };
  },
  methods: {
    initDefaultTarBar() {
      this.defaultTarBar = { ...this.defaultTarBar, ...this.tabBar };
    },
    tabClick(index, item) {
      // console.log(index, item);
      this.defaultTarBar.active = index;
      this.tabBar.active = index;
    },
  },
  created() {
    this.initDefaultTarBar();
  },
  watch: {
    "tabBar.active": {
      handler(val) {
        this.defaultTarBar.active = val;
      },
    },
  },
};
</script>
<style lang="less" scoped>
.tab {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  // width: 100px;
  background: #1f4b74;
  overflow: hidden;
  border-radius: 0.3rem;
  cursor: pointer;
  text-align: center;

  span {
    flex: 1; //平分
    color: #5addff;
  }

  .active {
    background: #5addff;

    font-size: 0.18rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #070931;
  }
}
</style>