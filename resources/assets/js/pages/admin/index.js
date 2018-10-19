import './../../bootstrap'
import componentMixin from './../commonComponent'
import index from './../../components/admin/index.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    index
  }
})
