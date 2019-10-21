export default {
  state: {
    time: 600,
    defaultTime: 600,
    timerRunning: false,
    breakTime: 120,
    breakRunning: false,
    timerId: null
  },

  mutations: {
    startTimer (state, timerId) {
      state.timerRunning = true
      state.timerId = timerId
    },
    decreaseTime (state) {
      if (state.time > 0) {
        state.time = state.time - 1
      } else {
        clearInterval(state.timerId)
      }
    },
    pauseTimer (state) {
      state.timerRunning = false
      clearInterval(state.timerId)
      state.timerId = null
    },
    resetTimer (state) {
      state.timerRunning = false
      state.breakRunning = false
      state.time = state.defaultTime
      clearInterval(state.timerId)
      state.timerId = null
    },
    startBreak (state, timerId) {
      state.time = state.breakTime
      state.breakRunning = true
      state.timerId = timerId
    }
  },

  actions: {
    startTimer ({ commit }) {
      const timerId = setInterval(() => {
        commit('decreaseTime')
      }, 1000)
      commit('startTimer', timerId)
    },
    pauseTimer ({ commit }) {
      commit('pauseTimer')
    },
    resetTimer ({ commit }) {
      commit('resetTimer')
    },
    startBreak ({ commit }, timerId) {
      commit('resetTimer')
      timerId = setInterval(() => {
        commit('decreaseTime')
      }, 1000)
      commit('startBreak', timerId)
    }
  }
}
