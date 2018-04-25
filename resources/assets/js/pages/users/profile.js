import './../../bootstrap'
import navbar from './../../components/partials/navbar.vue'
import inviteModal from './../../components/partials/inviteModal.vue'
import profile from './../../components/users/profile.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    inviteModal, navbar, profile
  }
})
