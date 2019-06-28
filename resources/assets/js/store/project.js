import Vuex from 'vuex'
import cycle from './modules/cycle'
import dropdown from './modules/dropdown'
import notification from './modules/notification'

window.Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cycle,
    dropdown,
    notification
  },

  state: {
    loading: false,
    members: project.members,
    project
  },
})
