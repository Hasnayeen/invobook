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
    loading: false,
    users // eslint-disable-line
  },

  mutations: {
    toggleLoading (state, status) {
      state.loading = status
    }
  }
})
