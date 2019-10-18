import './../../bootstrap'
import componentMixin from './../commonComponent'
import single from './../../components/offices/single.vue'
import store from './../../store/office'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    single
  },
  store
})
