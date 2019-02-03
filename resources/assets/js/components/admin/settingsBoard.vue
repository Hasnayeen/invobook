<template>
<div :class="{'hidden': (activeTab != 'settings')}" class="w-full mb-8">
  <div class="bg-white shadow rounded-t text-grey-darkest mt-4">
    <div class="flex flex-row text-center text-grey">
      <div @click="activateThisColumn('integrations')" :class="[activeColumn === 'integrations' ? 'text-indigo border-indigo border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4 rounded-tl">
        {{ 'Integrations' | localize }}
      </div>
      <div @click="activateThisColumn('invitations')" :class="[activeColumn === 'invitations' ? 'text-indigo border-indigo border-b-2' : 'bg-white cursor-pointer']" class="w-1/2 font-semibold p-4 rounded-tl">
        {{ 'Invitations' | localize }}
      </div>
    </div>
    <integration-board :active-column="activeColumn"></integration-board>
  </div>
</div>  
</template>

<script>
import integrationBoard from './integrationBoard'
export default {
  components: {integrationBoard},
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    activeColumn: 'integrations'
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
