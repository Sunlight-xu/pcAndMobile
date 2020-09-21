import Vue from 'vue'
import Router from 'vue-router'
import { beforEach } from './beforEach'

Vue.use(Router)
const routes = [
  // 路由缺省重定向
  {
    path: '*',
    redirect: '/pc/course-list',
    name: 'p-courseList',
    component: () =>
      import(/* webpackChunkName: "p-courseList" */ '@p/views/course/index.vue')
  },
  /**
   * 课程中心
   */
  {
    path: '/pc/course-list',
    name: 'p-courseList',
    component: () =>
      import(/* webpackChunkName: "p-courseList" */ '@p/views/course/index.vue')
  },
  /**
   * 课程详情
   */
  {
    path: '/pc/course-detail/:id',
    name: 'p-courseDetail',
    component: () =>
      import(
        /* webpackChunkName: "p-courseList" */ '@p/views/course/detail.vue'
      )
  },
  // 订单确认
  {
    path: '/pc/indent-detail/:id',
    name: 'p-indentDetail',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-courseDetail" */ '@p/views/course/buy/indent.vue'
      )
  },
  // 支付结果
  {
    path: '/pc/result-detail',
    name: 'p-resultDetail',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-resultDetail" */ '@p/views/course/buy/result.vue'
      )
  },
  /**
   * 我的课程
   */
  {
    path: '/pc/my-course',
    name: 'p-myCourse',
    component: () =>
      import(/* webpackChunkName: "p-myCourse" */ '@p/views/myCourse/index.vue')
  },
  {
    path: '/pc/my-course-all',
    name: 'p-myCourse-all',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-myCourse-all" */ '@p/views/myCourse/detail.vue'
      )
  },
  {
    path: '/pc/my-course-detail/:id',
    name: 'p-myCourse-all',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-my-course-detail" */ '@p/views/myCourse/courseDetail/courseDetail.vue'
      )
  },
  /**
   * 个人中心
   */
  {
    path: '/pc/mine',
    name: 'p-mine',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(/* webpackChunkName: "p-mine" */ '@p/views/mine/index.vue')
  },
  /**
   * 订单中心
   */
  {
    path: '/pc/mine/order-list',
    name: 'p-mine-orderList',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(/* webpackChunkName: "p-mine" */ '@p/views/mine/order/index.vue')
  },
  // 订单详情
  {
    path: '/pc/mine/order-detail/:id',
    name: 'p-mine-orderDetail',
    meta: {
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-mine-detail" */ '@p/views/mine/order/detail.vue'
      )
  },
  /**
   * 下载
   */
  // 下载页面
  {
    path: '/pc/download',
    name: 'p-download',
    component: () =>
      import(/* webpackChunkName: "p-download" */ '@p/views/download/index.vue')
  },
  // 关于我们
  {
    path: '/pc/introduce/',
    name: 'p-introduce',
    meta: {
      fullScene: true
    },
    component: () =>
      import(
        /* webpackChunkName: "p-introduce" */ '@p/views/introduce/index.vue'
      )
  }
]
const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach(beforEach)
export default router
