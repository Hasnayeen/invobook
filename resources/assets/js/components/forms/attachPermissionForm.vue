<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 20vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Roles
        </label>
        <div class="flex flex-row items-center">
          <select v-model="roleId" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
            <option selected disabled hidden>Select Permission to Add to Role</option>
            <template v-for="role in roles">
              <option :value="role.id" class="my-2 text-lg">{{ role.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
          </font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
      <button @click="closeForm" class="text-red-lighter hover:font-bold hover:text-red-400">Cancel</button>
      <button @click="attachPermission" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Attach</button>
    </div>
  </div>
  <div @click="closeForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['formShown', 'permissionId'],
  data: () => ({
    roles: [],
    roleId: null,
    faChevronDown
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
    closeForm () {
      this.$emit('close')
    },
    attachPermission () {
      axios.post('/admin/roles/' + this.roleId + '/permissions', {permission_id: this.permissionId})
        .then((response) => {
          this.roleId = null
          this.$emit('permission-attached', response.data.role)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>
