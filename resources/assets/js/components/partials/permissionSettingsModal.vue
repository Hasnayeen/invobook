<template>
<div>
  <div class="absolute container mx-2 md:mx-auto md:max-w-4xl bg-gray-100 rounded shadow-lg z-30" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
      <header class="bg-gray-200 text-gray-600 p-6 rounded flex flex-row justify-between items-center" for="user">
        <div></div>
        <div class="uppercase tracking-wide font-semibold text-lg">
          Permission Settings
        </div>
        <div @click="closeModal" class="cursor-pointer">
          <font-awesome-icon :icon="faTimesCircle" class="text-lg text-red-500 opacity-75"></font-awesome-icon>
        </div>
      </header>

      <div class="flex flex-row text-gray-800 bg-white">
        <div class="w-1/2 px-4 py-2 flex flex-row items-center border-teal-500 border-b">
          <div class="flex flex-col">
            <div class="font-semibold pb-1">
              Roles
            </div>
            <div class="text-xs">
              Set permission for a specific role
            </div>
          </div>
        </div>
        <div class="w-1/2 px-4 py-2 flex flex-row items-center cursor-pointer">
          <div class="flex flex-col">
            <div class="font-semibold pb-1">
              Users
            </div>
            <div class="text-xs">
              Set permission for an individual user
            </div>
          </div>
        </div>
      </div>

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

      <div class="bg-white rounded-b">
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
        <div v-if="roleId" class="h-6"></div>
      </div>
    </div>
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faCheckCircle, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    resourceType: {
      type: String,
      required: true
    },
    resourceId: {
      type: Number,
      required: true
    },
  },

  data: () => ({
    roles: [],
    permissions: [],
    selectedRole: '',
    roleId: 0,
    faCheck,
    faCheckCircle,
    faTimesCircle,
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
  },

  methods: {
    ...mapActions([
      'closeComponent',
      'showNotification'
    ]),
    closeModal () {
      this.closeComponent()
    },
    selectRole (role) {
      this.selectedRole = role.slug
      this.roleId = role.id
      axios.get('/groups/permissions', {
          params: {
            group_type: this.resourceType,
            group_id: this.resourceId,
            role_id: role.id
          }
        })
        .then((response) => {
          this.permissions = response.data.permissions
        })
        .catch((error) => {
          console.log(error)
        })
    },
    togglePermission (permission, key, index, currentState) {
      if (currentState) {
        axios.delete('/groups/permissions/' + permission.id + '/roles/' + this.roleId, {
          params: {
            group_type: this.resourceType,
            group_id: this.resourceId,
          }
        })
          .then((response) => {
            this.permissions[key][index]['enabled'] = !currentState
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      } else {
        axios.post('/groups/permissions/' + permission.id + '/roles/' + this.roleId, {
          group_type: this.resourceType,
          group_id: this.resourceId,
        })
          .then((response) => {
            this.permissions[key][index]['enabled'] = !currentState
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      }
    },
  }
}
</script>
