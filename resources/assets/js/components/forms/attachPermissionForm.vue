<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 20vh;left: 0;right: 0;">
      <div class="p-4">
          <div class="p-4">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                  Roles
              </label>
              <div class="flex flex-row items-center">
                <select v-model="roleId" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
                    <option selected disabled hidden>Select Permission to Add to Role</option>
                    <template v-for="role in roles">
                        <option :value="role.id" class="my-2 text-lg">{{ role.name }}</option>
                    </template>
                </select>
                <i class="w-1/6 fa fa-chevron-down pointer-events-none flex items-center text-grey-darker -ml-8"></i>
              </div>
          </div>
      </div>
      <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
          <button @click="closeForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
          <button @click="attachPermission" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">Attach</button>
      </div>
  </div>
  <div @click="closeForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
export default {
  props: ['formShown', 'permissionId'],
  data: () => ({
    roles: [],
    roleId: null
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
