import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@c/store'
import { jumpPc } from '@c/utils/routerBeforEach.js'
import * as filter from '@c/utils/filter'
import '@/assets/styles/reset.css'
import '@/assets/font/font.css'
import '@/assets/styles/index.scss'
import '@m/assets/styles/index.scss'
import VueLazyload from 'vue-lazyload'
import config from '@c/utils/config.js'
import '@/assets/fonts/iconfont.js'
import '@/assets/fonts/iconfont.css'
import components from '@c/components'
import 'lib-flexible'
import { Toast } from 'vant'
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill() // 移动端scrollTo behavior: 'smooth'动画失效的polyfill
Vue.use(VueLazyload)
Vue.use(components)
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.$config = config

Object.keys(filter).forEach(key => {
  // 注册全局filter
  Vue.filter(key, filter[key])
})

jumpPc()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
