import axios from 'axios'
import store from '@c/store'
import config from '@c/utils/config'
import { Toast } from 'vant'

let server = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 8000
})
import qs from 'qs'
import router from '@/pages/mobile/router'
server.interceptors.request.use(config => {
  const token = store.state.user.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  const scode = sessionStorage.getItem('scode')
  if (scode) {
    config.headers.scode = `${scode}`
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
})
server.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data.code === 200 || res.data.code === 302) {
        return res.data
      } else if (res.data.code === 10005) {
        Toast(res.data.tip)
        return {
          output: {}
        }
      } else {
        // 错误请求跳转到课程列表页面
        Toast(res.data.tip)
        router.push(`${config.baseURL}/course-list`)
        return {
          output: {}
        }
      }
    } else {
      res.data
      return Promise.reject(res)
    }
  },
  error => {
    const { response } = error // 拦截响应请求的错误信息
    if (response.status === 401) {
      // 待登录状态
      const routerObj = router.history.current
      // 重置用户信息
      store.dispatch('user/resetUserInfo')
      router.push({ name: 'm-login', query: { redirect: routerObj.fullPath } })
    }
    return Promise.reject(error)
  }
)
export default server
