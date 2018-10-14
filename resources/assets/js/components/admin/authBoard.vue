<template>
<div :class="{'hidden': (activeTab != 'auth')}" class="w-full mb-8">
  <div class="bg-white shadow rounded-t text-grey-darkest mt-4">
    <div class="flex flex-row text-center text-grey">
      <div @click="activateThisColumn('roles')" :class="[activeColumn === 'roles' ? 'text-indigo border-indigo border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4 rounded-tl">
        {{ 'Roles' | localize }}
      </div>    
      <div @click="activateThisColumn('permissions')" :class="[activeColumn === 'permissions' ? 'text-indigo border-indigo border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4">
        {{ 'Permissions' | localize }}
      </div>
    </div>
    <roles-board :activeColumn="activeColumn"></roles-board>
    <permissions-board :activeColumn="activeColumn"></permissions-board>
  </div>
</div>
</template>

<script>
import rolesBoard from './rolesBoard'
import permissionsBoard from './permissionsBoard'
export default {
  components: {rolesBoard, permissionsBoard},
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    activeColumn: ''
  }),
  beforeUpdate () {
    if (this.activeColumn === '') {
      this.activeColumn = 'roles'
    }
  },
  methods: {
    activateThisColumn (column) {
      if (column != this.active) {
        this.activeColumn = column
      }
    },
  }
}
</script>
