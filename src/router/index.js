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
      meta: { title: '仪表盘 | わタし' },
      component: () => import('@/pages/Dashboard.vue')
    }, {
      path: 'article',
      name: 'article',
      meta: { title: '文章管理 | わタし' },
      component: () => import('@/pages/Article.vue')
    }, {
      path: 'admin',
      name: 'admin',
      meta: { title: '管理员 | わタし' },
      component: () => import('@/pages/Admin.vue')
    }]
  }, {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/pages/Login.vue')
  }]
})
