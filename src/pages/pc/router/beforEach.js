import store from '@c/store'

export const beforEach = async (to, from, next) => {
  // 用户项目内跳转,正常进入页面
  // 页面需要登录
  if (to.meta.checkLogin) {
    // 没有token
    if (!store.state.user.token) {
      next('/pc/course-list')
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
