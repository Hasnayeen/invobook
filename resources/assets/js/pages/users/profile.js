import './../../bootstrap'
import componentMixin from './../commonComponent'
import profile from './../../components/users/profile.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    profile
  }
})
