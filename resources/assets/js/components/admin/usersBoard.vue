<template>
<div :class="{'hidden': (activeTab != 'users')}" class="w-full">
  <invite-modal></invite-modal>

  <div class="md:bg-white md:rounded md:shadow text-gray-900">
    <div class="text-center text-3xl md:p-4 text-gray-800">All Users</div>
    <div class="hidden md:flex flex-row text-left bg-gray-200 text-gray-600 p-4">
      <div class="w-1/12">Avatar</div>
      <div class="w-1/6">Name</div>
      <div class="w-1/6">Username</div>
      <div class="w-1/6">Role</div>
      <div class="w-1/6">Email</div>
      <div class="w-1/6">Timezone</div>
    </div>
    <div v-for="user in users" class="flex flex-row items-center text-left m-4 md:m-0 md:p-4 bg-teal-200 md:bg-white rounded md:rounded-none shadow md:shadow-none relative">
      <div class="absolute top-0 right-0 m-2 text-gray-800 h-full md:flex flex-row items-center md:m-0 md:mr-4">
        <font-awesome-icon :icon="faEllipsisH" class="cursor-pointer"></font-awesome-icon>
      </div>
      <div class="w-1/4 md:w-1/12 px-2 md:px-0"><img class="w-12 h-12 rounded-full" :src="generateUrl(user.avatar)"></div>
      <div class="w-3/4 md:w-5/6 flex flex-col md:flex-row md:items-center md:px-0 bg-white">
        <div class="md:w-1/5 text-left text-xl font-semibold text-gray-800 p-2 md:p-0">{{ user.name }}</div>
        <div class="md:w-2/5 flex flex-row text-sm p-2 md:px-0 bg-gray-100 md:bg-white">
          <div class="w-1/2 text-left">@{{ user.username }}</div>
          <div class="w-1/2 text-right md:text-left">{{ user.role }}</div>
        </div>
        <div class="md:w-2/5 flex flex-row text-sm p-2 md:px-0 bg-gray-100 md:bg-white">
          <div class="w-1/2">{{ user.email }}</div>
          <div class="w-1/2">{{ user.timezone }}</div>
        </div>
        <a v-if="authUserId !== user.id" :href="'/impersonate/take/' + user.id" class="text-gray-700">
          <font-awesome-icon :icon="faUserSecret" class="cursor-pointer"></font-awesome-icon>
        </a>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import inviteModal from './../partials/inviteModal.vue'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret'

export default {
  props: {
    activeTab: {
      required: true,
      type: String
    },
    users: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    authUserId: authUser.id,
    faEllipsisH,
    faUserSecret,
  }),
  components: {inviteModal}
}
</script>
