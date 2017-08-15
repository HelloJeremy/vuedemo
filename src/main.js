// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引用项目入口文件
import App from './App'
//import router from './router'
// 引用路由配置文件
import routes from './config/routes'
//配置全局方法
import api from './config/api.js'
// 将API方法绑定到全局
Vue.prototype.$myApi = api
// 使用配置文件规则
const router = new VueRouter({
    routes
})
//Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
new Vue({
  el: '#app',
  router,
  render:(h) => h(App)
})
