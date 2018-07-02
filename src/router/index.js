import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  }, {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/pages/Login.vue')
  }]
})
