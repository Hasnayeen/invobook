<template>
<div :class="{'hidden': (activeTab != 'settings')}" class="w-full mb-8">
  <div class="bg-white shadow rounded text-gray-900 mt-4">
    <div class="flex flex-row text-center text-gray-500">
      <div @click="activateThisColumn('invitations')" :class="[activeColumn === 'invitations' ? 'text-indigo-500 border-indigo-500 border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4 rounded-tl">
        {{ 'Invitations' | localize }}
      </div>
      <div @click="activateThisColumn('integrations')" :class="[activeColumn === 'integrations' ? 'text-indigo-500 border-indigo-500 border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4 rounded-tl">
        {{ 'Integrations' | localize }}
      </div>
    </div>
    <integration-board :active-column="activeColumn"></integration-board>
    <invitation-board :active-column="activeColumn"></invitation-board>
  </div>
</div>  
</template>

<script>
import integrationBoard from './integrationBoard'
import invitationBoard from './invitationBoard'
export default {
  components: {integrationBoard, invitationBoard},
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    activeColumn: 'invitations'
  }),
  methods: {
    activateThisColumn (column) {
      if (column !== this.active) {
        this.activeColumn = column
      }
    }
  }
}
</script>
