<template>
<div>
  <div class="absolute container mx-2 md:mx-auto md:w-1/3 bg-gray-100 rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold text-center text-lg p-4 rounded" for="user">
          Members List
        </label>

      <ul v-for="(member, index) in members" :key="member.id" class="list-reset">
        <li class="p-4 py-6 hover:bg-blue-100 bg-white flex flex-row items-center justify-between">
          <div class="flex flex-row items-center">
            <a :href="'/users/' + member.username"  class="no-underline text-gray-800 text-lg">
              <img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-4 align-middle" :alt="'profile pic of ' + member.name">
            </a>
            <span class="text-xl">{{ member.name }}</span>
          </div>
          <button @click="removeMember(index, member.user_id)" class="w-8 h-8 bg-red-200 text-red-700 rounded-full flex justify-center items-center" title="delete">
            <font-awesome-icon :icon="faTrashAlt" class="cursor-pointer text-sm"></font-awesome-icon>
          </button>
        </li>
      </ul>

      <div class="flex flex-row-reverse p-4 rounded-b">
        <button @click="closeModal" class="text-red-400 hover:font-bold">Close</button>
      </div>
    </div>
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'

export default {
  props: {
    resourceType: {
      type: String,
      required: true
    },
    resourceId: {
      type: Number,
      required: true
    },
    members: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    faTrashAlt
  }),

  methods: {
    ...mapActions([
      'closeComponent',
      'showNotification'
    ]),
    closeModal () {
      this.closeComponent()
    },
    removeMember (index, memberId) {
      axios.delete('/members/', {
        params: {
          user_id: memberId, group_type: this.resourceType, group_id: this.resourceId
        }
      })
        .then((response) => {
          this.members.splice(index, 1)
          this.closeModal()
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
