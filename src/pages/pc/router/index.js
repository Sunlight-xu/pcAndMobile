import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/pc/home',
        name: 'p-home',
        component: () => import(/* webpackChunkName: "p-home" */ '@p/views/home/index.vue')
    },
    {
      path: '/pc/login',
      name: 'p-login',
      component: () => import(/* webpackChunkName: "p-login" */ '@p/views/login/index.vue') 
  }
]
const router = new Router({
  mode: 'history',
  routes
})

export default router
