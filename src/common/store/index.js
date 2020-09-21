import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import app from './modules/app'
import user from './modules/user'
import course from './modules/course'
const store = new Vuex.Store({
  modules: {
    app,
    user,
    course
  }
})

export default store
