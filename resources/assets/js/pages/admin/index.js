import './../../bootstrap'
import componentMixin from './../commonComponent'
import index from './../../components/admin/index.vue'
import store from './../../store/admin'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    index
  },
  store
})
