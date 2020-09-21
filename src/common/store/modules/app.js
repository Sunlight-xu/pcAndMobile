const state = {
  basePath: '',
  scode: null
}
const actions = {
  setScode({commit}, code) {
    commit('SET_SCODE', code)
  }
}
const mutations = {
  SET_SCODE (state, code) {
    state.scode = code
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
