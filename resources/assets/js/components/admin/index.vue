<template>
<div class="container md:mx-auto md:my-6 w-full xxl:max-w-6xl lg:max-w-4xl md:max-w-xl border-t md:border-0">
  <div class="flex flex-row justify-between md:justify-around md:my-6 py-2 md:py-3 bg-white shadow md:rounded text-gray-500">
    <div @click="activateThisTab('users')"
      :class="[(active === 'users') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faUser" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'Users' | localize }}</span>
    </div>
    <div @click="activateThisTab('auth')"
      :class="[(active === 'auth') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faLockOpen" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'Roles & Permissions' | localize }}</span>
    </div>
    <div @click="activateThisTab('activity')"
      :class="[(active === 'activity') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faBolt" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'Activities' | localize }}</span>
    </div>
    <div @click="activateThisTab('settings')"
      :class="[(active === 'settings') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faCog" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'Settings' | localize }}</span>
    </div>
    <div @click="activateThisTab('database')"
      :class="[(active === 'database') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faDatabase" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'Database' | localize }}</span>
    </div>
    <div @click="activateThisTab('about')"
      :class="[(active === 'about') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-4 -mb-2 md:-mb-3' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faInfoCircle" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular">{{ 'About' | localize }}</span>
    </div>
  </div>

  <div class="flex flex-row flex-wrap justify-start mt-4">
    <usersBoard :users="users" :activeTab="active"></usersBoard>
    <authBoard :users="users" :activeTab="active"></authBoard>
    <activityBoard :activeTab="active"></activityBoard>
    <aboutBoard :activeTab="active"></aboutBoard>
    <settingsBoard :activeTab="active"></settingsBoard>
    <databaseActions :activeTab="active"></databaseActions>
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
import databaseActions from './databaseActions.vue'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase'

export default {
  components: {aboutBoard, authBoard, usersBoard, activityBoard, settingsBoard, databaseActions},
  data: () => ({
    active: 'users',
    faBolt,
    faInfoCircle,
    faLockOpen,
    faCog,
    faUser,
    faDatabase
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
