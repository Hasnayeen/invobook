export default {
  state: {
    cycles: [],
    selectedCycle: null,
    selectedCycleId: 0
  },

  mutations: {
    getCycles (state, cycles) {
      state.cycles = cycles
    },
    selectCycle (state, cycle) {
      if (state.selectedCycleId === cycle.id) {
        state.selectedCycle = null
      } else {
        state.selectedCycle = cycle
      }
    },
    selectCycleId (state, cycleId) {
      if (state.selectedCycleId === cycleId) {
        state.selectedCycleId = 0
      } else {
        state.selectedCycleId = cycleId
      }
    }
  },

  actions: {
    getCycles ({ commit }, formData) {
      axios.get('/cycles', {
        params: {
          group_type: formData.group_type,
          group_id: formData.group_id
        }
      })
        .then((response) => {
          commit('getCycles', response.data.cycles)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectCycle ({ commit }, cycle) {
      if (cycle !== null) {
        commit('selectCycle', cycle)
        commit('selectCycleId', cycle.id)
      }
    }
  }
}
