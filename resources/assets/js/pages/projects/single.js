import './../../bootstrap'
import single from './../../components/projects/single.vue'
import navbar from './../../components/partials/navbar.vue'
import inviteModal from './../../components/partials/inviteModal.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    single, navbar, inviteModal
  }
})
