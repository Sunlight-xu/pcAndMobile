import { getUserInfo, getAddress } from '@c/api/user'
import config from '@c/utils/config.js'
const state = {
  token: localStorage.getItem('token') || null,
  userInfo: null,
  address: null,
  showLoginModal: false
}
const actions = {
  async getUser({ commit, dispatch }, redirect) {
    await getUserInfo().then(
      res => {
        if (res.code === 200) {
          commit('setUser', res.output)
        } else {
          location.href = `${config.baseUrl}/login?redirect${redirect}`
        }
      },
      err => {
        console.log(err)
      }
    )
  },
  // 设置用户token
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  // 获取用户地址
  async getAddress({ commit }) {
    try {
      let { code, output } = await getAddress()
      if (code !== 200 || !output) {
        this.address = null
        return
      }
      output.areaStr = `${output.province} ${output.city} ${output.area}` || ''
      output.addr_id = output.id
      commit('SET_ADDRESS', output)
      return output
    } catch (error) {
      return error
    }
  },
  // 重置用户信息
  resetUserInfo({ commit }) {
    window.localStorage.removeItem('token')
    commit('setUser', null)
    commit('SET_TOKEN', null)
    commit('SET_ADDRESS', null)
  }
}
const mutations = {
  setUser(state, userInfo) {
    state.userInfo = userInfo
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ADDRESS(state, data) {
    state.address = data
  },
  SET_SHOWLOGINMODAL(state, data) {
    state.showLoginModal = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
