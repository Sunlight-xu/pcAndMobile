import Vue from 'vue'
import Router from 'vue-router'
import { beforEach } from './beforEach'

Vue.use(Router)
const routes = [
  // 路由缺省重定向
  {
    path: '*',
    redirect: '/mobile/course-list',
    name: 'm-courseList',
    component: () =>
      import(/* webpackChunkName: "m-courseList" */ '@m/views/course/index.vue')
  },
  {
    path: '/mobile/login',
    name: 'm-login',
    component: () =>
      import(/* webpackChunkName: "m-login" */ '@m/views/login/index.vue')
  },
  /**
   * 课程中心
   */
  {
    path: '/mobile/course-list',
    name: 'm-courseList',
    component: () =>
      import(/* webpackChunkName: "m-courseList" */ '@m/views/course/index.vue')
  },
  /**
   * 课程详情
   */
  {
    path: '/mobile/course-detail/:id',
    name: 'm-courseDetail',
    component: () =>
      import(
        /* webpackChunkName: "m-courseList" */ '@m/views/course/detail.vue'
      ),
    meta: {
      back: true
    }
  },
  // 订单确认
  {
    path: '/mobile/indent-detail/:id',
    name: 'm-indentDetail',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-courseDetail" */ '@m/views/course/buy/indent.vue'
      )
  },
  // 支付结果
  {
    path: '/mobile/result-detail',
    name: 'm-resultDetail',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-resultDetail" */ '@m/views/course/buy/result.vue'
      )
  },

  /**
   * 选择年级页面
   */
  {
    path: '/mobile/grade-list',
    name: 'm-gradeList',
    component: () =>
      import(
        /* webpackChunkName: "m-gradeList" */ '@m/views/course/config/gradeList.vue'
      ),
    meta: {
      back: true
    }
  },

  /**
   * 我的课程
   */
  {
    path: '/mobile/my-course',
    name: 'm-myCourse',
    component: () =>
      import(/* webpackChunkName: "m-myCourse" */ '@m/views/myCourse/index.vue')
  },
  {
    path: '/mobile/my-course-all',
    name: 'm-myCourse-all',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-myCourse-all" */ '@m/views/myCourse/detail.vue'
      )
  },
  {
    path: '/mobile/my-course-detail/:id',
    name: 'm-course_detail',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-myCourseDetail" */ '@m/views/myCourse/courseDetail/courseDetail.vue'
      )
  },

  /**
   * 我的账户
   */
  {
    path: '/mobile/mine',
    name: 'm-mine',
    component: () =>
      import(/* webpackChunkName: "m-mine" */ '@m/views/mine/index.vue')
  },
  {
    path: '/mobile/mine-detail',
    name: 'm-mineDetail',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(/* webpackChunkName: "m-mineDetail" */ '@m/views/mine/detail.vue')
  },
  // 帮助中心
  {
    path: '/mobile/mine/help',
    name: 'm-mine-help',
    meta: {
      back: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-help" */ '@m/views/mine/help/index.vue'
      )
  },
  // 我的订单列表
  {
    path: '/mobile/mine/order-list',
    name: 'm-mine-orderList',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-order_list" */ '@m/views/mine/order/index.vue'
      )
  },
  // 订单详情
  {
    path: '/mobile/mine/order-detail/:id',
    name: 'm-mine-orderDetail',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-detail" */ '@m/views/mine/order/detail.vue'
      )
  },
  {
    path: '/mobile/mine/name',
    name: 'm-mine-name',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-name" */ '@m/views/mine/config/name.vue'
      )
  },
  {
    path: '/mobile/mine/school',
    name: 'm-mine-school',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-school" */ '@m/views/mine/config/school.vue'
      )
  },
  {
    path: '/mobile/mine/address',
    name: 'm-mine-address',
    meta: {
      back: true,
      checkLogin: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-mine-address" */ '@m/views/mine/config/address.vue'
      )
  },
  // 关于我们
  {
    path: '/mobile/introduce/',
    name: 'm-introduce',
    meta: {
      back: true
    },
    component: () =>
      import(
        /* webpackChunkName: "m-introduce" */ '@m/views/introduce/index.vue'
      )
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(beforEach)

export default router
