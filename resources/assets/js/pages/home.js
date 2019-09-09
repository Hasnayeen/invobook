import './../bootstrap'
import componentMixin from './commonComponent'
import home from './../components/home/index.vue'
import store from '../store/home'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    home
  },
  store
})
