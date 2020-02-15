<template>
<div>
  <!-- Create Office Form -->
  <div :class="{'hidden': !showCreateOfficeForm}">
    <div @click="closeCreateOfficeModal" class="absolute inset-0 opacity-25 bg-black z-50"></div>
    <div class="fixed inset-x-0 lg:max-w-lg z-50 mx-auto rounded">
      <div class="bg-white p-6 rounded-t-lg">
        <div class="flex justify-between items-center pb-2">
          <div class="text-lg text-gray-800">{{ 'Create new office' | localize }}</div>
          <div @click="closeCreateOfficeModal">
            <font-awesome-icon :icon="faTimes" class="text-gray-600 cursor-pointer"></font-awesome-icon>
          </div>
        </div>
        <p class="py-2">
          <label for="title" class="text-sm text-gray-700">Title</label>
          <input name="title" ref="focusInput" class="w-full appearance-none border rounded mt-2 py-2 px-3 text-gray-800" type="text" v-model="name">
          <span class="hidden"></span>
        </p>
        <p class="py-2">
          <label for="description" class="text-sm text-gray-700">Description</label>
          <textarea name="description" id="" cols="30" rows="2" v-model="description" class="w-full appearance-none resize-none border rounded mt-2 py-2 px-3 text-gray-800"></textarea>
          <span class="hidden"></span>
        </p>
      </div>
      <div class="flex flex-row justify-end bg-gray-200 p-6 rounded-b-lg">
        <button @click="closeCreateOfficeModal" class="border bg-white py-2 px-3 mr-4 rounded">Cancel</button>
        <button @click="createOffice" class="bg-indigo-400 text-white font-medium hover:bg-indigo-600 py-2 px-3 rounded">Create</button>
      </div>
    </div>
  </div>

  <div v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" class="pb-4">
    <button @click="openCreateOfficeModal" class="no-underline p-4 flex flex-col items-center text-center text-lg text-indigo-700 rounded border-2 border-gray-500 border-dashed">
      <font-awesome-icon :icon="faPlus" class="text-sm"></font-awesome-icon>
      {{ 'Create new office' | localize }}
    </button>
  </div>
  <div class="my-4 pb-1 border-b border-gray-400">
    All Offices ({{ offices.length }})
  </div>
  <div id="offices-list" class="sm:-mx-4 md:-mx-12 lg:-mx-4 xl:-mx-10 flex flex-row flex-wrap justify-start">
    <office v-for="(office, index) in offices" :key="office.id" :index="index" :details="office"></office>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import office from './office'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { office },

  data: () => ({
    showCreateOfficeForm: false,
    name: '',
    description: '',
    user,
    faPlus,
    faTimes
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
    createOffice () {
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
