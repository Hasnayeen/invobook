export default {
  state: {
    loading: false,
    office: null
  },

  mutations: {
    getOffice (state, office) {
      state.office = office
    }
  },

  actions: {
    async getOffice ({ dispatch, commit }, officeId) {
      commit('toggleLoading', true)
      await axios.get(
        'offices/' + officeId
      )
        .then((response) => {
          if (response.data.status === 'success') {
            commit('getOffice', response.data.office)
            commit('setResourceName', response.data.office.name)
            dispatch('getMembers', response.data.office.members)
            dispatch('selectCycle', response.data.current_cycle)
            commit('toggleLoading', false)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
        })

      dispatch('setCurrentView', 'office')
    }
  }
}
