export default {
  state: {
    loading: false,
    team: null
  },

  mutations: {
    getTeam (state, team) {
      state.team = team
    }
  },

  actions: {
    async getTeam ({ dispatch, commit }, teamId) {
      commit('toggleLoading', true)
      await axios.get(
        'teams/' + teamId
      )
        .then((response) => {
          if (response.data.status === 'success') {
            commit('getTeam', response.data.team)
            commit('setResourceName', response.data.team.name)
            dispatch('getMembers', response.data.team.members)
            dispatch('selectCycle', response.data.current_cycle)
            commit('toggleLoading', false)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
        })

      dispatch('setCurrentView', 'team')
    }
  }
}
