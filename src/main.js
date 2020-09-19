import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'amfe-flexible/index.js'
import './plugins/vant'
import api from './network'
Vue.prototype.$api = api

// 引入全局组件
import globalComp from './components/global-comp'
for (const key in globalComp) {
  Vue.use(globalComp[key])

}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
