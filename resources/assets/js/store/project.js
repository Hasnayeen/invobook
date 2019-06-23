import Vuex from 'vuex'

window.Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    cycles: [],
    selectedCycle: project.current_cycle,
    selectedCycleId: project.current_cycle ? project.current_cycle.id : 0,
    project
  },

  mutations: {
    getCycles (state, cycles) {
      state.cycles = cycles
    },
    selectCycle (state, cycle) {
      state.selectedCycle = cycle
    },
    selectCycleId (state, cycleId) {
      state.selectedCycleId = cycleId
    },
  },

  actions: {
    getCycles({ commit }, formData) {
      axios.get('/cycles', {
          params: {
            group_type: formData.group_type,
            group_id: formData.group_id,
          }
        })
        .then((response) => {
          commit('getCycles', response.data.cycles)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectCycle({ commit }, cycle) {
      commit('selectCycle', cycle)
      commit('selectCycleId', cycle.id)
    },
  }
})
