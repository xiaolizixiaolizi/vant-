import TabBar from './TabBar'

export default {
  //Vue.use()方法就会自动执行install
  install(Vue) {
    Vue.component(TabBar.name , TabBar) ////获取组件的名字 当做全局组件名字使用

  }

}