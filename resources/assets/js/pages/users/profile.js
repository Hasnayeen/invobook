import './../../bootstrap'
import componentMixin from './../commonComponent'
import profile from './../../components/users/profile.vue'
import store from './../../store/profile'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    profile
  },
  store
})
