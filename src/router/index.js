import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/pages/Index.vue')
  }, {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/pages/Login.vue')
  }]
})
