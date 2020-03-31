<template>
<div id="profile-dropdown-container" class="flex items-center cursor-pointer">
  <div id="profile-dropdown" class="flex flex-row items-center" @click="toggleProfileDropdown" v-click-outside="hideProfileDropdown">
    <img class="w-8 h-8 rounded-full" :src="generateUrl(user.avatar)">
  </div>
  <div v-if="currentComponent === 'profile-dropdown'" id="profile-menu" class="absolute bg-white w-48 -ml-32 mr-2 py-1 shadow-lg rounded z-50" style="top:3.5rem;">
    <a class="px-4 py-2 hover:bg-indigo-500 hover:text-white no-underline text-gray-600 block font-medium" :href="profileUrl">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faUser" class="pr-1"></font-awesome-icon>
      </span>
      {{ 'Your Profile' | localize }}
    </a>
    <a class="px-4 py-2 hover:bg-indigo-500 hover:text-white text-gray-600 font-medium no-underline block" href="/admin">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faShieldAlt" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Admin' | localize }}
    </a>
    <a name="timer-menu" class="px-4 py-2 hover:bg-indigo-500 hover:text-white text-gray-600 font-medium no-underline block" @click="showTimer">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faStopwatch" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Timer' | localize }}
    </a>
    <a v-if="authenticated" class="px-4 py-2 hover:bg-indigo-500 hover:text-white text-gray-600 font-medium no-underline block" href="/settings">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faCog" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Settings' | localize }}
    </a>
    <span class="block border-t"></span>
    <a v-if="impersonating" class="px-4 py-2 hover:bg-indigo-500 hover:text-white text-gray-600 font-medium no-underline block" href="/impersonate/leave">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faUserMinus" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Leave User' | localize }}
    </a>
    <a class="px-4 py-2 hover:bg-indigo-500 hover:text-white text-gray-600 font-medium no-underline block" :href="url.logout" @click="logoutUser">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faSignOutAlt" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Logout' | localize }}
    </a>
  </div>
  <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
      <input type="hidden" name="_token" :value="token">
  </form>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  faAngleDown,
  faCog,
  faShieldAlt,
  faSignOutAlt,
  faUser,
  faEnvelope,
  faUserMinus,
  faStopwatch
} from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    user: user,
    token: Laravel.csrfToken,
    url: navUrl,
    avatar: '',
    profileUrl: navUrl.site + '/users/' + user.username,
    impersonating: impersonating,
    authenticated,
    faAngleDown,
    faCog,
    faShieldAlt,
    faSignOutAlt,
    faUser,
    faUserMinus,
    faEnvelope,
    faStopwatch
  }),

  computed: {
    ...mapState({
      currentComponent: state => state.dropdown.currentComponent,
    }),
  },

  methods: {
    ...mapActions([
      'setCurrentComponent',
      'closeComponent'
    ]),
    logoutUser (event) {
      event.preventDefault()
      document.getElementById('logout-form').submit()
    },
    toggleProfileDropdown (event) {
      if (this.currentComponent === 'profile-dropdown') {
        this.hideProfileDropdown(event)
        document.body.removeEventListener('keyup', this.hideProfileDropdown)
      } else {
        this.showProfileDropdown()
        document.body.addEventListener('keyup', this.hideProfileDropdown)
      }
    },
    showProfileDropdown (event) {
      if (this.notificationShown) {
        this.notificationShown = false
      }
      this.setCurrentComponent('profile-dropdown')
    },
    hideProfileDropdown (event) {
      if (event.type === 'keyup' && event.key !== 'Escape') {
        return false
      }
      if (this.currentComponent === 'profile-dropdown') {
        this.closeComponent('')
      }
    },
    showTimer (event) {
      this.setCurrentComponent('timer')
    }
  }
}
</script>
