<template>
<div>
  <!-- Create Office Form -->
  <div :class="{'hidden': !showCreateOfficeForm}">
    <div class="absolute inset-0 opacity-75 bg-gray-500 z-10"></div>
    <div id="create-project-form" class="fixed inset-x-0 w-1/3 z-10 bg-gray-200 mx-auto p-8 rounded">
      <p class="py-2">
        <input ref="focusInput" class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800"
          type="text" placeholder="Name" v-model="name">
        <span class="hidden"></span>
      </p>
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800"
          type="text" placeholder="Description" v-model="description">
        <span class="hidden"></span>
      </p>
      <div class="flex flex-row justify-between pt-8 bg-gray-200 rounded">
        <button @click="closeCreateOfficeModal" class="hover:font-bold text-red-400">Cancel</button>
        <button @click="createNewOffice" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-4 rounded">Create</button>
      </div>
    </div>
  </div>

  <div v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" class="text-center">
    <button @click="openCreateOfficeModal" class="no-underline p-3 mb-4 bg-white text-center text-base text-teal-700 rounded shadow">{{ 'Add a new office' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap justify-center">
    <office v-for="(office, index) in offices" :key="office.id" :index="index" :details="office"></office>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import office from './office'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { office },

  data: () => ({
    showCreateOfficeForm: false,
    name: '',
    description: '',
    user,
    faPlus
  }),

  created () {
    this.getAllOffices()
  },

  computed: mapState({
    offices: state => state.offices
  }),

  methods: {
    ...mapActions([
      'getOffices',
      'addOffice'
    ]),
    getAllOffices () {
      if (this.offices.length < 1) {
        this.getOffices()
      }
    },
    createNewOffice () {
      this.addOffice({name: this.name, description: this.description})
      this.closeCreateOfficeModal()
      this.name = ''
      this.description = ''
    },
    closeCreateOfficeModal () {
      this.showCreateOfficeForm = false
    },
    openCreateOfficeModal () {
      this.showCreateOfficeForm = true
      this.$nextTick(() => {
        this.$refs.focusInput.focus()
      })
    }
  }
}
</script>
