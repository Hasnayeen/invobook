<template>
<div class="container md:mx-auto md:px-4 md:my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl border-t md:border-0">
  <div class="flex flex-row justify-between md:justify-around md:my-6 py-2 md:py-4 bg-white shadow md:rounded text-grey">
    <div @click="activateThisTab('users')"
      :class="[(active === 'users') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <i class="fas fa-users text-xl md:text-2xl"></i>
      <span class="block text-xs font-regular pt-2">Users</span>
    </div>
    <div @click="activateThisTab('activities')"
      :class="[(active === 'activities') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-2 md:-mb-4' : 'cursor-pointer', 'text-center w-1/2']">
      <i class="fas fa-info-circle text-xl md:text-2xl"></i>
      <span class="block text-xs font-regular pt-2">About</span>
    </div>
  </div>

    <div class="flex flex-row flex-wrap justify-start mt-4">
      <usersBoard :users="users" :activeTab="active"></usersBoard>
    </div>
</div>
</template>

<script>
import usersBoard from './usersBoard.vue'
export default {
  components: {usersBoard},
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    active: 'users',
  }),
  methods: {
    activateThisTab (tab) {
      if (tab != this.active) {
        this.active = tab
      }
    },
  }
}
</script>
