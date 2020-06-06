<template>
<div>
  <tab-menu :active="active" @activate="activateThisTab"></tab-menu>
  <div class="container md:mx-auto md:mb-6 w-full xl:max-w-6xl lg:max-w-5xl md:max-w-3xl border-t md:border-0">
    <div class="flex flex-row flex-wrap justify-start mt-4 md:mx-4">
      <usersBoard :users="users" :activeTab="active"></usersBoard>
      <authBoard :users="users" :activeTab="active"></authBoard>
      <activityBoard :activeTab="active"></activityBoard>
      <aboutBoard :activeTab="active"></aboutBoard>
      <settingsBoard :activeTab="active"></settingsBoard>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import aboutBoard from './aboutBoard.vue'
import authBoard from './authBoard.vue'
import usersBoard from './usersBoard.vue'
import activityBoard from './activityBoard.vue'
import settingsBoard from './settingsBoard.vue'
import tabMenu from './tabMenu.vue'

export default {
  components: {aboutBoard, authBoard, usersBoard, activityBoard, settingsBoard, tabMenu},
  data: () => ({
    active: 'users',
  }),
  computed: {
    ...mapState({
      users: state => state.users
    })
  },
  methods: {
    activateThisTab (tab) {
      if (tab !== this.active) {
        this.active = tab
      }
    }
  }
}
</script>
