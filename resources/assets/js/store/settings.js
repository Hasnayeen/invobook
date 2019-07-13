import Vuex from 'vuex'
import notification from './modules/notification'

window.Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification
  },

  state: {
    loading: false
  }
})
