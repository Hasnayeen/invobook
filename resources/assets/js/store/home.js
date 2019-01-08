import Vuex from 'vuex'

window.Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home: data,
    loading: false
  },

  mutations: {
    addProject (state, project) {
      state.home.projects.push(project)
    },
    addTeam (state, team) {
      state.home.teams.push(team)
    },
    addOffice (state, office) {
      state.home.offices.push(office)
    },
    removeProject (state, index) {
      state.home.projects.splice(index, 1)
    },
    removeTeam (state, index) {
      state.home.teams.splice(index, 1)
    },
    removeOffice (state, index) {
      state.home.offices.splice(index, 1)
    },
    toggleLoading (state, status) {
      state.loading = status
    }
  },

  actions: {
    addProject ({ commit }, formData) {
      commit('toggleLoading', true)
      axios.post('/projects', {
        name: formData.name,
        description: formData.description
      })
        .then((response) => {
          if (response.data.status === 'success') {
            commit('toggleLoading', false)
            EventBus.$emit('notification', response.data.message, response.data.status)
            commit('addProject', response.data.project)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    removeProject ({ commit }, data) {
      commit('toggleLoading', true)
      axios.delete(`/projects/${data.id}`)
        .then((response) => {
          commit('toggleLoading', false)
          EventBus.$emit('notification', response.data.message, response.data.status)
          commit('removeProject', data.index)
        })
        .catch((error) => {
          commit('toggleLoading', false)
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    addTeam ({ commit }, formData) {
      axios.post('/teams', {
        name: formData.name,
        description: formData.description
      }).then((response) => {
        if (response.data.status === 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status)
          commit('addTeam', response.data.team)
        }
      }).catch((error) => {
        EventBus.$emit('notification', error.response.data.message, error.response.data.status)
      })
    },
    removeTeam ({ commit }, data) {
      axios.delete(`/teams/${data.id}`)
        .then((response) => {
          commit('deleteTeam', data.index)
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    addOffice ({ commit }, formData) {
      axios.post('/offices', {
        name: formData.name,
        description: formData.description
      })
        .then((response) => {
          if (response.data.status === 'success') {
            EventBus.$emit('notification', response.data.message, response.data.status)
            commit('addOffice', response.data.office)
          }
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    removeOffice ({ commit }, data) {
      axios.delete(`/offices/${data.id}`)
        .then((response) => {
          commit('removeOffice', data.index)
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
})
