// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import axios from './utils/axios'
import { PROGRESS_CONF } from './config'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI)
Vue.use(VueProgressBar, PROGRESS_CONF)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// 路由跳转，判断是否是登录状态
router.beforeEach((to, form, next) => {
  if(to.path !== '/login') {
    if(!store.state.mutations.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
