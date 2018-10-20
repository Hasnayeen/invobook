import './../bootstrap'
import componentMixin from './commonComponent'
import home from './../components/home.vue'

Vue.directive('focus', {
  update: function (el) {
    el.focus()
  }
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    home
  }
})
