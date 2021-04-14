const state = {
  a: 1
}

const mutations = {
  changeA(state, data) { // test
    state.a = state.a + data
  }
}

const actions = {
  changeTest({commit}, data) {
    commit('changeA', data)
  }
}

const getters = {
  getA(state) {
    return state.a + 1
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
