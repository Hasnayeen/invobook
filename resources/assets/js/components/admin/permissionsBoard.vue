<template>
<div :class="{'hidden': (activeColumn !== 'permissions')}" class="bg-white rounded-b">
  <attach-permission-form :permissionId="permissionId" :form-shown="attachPermissionFormShown" @close="closeAttachPermissionForm" @permission-attached="permissionAttachedToRole"></attach-permission-form>

  <div class=" px-6 py-8 flex flex-row flex-wrap justify-center text-grey-darker">
    <div v-for="permission in permissions" class="bg-white shadow-xl w-80 my-4 md:m-6 rounded-lg">
      <div class="p-4 text-xl uppercase text-indigo bg-grey-lighter rounded-t-lg">
        {{ permission.name }}
      </div>
      <div class="px-4 pb-2 bg-grey-lighter text-sm flex flex-row">
        <span>
          {{ 'Roles' | localize }}
        </span>
        <div @click="showAttachPermissionForm(permission.id)">
          <font-awesome-icon :icon="faPlusCircle"
            class="ml-2 text-indigo cursor-pointer">
          </font-awesome-icon>
        </div>
      </div>
      <div v-if="permission.roles.length > 0" class="flex flex-row flex-wrap m-2">
        <div v-for="role in permission.roles" class="py-1 px-2 m-2 rounded-full font-medium bg-pink text-white text-sm flex flex-row items-center">
          {{ role.name }}
          <font-awesome-icon :icon="faTrashAlt"
            class="ml-1 pl-1 cursor-pointer">
          </font-awesome-icon>
        </div>
      </div>
      <div v-else class="py-1 px-2 m-2 font-medium text-grey-darker">
        {{ 'Don\'t belongs to any role yet' | localize }}
      </div>
    </div>      
  </div>
</div>
</template>

<script>
import attachPermissionForm from './../forms/attachPermissionForm'
import faPlusCircle from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import faTrashAlt from '@fortawesome/free-solid-svg-icons/faTrashAlt'

export default {
  components: {attachPermissionForm},
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },
  data: () => ({
    permissions: [],
    attachPermissionFormShown: false,
    permissionId: null,
    faPlusCircle,
    faTrashAlt
  }),
  watch: {
    activeColumn: 'getPermissions'
  },
  methods: {
    getPermissions () {
      if (this.activeColumn === 'permissions' && this.permissions.length < 1) {
        axios.get('/admin/permissions')
          .then((response) => {
            this.permissions = response.data.permissions
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    showAttachPermissionForm (id) {
      this.permissionId = id
      this.attachPermissionFormShown = true
    },
    closeAttachPermissionForm () {
      this.attachPermissionFormShown = false
    },
    permissionAttachedToRole (role) {
      if (!this.permissions.filter(permission => permission.id === this.permissionId)[0].roles.some(item => item.id === role.id)) {
        this.permissions.filter(permission => permission.id === this.permissionId)[0].roles.push(role)
      }
      this.attachPermissionFormShown = false
    }
  }
}
</script>
