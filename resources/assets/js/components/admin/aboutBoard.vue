<template>
<div :class="{'hidden': (activeTab != 'about')}" class="w-full mb-8">
  <div :class="{'hidden': !showUpdateModal}">
    <div @click="closeUpdateModal" class="absolute inset-0 opacity-75 bg-gray-500"></div>
    <div class="fixed inset-x-0 w-1/3 z-10 bg-gray-200 mx-auto p-8 rounded">
      <p class="py-2">
      {{ message }}
      </p>
      <div class="flex flex-row justify-between pt-8 bg-gray-200 rounded">
        <button @click="closeUpdateModal" class="text-red-200 hover:font-bold hover:text-red-400 hover:border-red-400 border-red-200 border px-4 py-3 rounded">Ok</button>
      </div>
    </div>
  </div>

  <div class="container mx-4 md:mx-auto py-8 bg-white rounded shadow text-center text-gray-800">
    <div class="pb-4 text-3xl">
      Goodwork
    </div>
    <div class="p-2">
      Version: <span class="pl-2 text-xl text-gray-900">{{ version }}</span>
      <button @click="checkForUpdates" class="no-underline p-4 m-4 mb-0 bg-white text-base text-teal-500 rounded border border-gray-400">
        {{ 'Check for Updates' | localize }}
        <div v-if="loading" class="inline">
          <font-awesome-icon :icon="faSpinner" spin></font-awesome-icon>
        </div>
      </button>
    </div>
    <div class="p-2">
      {{ 'Last Updated' | localize }}: <span class="pl-2 text-xl text-gray-900">{{ lastUpdated }}</span>
    </div>
    <div class="p-2">
      {{ 'Author' | localize }}: <a href="https://hasnayeen.github.io/" class="pl-2 text-xl text-blue-400 no-underline">Nehal Hasnayeen</a>
    </div>
    <div class="p-2">
      {{ 'Submit issue & feedback at' | localize }}: <a href="https://github.com/iluminar/goodwork/issues" class="pl-2 text-xl text-blue-400 no-underline">Goodwork Issues</a>
    </div>
    <div class="pt-8">
      © {{ (new Date()).getFullYear() }} <a href="https://github.com/iluminar/" class="text-xl text-blue-400 no-underline">Iluminar</a>
    </div>
  </div>
</div>  
</template>

<script>
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

export default {
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    loading: false,
    showUpdateModal: false,
    version: 0.0,
    lastUpdated: '',
    message: '',
    faSpinner
  }),
  created () {
    this.version = document.querySelector('meta[name="app-version"]').content
    this.lastUpdated = document.querySelector('meta[name="last-updated"]').content
  },
  methods: {
    checkForUpdates () {
      this.loading = true
      axios.get('/admin/check-for-update')
        .then((response) => {
          this.loading = false
          this.message = response.data.message
          this.showUpdateModal = true
        })
        .catch((error) => {
          this.loading = false
          this.message = error.response.data.message
          this.showUpdateModal = true
        })
    },
    closeUpdateModal () {
      this.loading = false
      this.showUpdateModal = false
    },
    updateSoftware () {
      this.loading = true
      axios.get('/admin/update-software')
        .then((response) => {
          this.loading = false
          this.message = response.data.message
          this.showUpdateModal = false
        })
        .catch((error) => {
          this.loading = false
          this.message = error.response.data.message
          this.showUpdateModal = false
        })
    }
  }
}
</script>
