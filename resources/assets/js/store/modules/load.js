export default {
  state: {
    loading : "",
  },

  mutations: {
    activeLoading (state, status) {
      state.loading = true
    }
  },

  actions: {
    showLoading ({ commit }, status) {
      commit('activeLoading', true)
    }
  }
}
