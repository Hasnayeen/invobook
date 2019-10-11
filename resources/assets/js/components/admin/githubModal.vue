<template>
  <div v-if="show">
    <div class="absolute container mx-auto w-5/6 md:w-3/5 lg:max-w-4xl bg-white rounded shadow-lg z-30" style="top: 12vh;left: 0;right: 0;">
      <div class="p-8 flex items-center">
        <!-- <div class="px-3 py-1 rounded-full bg-green-200 text-green-700 uppercase text-xs font-semibold inline">
          {{ active ? 'Active' : 'Not Set' }}
        </div> -->
        <button @click="showTokenForm" class="bg-teal-600 text-white p-3 rounded">
          {{ (service.active ? 'Reset Token' : 'Set Token') | localize }}
        </button>
        <a href="https://github.blog/2013-05-16-personal-api-tokens/" class="underline text-blue-500 text-sm pl-4">
          {{ 'How to get a personal access token' | localize }}
        </a>
      </div>

      <div v-if="tokenFormShown">
        <div class="p-8 pt-0">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="github-access-token">
            {{ 'Github Personal Access Token' | localize }} <span class="text-gray-500 capitalize">{{ '(required)' | localize }}</span>
          </label>
          <div class="flex">
            <input name="github-access-token" ref="focusInput" v-model="access_token" class="appearance-none block bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" type="password" placeholder="*******" required>
            <button @click="saveToken" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-6 ml-4 rounded">{{ 'Save' | localize }}</button>
          </div>
        </div>
      </div>
      <show-github-repo :active="service.active"></show-github-repo>
    </div>
    <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-10"></div>
  </div>
</template>

<script>
import showGithubRepo from "./showGithubRepo"
export default {
  components: {showGithubRepo},
  props: {
    show: {
      required: true,
      type: Boolean
    },
    service: {
      required: true,
      type: Object
    }
  },

  data: () => ({
    access_token: '',
    tokenFormShown: false
  }),

  watch: {
    service: function (value) {
      this.tokenFormShown = ! value.active
    }
  },

  methods: {
    showTokenForm () {
      this.tokenFormShown = true
    },
    saveToken () {
      axios.post('admin/services', {
        name: 'github',
        access_token: this.access_token
      })
        .then((response) => {
          this.modalShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
       })
    },
    closeModal () {
      this.$emit('close')
    },
  }
}
</script>
