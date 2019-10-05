import Vuex from 'vuex'
import notification from './modules/notification'
import dropdown from './modules/dropdown'
import timer from './modules/timer'

window.Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    dropdown,
    timer
  },

  state: {
    currentWork,
    projects: [],
    teams: [],
    offices: [],
    loading: false
  },

  mutations: {
    getProjects(state, projects) {
      state.projects = projects
    },
    getTeams(state, teams) {
      state.teams = teams
    },
    getOffices(state, offices) {
      state.offices = offices
    },
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
    getProjects({ commit }) {
      commit('toggleLoading', true)
      axios.get('projects')
        .then((response) => {
          if (response.data.status === 'success') {
            commit('toggleLoading', false)
            commit('getProjects', response.data.projects)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
      })
    },
    getTeams({ commit }) {
      commit('toggleLoading', true)
      axios.get('teams')
        .then((response) => {
          if (response.data.status === 'success') {
            commit('toggleLoading', false)
            commit('getTeams', response.data.teams)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
      })
    },
    getOffices({ commit }) {
      commit('toggleLoading', true)
      axios.get('offices')
        .then((response) => {
          if (response.data.status === 'success') {
            commit('toggleLoading', false)
            commit('getOffices', response.data.offices)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
      })
    },
    addProject ({ commit }, formData) {
      commit('toggleLoading', true)
      axios.post('/projects', {
        name: formData.name,
        description: formData.description
      })
        .then((response) => {
          if (response.data.status === 'success') {
            commit('toggleLoading', false)
            this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
            commit('addProject', response.data.project)
          }
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
        })
    },
    removeProject ({ commit }, data) {
      commit('toggleLoading', true)
      axios.delete(`/projects/${data.id}`)
        .then((response) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
          commit('removeProject', data.index)
        })
        .catch((error) => {
          commit('toggleLoading', false)
          this.dispatch('showNotification', { type: error.response.data.status, message: error.response.data.message })
        })
    },
    addTeam ({ commit }, formData) {
      axios.post('/teams', {
        name: formData.name,
        description: formData.description
      }).then((response) => {
        if (response.data.status === 'success') {
          this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
          commit('addTeam', response.data.team)
        }
      }).catch((error) => {
        this.dispatch('showNotification', {type: error.response.data.status, message: error.response.data.message})
      })
    },
    removeTeam ({ commit }, data) {
      axios.delete(`/teams/${data.id}`)
        .then((response) => {
          commit('deleteTeam', data.index)
          this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
        })
        .catch((error) => {
          this.dispatch('showNotification', {type: error.response.data.status, message: error.response.data.message})
        })
    },
    addOffice ({ commit }, formData) {
      axios.post('/offices', {
        name: formData.name,
        description: formData.description
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
            commit('addOffice', response.data.office)
          }
        })
        .catch((error) => {
          this.dispatch('showNotification', {type: error.response.data.status, message: error.response.data.message})
        })
    },
    removeOffice ({ commit }, data) {
      axios.delete(`/offices/${data.id}`)
        .then((response) => {
          commit('removeOffice', data.index)
          this.dispatch('showNotification', { type: response.data.status, message: response.data.message })
        })
        .catch((error) => {
          this.dispatch('showNotification', {type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
})
