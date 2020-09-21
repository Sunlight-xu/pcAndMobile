import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@c/store'
import { jumpMobile } from '@c/utils/routerBeforEach.js'
import * as filter from '@c/utils/filter'
import VueLazyload from 'vue-lazyload'
import config from '@c/utils/config.js'
import '@/assets/styles/reset.css'
import '@/assets/font/font.css'
import '@/assets/styles/index.scss'
import '@p/assets/styles/index.scss'
import '@p/assets/styles/element-cover.scss'
import '@p/assets/styles/element-variables.scss'
import '@/assets/fonts/iconfont.js'
import '@/assets/fonts/iconfont.css'
import components from '@c/components'
import { MessageBox, Message } from 'element-ui'

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.use(components)
Object.keys(filter).forEach(key => {
  // 注册全局filter
  Vue.filter(key, filter[key])
})

jumpMobile()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
