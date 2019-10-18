import './../../bootstrap'
import componentMixin from './../commonComponent'
import settings from './../../components/users/settings.vue'
import store from './../../store/settings'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    settings
  },
  store
})
