<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 20vh;left: 0;right: 0;">
      <div class="p-4">
          <div class="p-4">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                  Permissions
              </label>
              <div class="flex flex-row items-center">
                <select v-model="permission_id" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
                    <option selected disabled hidden>Select Permission to Add to Role</option>
                    <template v-for="permission in permissions">
                        <option :value="permission.id" class="my-2 text-lg">{{ permission.name }}</option>
                    </template>
                </select>
                <font-awesome-icon :icon="faChevronDown"
                  class="w-1/6 pointer-events-none flex items-center text-grey-darker -ml-8">
                </font-awesome-icon>
              </div>
          </div>
      </div>
      <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
          <button @click="closeForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
          <button @click="assignPermission" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">Assign</button>
      </div>
  </div>
  <div @click="closeForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['formShown', 'roleId'],
  data: () => ({
    permissions: [],
    permission_id: null,
    faChevronDown,
  }),
  mounted () {
    axios.get('admin/permissions')
        .then((response) => {
          this.permissions = response.data.permissions
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
  },
  methods: {
    closeForm () {
      this.$emit('close')
    },
    assignPermission () {
      axios.post('/admin/roles/' + this.roleId + '/permissions', {permission_id: this.permission_id})
           .then((response) => {
             this.permission_id = null
             this.$emit('permission-assigned', response.data.permission)
           })
           .catch((error) => {
             console.log(error.message)
           })
    }
  }
}
</script>
