import { getWechatAuthApi } from '@c/api/user'
import store from '@c/store'
import router from '@/pages/mobile/router'

// 微信授权
const getWechatAuth = async next => {
  const url = window.location.href
  let { code, output } = await getWechatAuthApi({ indexurl: url })
  // 302跳转至微信授权
  if (code === 302) {
    window.location.href = output
    return
  }
  if (code === 200) {
    sessionStorage.setItem('wechatAuth', 'y')
    next()
  }
}

export const beforEach = async (to, from, next) => {
  if (to.query.scode) {
    sessionStorage.setItem('scode', to.query.scode)
  }
  // 是否首次进入项目 
  if (sessionStorage.wechatAuth !== 'y' && process.env.NODE_ENV !== 'local') {
    // 检测当前用户是否已经微信授权
    getWechatAuth(next)
    return
  }
  // 用户项目内跳转,正常进入页面
  // 页面需要登录
  if (to.meta.checkLogin) {
    // 没有token
    if (!store.state.user.token) {
      router.push({ name: 'm-login', query: { redirect: from.fullPath } })
    } else if (store.state.user.token && !store.state.user.userInfo) {
      await store.dispatch('user/getUser')
      next()
    } else {
      next()
    }
  } else {
    // 页面不需要登录
    if (!store.state.user.token) {
      next()
    } else {
      // 有token，没有用户信息
      if (!store.state.user.userInfo) {
        await store.dispatch('user/getUser')
        next()
        return
      }
      next()
    }
  }
}
