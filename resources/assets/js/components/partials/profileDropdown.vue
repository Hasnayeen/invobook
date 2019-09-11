<template>
<div class="px-4 border-l flex items-center cursor-pointer p-4">
  <div id="profile-dropdown" class="flex flex-row items-center" @click="toggleProfileDropdown" v-click-outside="hideProfileDropdown">
    <img class="w-10 h-10 rounded-full md:mr-2" :src="generateUrl(user.avatar)">
    <span class="text-gray-800 text-base no-underline hidden md:block">
      {{ user.name }}
      <font-awesome-icon :icon="faAngleDown"></font-awesome-icon>
    </span>
  </div>
  <div v-if="profileDropdownShown" id="profile-menu" class="absolute bg-white w-48 right-0 mr-2 py-1 shadow-lg rounded z-50" style="top:3.5rem;">
    <a class="px-4 py-2 hover:bg-teal-500 hover:text-white no-underline text-gray-600 block font-medium" :href="profileUrl">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faUser" class="pr-1"></font-awesome-icon>
      </span>
      {{ 'Your Profile' | localize }}
    </a>
    <a class="px-4 py-2 hover:bg-teal-500 hover:text-white text-gray-600 font-medium no-underline block" href="/admin">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faShieldAlt" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Admin' | localize }}
    </a>
    <a class="px-4 py-2 hover:bg-teal-500 hover:text-white text-gray-600 font-medium no-underline block" @click="showTimer">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faStopwatch" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Timer' | localize }}
    </a>
    <a v-if="authenticated" class="px-4 py-2 hover:bg-teal-500 hover:text-white text-gray-600 font-medium no-underline block" href="/settings">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faCog" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Settings' | localize }}
    </a>
    <span class="block border-t"></span>
    <a v-if="impersonating" class="px-4 py-2 hover:bg-teal-500 hover:text-white text-gray-600 font-medium no-underline block" href="/impersonate/leave">
      <span class="w-6 inline-block">
        <font-awesome-icon :icon="faUserMinus" class="pr-1 font-regular"></font-awesome-icon>
      </span>
      {{ 'Leave User' | localize }}
    </a>
    <a class="px-4 py-2 hover:bg-teal-500 hover:text-white text-gray-600 font-medium no-underline block" :href="url.logout" @click="logoutUser">
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
import { mapActions } from 'vuex'
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
    profileDropdownShown: false,
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
  methods: {
    ...mapActions([
      'setCurrentComponent'
    ]),
    logoutUser (event) {
      event.preventDefault()
      document.getElementById('logout-form').submit()
    },
    toggleProfileDropdown (event) {
      if (this.profileDropdownShown) {
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
      this.profileDropdownShown = true
    },
    hideProfileDropdown (event) {
      if (event.type === 'keyup' && event.key !== 'Escape') {
        return false
      }
      this.profileDropdownShown = false
    },
    showTimer (event) {
      this.setCurrentComponent('timer')
      this.hideProfileDropdown(event)
    }
  }
}
</script>
