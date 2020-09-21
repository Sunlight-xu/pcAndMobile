import axios from 'axios'
import { Toast } from 'vant'
let server = axios.create({
  baseURL: process.env.VUE_APP_PAY_URL,
  timeout: 8000
})
import qs from 'qs'
server.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // const scode = sessionStorage.getItem('scode')
  // if (scode) {
  //   config.headers.scode = `${scode}`
  // }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
})
server.interceptors.response.use(
    res => {
    if (res.status === 200) {
      if (res.data.code === 0) {
        return res.data
      } else {
        // 错误请求跳转到课程列表页面
        Toast(res.data.tip)
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
    console.log(error)
  }
)
export default server
