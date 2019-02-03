<template>
<div class="container md:mx-auto md:px-4 md:my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl border-t md:border-0">
  <div class="flex flex-row justify-between md:justify-around md:my-6 py-2 md:py-4 bg-white shadow md:rounded text-grey">
    <div @click="activateThisTab('users')"
      :class="[(active === 'users') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faUser" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular pt-2">{{ 'Users' | localize }}</span>
    </div>
    <div @click="activateThisTab('auth')"
      :class="[(active === 'auth') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faLockOpen" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular pt-2">{{ 'Roles & Permissions' | localize }}</span>
    </div>
    <div @click="activateThisTab('activity')"
      :class="[(active === 'activity') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faBolt" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular pt-2">{{ 'Activities' | localize }}</span>
    </div>
    <div @click="activateThisTab('settings')"
      :class="[(active === 'settings') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faCog" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular pt-2">{{ 'Settings' | localize }}</span>
    </div>
    <div @click="activateThisTab('about')"
      :class="[(active === 'about') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <font-awesome-icon :icon="faInfoCircle" class="text-xl md:text-2xl"></font-awesome-icon>
      <span class="block text-xs font-regular pt-2">{{ 'About' | localize }}</span>
    </div>
  </div>

  <div class="flex flex-row flex-wrap justify-start mt-4">
    <usersBoard :users="users" :activeTab="active"></usersBoard>
    <authBoard :users="users" :activeTab="active"></authBoard>
    <activityBoard :activeTab="active"></activityBoard>
    <aboutBoard :activeTab="active"></aboutBoard>
    <settingsBoard :activeTab="active"></settingsBoard>
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
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

export default {
  components: {aboutBoard, authBoard, usersBoard, activityBoard, settingsBoard},
  data: () => ({
    active: 'users',
    faBolt,
    faInfoCircle,
    faLockOpen,
    faCog,
    faUser
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
