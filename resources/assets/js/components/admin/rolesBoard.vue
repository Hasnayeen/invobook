<template>
<div :class="{'hidden': (activeColumn !== 'roles')}" class="bg-gray-100 rounded-b">
  <!-- Select Role -->
  <div class="px-6 pb-8 pt-12 rounded-b">
    <div class="inline font-medium text-gray-700">{{ 'Select a Role' | localize }}:</div>
    <template v-for="role in roles">
      <div @click="selectRole(role)" class="rounded inline border p-3 mx-2 relative cursor-pointer"
        :class="[selectedRole === role.slug ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
        <font-awesome-icon v-if="selectedRole === role.slug" :icon="faCheckCircle" class="absolute right-0 top-0 -mr-1 -mt-1 text-lg text-indigo-500 bg-white rounded-full"></font-awesome-icon>
        <span class="cursor-pointer">{{ role.name }}</span>
      </div>
    </template>
  </div>

  <!-- Roles Permissions Table -->
  <div class="py-2 bg-white rounded-b">
    <div v-for="(resource, name, index) in permissions" class="flex flex-row items-center px-12 py-4" :class="[index !== 0 ? 'border-gray-200 border-t' : '']">
      <div class="text-gray-700 text-xl w-48">
        {{ name | capitalize | localize }}
      </div>
      <div v-for="(permission, key) in resource" class="w-32 flex flex-col justify-center items-center">
        <div class="pb-1">
          {{ permission.action | capitalize | localize }}
        </div>
        <span @click="togglePermission(permission, name, key, permission.enabled)" class="w-5 h-5 rounded cursor-pointer inline flex items-center justify-center" :class="[permission.enabled ? 'bg-teal-500' : 'border-gray-400 border']">
          <font-awesome-icon v-if="permission.enabled" :icon="faCheck" class="text-xs text-white"></font-awesome-icon>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

export default {
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },

  data: () => ({
    roles: [],
    permissions: [],
    roleId: 1,
    selectedRole: 'owner',
    faCheckCircle,
    faCheck,
  }),

  created () {
    if (this.roles.length < 1) {
      axios.get('/roles')
        .then((response) => {
          this.roles = response.data.roles
        })
        .catch((error) => {
          console.log(error)
        })
    }
    if (this.permissions.length < 1) {
      axios.get('/admin/roles/1/permissions')
        .then((response) => {
          this.permissions = response.data.permissions
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    newRoleCreated (role) {
      this.roles.push(role)
      this.createRoleFormShown = false
    },
    selectRole (role) {
      this.selectedRole = role.slug
      this.roleId = role.id
      axios.get('/admin/roles/' + role.id + '/permissions')
        .then((response) => {
          this.permissions = response.data.permissions
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    },
    togglePermission (permission, key, index, currentState) {
      if (currentState) {
        axios.delete('/admin/roles/' + this.roleId + '/permissions/' + permission.id)
          .then((response) => {
            this.permissions[key][index]['enabled'] = !currentState
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      } else {
        axios.post('/admin/roles/' + this.roleId + '/permissions/' + permission.id)
          .then((response) => {
            this.permissions[key][index]['enabled'] = !currentState
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      }
    },
  },
}
</script>
