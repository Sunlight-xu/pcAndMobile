import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/mobile/home',
        name: 'm-home',
        component: () => import(/* webpackChunkName: "m-home" */ '@m/views/home/index.vue')
    },
    {
      path: '/mobile/login',
      name: 'm-login',
      component: () => import(/* webpackChunkName: "m-login" */ '@m/views/login/index.vue') 
  }
]
const router = new Router({
  mode: 'history',
  routes
})

export default router
