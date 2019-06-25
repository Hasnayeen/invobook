import Vuex from 'vuex'
import cycle from './modules/cycle'

window.Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cycle
  },

  state: {
    loading: false,
    members: project.members,
    project
  },
})
