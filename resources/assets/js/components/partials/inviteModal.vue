<template>
<div class="mb-4 text-center">
  <button @click="openModal" class="no-underline p-2 my-4 mb-0 bg-white text-base text-teal rounded shadow">Invite New Member</button>
  <div :class="{'hidden': !showInviteMemberForm}">
    <div @click="closeModal" class="absolute pin opacity-75 bg-grey z-10"></div>
    <div class="fixed pin-x md:w-1/3 z-10 bg-grey-lighter mx-2 md:mx-auto p-8 rounded">
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="John Doe" v-model="name">
      </p>
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="john@example.com" v-model="email">
      </p>
      <p class="py-2">
        <select class="w-5/6 block shadow appearance-none w-full bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" v-model="role">
          <option value="default" selected disabled hidden class="text-grey-darker">Select Role</option>
          <template v-for="role in roles">
            <option :value="role.id" class="my-2 text-lg">{{ role.name }}</option>
          </template>
        </select>
      </p>
      <div class="flex flex-row justify-between pt-8 bg-grey-lighter rounded">
        <button @click="closeModal" class="text-red-light hover:font-bold">Cancel</button>
        <button @click="sendInvitation" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded">Send Invitation</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    showInviteMemberForm: false,
    name: '',
    email: '',
    role: 'default',
    roles: []
  }),
  mounted () {
    axios.get('admin/roles')
      .then((response) => {
        this.roles = response.data.roles
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  },
  methods: {
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
            EventBus.$emit('notification', response.data.message, response.data.status)
            this.name = ''
            this.email = ''
            this.showInviteMemberForm = false
          }
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          this.name = ''
          this.email = ''
          this.showInviteMemberForm = false
        })
    }
  }
}
</script>