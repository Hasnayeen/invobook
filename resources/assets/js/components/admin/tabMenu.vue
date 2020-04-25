<template>
<div id="admin-menu" class="pt-4 pb-2 bg-white shadow text-gray-600 sticky tab-sticky-top z-20">
  <div class="mx-auto px-4 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex">
    <div @click="activateThisTab('users')"
      :class="[(active === 'users') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faUser" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Users' | localize }}</span>
    </div>
    <div @click="activateThisTab('auth')"
      :class="[(active === 'auth') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faLockOpen" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Permissions' | localize }}</span>
    </div>
    <div @click="activateThisTab('activity')"
      :class="[(active === 'activity') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faBolt" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Activities' | localize }}</span>
    </div>
    <div @click="activateThisTab('settings')"
      :class="[(active === 'settings') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faCog" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Settings' | localize }}</span>
    </div>
    <div @click="activateThisTab('about')"
      :class="[(active === 'about') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faInfoCircle" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'About' | localize }}</span>
    </div>
  </div>
</div>
</template>

<script>
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

export default {
  props: {
    active: {
      required: true,
      type: String
    }
  },

	data: () => ({
    faBolt,
    faInfoCircle,
    faLockOpen,
    faCog,
    faUser,
	}),

  methods: {
    activateThisTab (tab) {
      this.$emit('activate', tab)
		},
	}
}
</script>
