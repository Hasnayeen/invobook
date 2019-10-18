<template>
<div :class="{'hidden': (activeTab != 'auth')}" class="w-full mb-8">
  <div class="bg-white shadow rounded text-gray-900 mt-4">
    <div class="flex flex-row text-center text-gray-500">
      <div @click="activateThisColumn('roles')" :class="[activeColumn === 'roles' ? 'text-indigo-500' : 'bg-white cursor-pointer']" class="w-full font-semibold p-4 rounded-tl">
        {{ 'Default Permission Settings' | localize }}
      </div>
    </div>
    <roles-board :activeColumn="activeColumn"></roles-board>
  </div>
</div>
</template>

<script>
import rolesBoard from './rolesBoard'
export default {
  components: {rolesBoard},
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    activeColumn: 'roles'
  }),
  beforeUpdate () {
    if (this.activeColumn === '') {
      this.activeColumn = 'roles'
    }
  },
  methods: {
    activateThisColumn (column) {
      if (column !== this.active) {
        this.activeColumn = column
      }
    }
  }
}
</script>
