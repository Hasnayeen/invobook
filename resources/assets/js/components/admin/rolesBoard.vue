<template>
<div :class="{'hidden': (activeColumn !== 'roles')}" class="bg-white rounded-b">
  <create-role-form :form-shown="createRoleFormShown" @close="closeCreateRoleForm" @role-created="newRoleCreated"></create-role-form>
  <assign-permission-form :roleId="roleId" :form-shown="assignPermissionFormShown" @close="closeAssignPermissionForm" @permission-assigned="permissionAssigned"></assign-permission-form>

  <div class="mx-4 text-center">
    <button @click="showCreateRoleForm" class="no-underline p-3 m-8 -mb-4 text-white text-base bg-teal-light rounded shadow-xl">Add New Role</button>
  </div>
  <div class="px-6 py-8 flex flex-row flex-wrap justify-center text-grey-darker">
    <div v-for="(role, index) in roles" class="bg-white shadow-xl w-80 my-4 md:m-6 rounded-lg">
      <div class="p-4 text-xl uppercase text-indigo bg-grey-lighter rounded-t-lg flex flex-row">
        {{ role.name }}
          <div @click="deleteRole(role.id, index)">
            <i v-if="role.deletable" class="ml-1 pl-1 fas fa-trash-alt cursor-pointer text-base"></i>
          </div>
      </div>
      <div class="px-4 pb-2 bg-grey-lighter text-sm flex flex-row">
        <span>
          Permissions
        </span>
        <div @click="showAssignPermissionForm(role.id)">
          <i class="ml-2 fas fa-plus-circle text-indigo cursor-pointer"></i>
        </div>
      </div>
      <div v-if="role.permissions.length > 0" class="flex flex-row flex-wrap m-2">
        <div v-for="(permission, index) in role.permissions" class="py-1 px-2 m-2 rounded-full font-medium bg-pink text-white text-sm flex flex-row items-center">
          {{ permission.name }} 
          <div @click="revokePermission(role.id, permission.id, index)">
            <i class="ml-1 pl-1 fas fa-trash-alt cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div v-else class="py-1 px-2 m-2 font-medium text-grey-darker">
        Don't have any permission yet
      </div>
    </div>      
  </div>
</div>
</template>

<script>
import createRoleForm from './../forms/createRoleForm'
import assignPermissionForm from './../forms/assignPermissionForm'
export default {
  components: {createRoleForm, assignPermissionForm},
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },
  data: () => ({
    roles: [],
    createRoleFormShown: false,
    assignPermissionFormShown: false,
    roleId: 0
  }),
  beforeUpdate () {
    if (this.roles.length < 1) {
      axios.get('/admin/roles')
          .then((response) => {
            this.roles = response.data.roles
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  methods: {
    showCreateRoleForm () {
      this.createRoleFormShown = true
    },
    closeCreateRoleForm () {
      this.createRoleFormShown = false
    },
    newRoleCreated (role) {
      this.roles.push(role)
      this.createRoleFormShown = false
    },
    deleteRole (id, index) {
      axios.delete('/admin/roles/' + id)
           .then((response) => {
             this.roles.splice(index, 1)
           })
           .catch((error) => {
             console.log(error.response.data.message)
           })
    },
    showAssignPermissionForm (id) {
      this.roleId = id
      this.assignPermissionFormShown = true
    },
    closeAssignPermissionForm () {
      this.assignPermissionFormShown = false
    },
    permissionAssigned (permission) {
      if (! this.roles.filter(role => role.id === this.roleId)[0].permissions.some(perm => perm.id === permission.id)) {
        this.roles.filter(role => role.id === this.roleId)[0].permissions.push(permission)
      }
      this.assignPermissionFormShown = false
    },
    revokePermission (roleId, permissionId, index) {
      axios.delete('/admin/roles/' + roleId + '/permissions', {permission_id: permissionId})
           .then((response) => {
             this.roles.filter(role => role.id === roleId)[0].permissions.splice(index, 1)
           })
           .catch((error) => {
             console.log(error.response.data.message)
           })
    }
  }
}
</script>
