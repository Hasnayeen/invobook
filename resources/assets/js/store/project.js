export default {
  state: {
    loading: false,
    project: null
  },

  mutations: {
    getProject (state, project) {
      state.project = project
    },
    updateProjectSettings (state, settings) {
      state.project.settings = settings
    }
  },

  actions: {
    async getProject ({ dispatch, commit }, projectId) {
      commit('toggleLoading', true)
      await axios.get(
        'projects/' + projectId
      )
        .then((response) => {
          if (response.data.status === 'success') {
            commit('getProject', response.data.project)
            commit('setResourceName', response.data.project.name)
            dispatch('getMembers', response.data.project.members)
            dispatch('selectCycle', response.data.current_cycle)
            dispatch('getTags', response.data.project.tags)
            commit('toggleLoading', false)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
        })

      dispatch('setCurrentView', 'project')
    },
    updateProjectSettings ({ commit }, settings) {
      commit('updateProjectSettings', settings)
    }
  }
}
