import './../../bootstrap'
import navbar from './../../components/partials/navbar.vue'
import profile from './../../components/users/profile.vue'
import notificationPopup from './../../components/partials/notificationPopup.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    navbar, profile, notificationPopup
  }
})
