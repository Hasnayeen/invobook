<template>
<div class="mb-4 text-center">
  <button @click="openModal" class="no-underline p-2 my-4 mb-0 bg-white text-base text-teal-500 rounded shadow">
    {{ 'Invite New Member' | localize }}
  </button>
  <div :class="{'hidden': !showInviteMemberForm}">
    <div @click="closeModal" class="absolute inset-0 opacity-75 bg-gray-500 z-10"></div>
    <div class="fixed inset-x-0 md:w-1/3 z-10 bg-gray-200 mx-2 md:mx-auto p-8 rounded">
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800" type="text" placeholder="John Doe" v-model="name">
      </p>
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800" type="text" placeholder="john@example.com" v-model="email">
      </p>
      <p class="py-2">
        <select class="w-5/6 block shadow appearance-none w-full bg-white border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" v-model="role">
          <option value="default" selected disabled hidden class="text-gray-800">{{ 'Select Role' | localize }}</option>
          <template v-for="role in roles">
            <option :value="role.id" class="my-2 text-lg">{{ role.name }}</option>
          </template>
        </select>
      </p>
      <div class="flex flex-row justify-between pt-8 bg-gray-200 rounded">
        <button @click="closeModal" class="text-red-400 hover:font-bold">{{ 'Cancel' | localize }}</button>
        <button @click="sendInvitation" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-4 rounded">{{ 'Send Invitation' | localize }}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    showInviteMemberForm: false,
    name: '',
    email: '',
    role: 'default',
    roles: []
  }),

  mounted () {
    axios.get('/roles')
      .then((response) => {
        this.roles = response.data.roles
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    openModal () {
      this.showInviteMemberForm = true
    },
    closeModal () {
      this.showInviteMemberForm = false
    },
    sendInvitation () {
      axios.post('/register/invite', {
        name: this.name,
        email: this.email,
        role: this.role
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.showNotification({type: response.data.status, message: response.data.message})
            this.name = ''
            this.email = ''
            this.showInviteMemberForm = false
          }
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
          this.name = ''
          this.email = ''
          this.showInviteMemberForm = false
        })
    }
  }
}
</script>
