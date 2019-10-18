<template>
<div>
  <div class="absolute container mx-2 md:mx-auto md:w-1/3 bg-white rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-xs font-bold text-center text-lg mb-4" for="user">
          Add Member
        </label>
        <div class="flex flex-row items-center">
          <select v-model="newMember" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
            <option selected disabled hidden>Select User to Add</option>
            <template v-for="user in users">
              <option :value="user.id" class="my-2 text-lg">{{ user.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
          </font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
      <button @click="closeAddMemberForm" class="text-red-lighter hover:font-bold hover:text-red-400">Cancel</button>
      <button @click="addMember" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">
        <template v-if="loading">
          <font-awesome-icon :icon="faSpinner" spin></font-awesome-icon>
        </template>
        Add
      </button>
    </div>
  </div>
  <div class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import {
  faChevronDown,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    resourceType: {
      type: String,
      required: true
    },
    resource: {
      type: Object,
      required: true
    },
  },

  data: () => ({
    users: [],
    newMember: null,
    loading: false,
    faChevronDown,
    faSpinner
  }),

  created () {
    axios.get('/users')
      .then((response) => {
        this.users = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {
    ...mapActions([
      'closeComponent',
      'showNotification'
    ]),
    addMember () {
      this.loading = true
      axios.post('/members', {
        user_id: this.newMember,
        group_type: this.resourceType,
        group_id: this.resource.id
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.loading = false
            this.$emit('addMember', response.data)
          }
        })
        .catch((error) => {
          this.loading = false
          this.$emit('addMember', error.response.data)
        })
    },
    closeAddMemberForm () {
      this.closeComponent()
    }
  }
}
</script>
