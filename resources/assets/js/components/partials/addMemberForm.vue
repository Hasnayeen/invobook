<template>
<div>
  <div class="absolute container mx-2 md:mx-auto md:w-1/3 bg-white rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold text-center text-lg mb-4" for="user">
          Add Member
        </label>
        <div class="flex flex-row items-center">
          <select v-model="newMember" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
            <option selected disabled hidden>Select User to Add</option>
            <template v-for="user in users">
              <option :value="user.id" class="my-2 text-lg">{{ user.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-grey-darker -ml-8">
          </font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
      <button @click="closeAddMemberForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
      <button @click="addMember" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">
        <template v-if="loading">
          <font-awesome-icon :icon="faSpinner" spin></font-awesome-icon>
        </template>
        Add
      </button>
    </div>
  </div>
  <div class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
import {
  faChevronDown,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['resource', 'resourceType'],
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
    addMember () {
      this.loading = true
      axios.post('/members', {
        user_id: this.newMember,
        resource_type: this.resourceType,
        resource_id: this.resource.id
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.loading = false
            EventBus.$emit('notification', response.data.message, response.data.status)
            this.$emit('addMember', response.data)
            this.$emit('close')
          }
        })
        .catch((error) => {
          this.loading = false
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          this.$emit('addMember', error.response.data)
          this.$emit('close')
        })
    },
    closeAddMemberForm () {
      this.$emit('close')
    }
  }
}
</script>
