<template>
<div :class="{'hidden': (activeTab != 'offices')}">
  <!-- Create Office Form -->
  <div :class="{'hidden': !showCreateOfficeForm}">
    <div class="absolute pin opacity-75 bg-grey"></div>
    <div id="create-project-form" class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
          type="text" placeholder="Name" v-model="name">
        <span class="hidden"></span>
      </p>
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
          type="text" placeholder="Description" v-model="description">
        <span class="hidden"></span>
      </p>
      <div class="flex flex-row justify-between pt-8 bg-grey-lighter rounded">
        <button @click="closeCreateOfficeModal" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
        <button @click="createNewOffice" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded">Create</button>
      </div>
    </div>
  </div>

  <div class="flex flex-row flex-wrap justify-center">
    <div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer"
      @click="openCreateOfficeModal">
      <font-awesome-icon :icon="faPlus" class="text-grey-dark text-4xl"></font-awesome-icon>
      <span class="text-grey-darker pt-4">{{ 'Add a new office' | localize }}</span>
    </div>

    <office v-for="(office, index) in offices" :key="index" :details="office" @deleted="deleteOffice(index)"></office>
  </div>
</div>
</template>

<script>
import office from './office'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { office },
  props: {
    offices: {
      required: true,
      type: Array
    },
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    showCreateOfficeForm: false,
    name: '',
    description: '',
    faPlus
  }),
  methods: {
    createNewOffice () {
      axios.post('/offices', {
        name: this.name,
        description: this.description
      })
        .then((response) => {
          if (response.data.status === 'success') {
            EventBus.$emit('notification', response.data.message, response.data.status)
            response.data.office.url = 'offices/' + response.data.office.id
            this.offices.push(response.data.office)
            this.showCreateOfficeForm = false
          }
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    closeCreateOfficeModal () {
      this.showCreateOfficeForm = false
    },
    openCreateOfficeModal () {
      this.showCreateOfficeForm = true
    },
    deleteOffice (index) {
      this.offices.splice(index, 1)
    }
  }
}
</script>
