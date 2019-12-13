<template>
<div :class="{'hidden': (activeTab != 'users')}" class="w-full">
  <invite-modal></invite-modal>

  <div class="md:rounded text-gray-900">
    <div class="text-center text-3xl md:p-4 text-gray-800">{{ 'All Users' | localize }}</div>

    <div class="flex flex-row flex-wrap justify-center lg:mx-4 xxl:mx-0">
      <div v-for="user in users" class="bg-white rounded-lg shadow m-4 w-64 relative">
        <div class="w-64 h-32 opacity-25 bg-cover rounded-t"
          :style="{backgroundImage: 'url(' + generateUrl(user.avatar) + ')'}">
        </div>
        <div class="absolute flex justify-between items-center -mt-10 px-6 w-full">
          <a v-if="authUserId !== user.id" :href="'/impersonate/take/' + user.id"
             :title="'Impersonate User' | localize"
             class="text-indigo-700 bg-indigo-200 flex items-center justify-center w-8 h-8 mx-2 rounded-full cursor-pointer"
          >
            <font-awesome-icon :icon="faUserSecret" class="cursor-pointer"></font-awesome-icon>
          </a>
          <a v-else class="w-8 h-8 mx-2">
          </a>
          <a :href="'/users/' + user.username">
            <div class="w-20 h-20 bg-cover bg-center rounded-full shadow-outline"
              :style="{backgroundImage: 'url(' + generateUrl(user.avatar) + ')'}"></div>
          </a>
          <a
             :title="'Deactivate User' | localize"
             href="#"
             class="text-indigo-700 bg-indigo-200 flex items-center justify-center w-8 h-8 mx-2 rounded-full cursor-pointer"
          >
            <font-awesome-icon :icon="faUserSlash" class="cursor-pointer"></font-awesome-icon>
          </a>
        </div>
        <div class="h-10"></div>
        <div class="p-6 text-gray-700 text-center">
          <div class="text-2xl leading-tight">
            {{ user.name }}
          </div>
          <div>
            <a :href="'/users/' + user.username" class="text-blue-500">
              @{{ user.username }}
            </a>
          </div>
          <div class="text-sm break-words pb-2" :title="user.email">
            {{ user.email | clip }}
          </div>
          <span class="text-sm text-white font-medium bg-indigo-500 px-3 py-1 rounded-full">
            {{ user.role.name }}
          </span>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import inviteModal from './../partials/inviteModal.vue'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret'
import { faUserSlash } from '@fortawesome/free-solid-svg-icons/faUserSlash'

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
    faUserSecret,
    faUserSlash,
  }),
  components: {inviteModal}
}
</script>
