import './../../bootstrap'
import navbar from './../../components/partials/navbar.vue'
import inviteModal from './../../components/partials/inviteModal.vue'
import tasks from './../../components/projects/tasks.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    inviteModal, navbar, tasks
  }
})
