const state = {
  subjectIndex: 0,
  gradeId: 8
}
const actions = {
  setGrade({commit}, id) {
    commit('SET_GRADE_ID', id)
  },
  setSubject({commit}, index) {
    commit('SET_SUBJECT_ID', index)
  }
}
const mutations = {
  SET_SUBJECT_ID (state, index) {
    state.subjectIndex = index
  },
  SET_GRADE_ID (state, id) {
    state.gradeId = id
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
