<template>
<div :class="{'hidden': !show}">
  <div class="absolute container mx-2 md:mx-auto md:w-1/3 bg-grey-lightest rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
        <label class="block uppercase tracking-wide bg-grey-lighter text-grey-dark text-xs font-bold text-center text-lg p-6 rounded" for="user">
          Members List
        </label>

      <ul v-for="(member, index) in members" :key="member.id" class="list-reset">
        <li class="py-4 px-8 hover:bg-grey-lighter flex flex-row items-center justify-between">
          <a :href="'/users/' + member.username"  class="no-underline text-grey-darker text-lg">
            <img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-4 align-middle" :alt="'profile pic of ' + member.name">
            <span>{{ member.name }}</span>
          </a>
          <button @click="removeMember(index, member.id)" class="text-red-dark" title="delete">
            <font-awesome-icon :icon="faTrashAlt" class="ml-1 pl-1 cursor-pointer"></font-awesome-icon>
          </button>
        </li>
      </ul>

      <div class="flex flex-row-reverse p-6 bg-grey-lighter rounded-b">
        <button @click="closeModal" class="text-red-light hover:font-bold">Close</button>
      </div>
    </div>
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
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
    show: {
      type: Boolean,
      default: false
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
    closeModal () {
      this.$emit('close')
    },
    removeMember (index, memberId) {
      axios.delete('/members/', {
        params: {
          user_id: memberId, resource_type: this.resourceType, resource_id: this.resourceId
        }
      })
        .then((response) => {
          this.members.splice(index, 1)
          this.closeModal()
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
}
</script>
