import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    redirect: 'dashboard',
    component: () => import('@/pages/Index.vue'),
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard.vue')
    }]
  }, {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/pages/Login.vue')
  }]
})
