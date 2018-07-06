import axios from 'axios'
import { Loading, Message } from 'element-ui'
import store from '../store'
import router from '../router'
import { LOGOUT } from '../store/types'

axios.defaults.timeout = 10000

// 请求拦截器
let loadinginstace = null
axios.interceptors.request.use(config => {
  loadinginstace = Loading.service({
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0.3)'
  })
  if(store.state.mutations.token) {
    config.headers['Authorization'] = store.state.mutations.token
  }
  config.headers['Content-Type'] = 'application/json'
	return config
}, err => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(err)
})

axios.interceptors.response.use(req => {
  loadinginstace.close()
  return req.data
}, err => {
  loadinginstace.close()
  const d = err.response
  if(err && d.status) {
    switch (d.status) {
      // 验证未通过
      case 400:
        Message({
          message: err.response.data.msg,
          type: 'error',
          iconClass: 'el-icon-error'
        })
        break
      // token验证失败
      case 401:
        store.commit(LOGOUT)
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath }
        })
        break
      case 403:
        router.push({ path: '/403' })
        break
    }
    if(d.status !== 400) {
      Message({
        message: err.response.data.msg,
        type: 'warning',
        iconClass: 'el-icon-warning'
      })
    }
  }
  return Promise.reject(err)
})

export default axios
