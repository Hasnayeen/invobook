<template>
<div :class="{'hidden': (activeColumn !== 'integrations')}" class="bg-white rounded-b">
  <div class="flex flex-col p-8">
    <div v-for="(service, index) in services" class="border-b p-4 flex items-center justify-between">
      <div class="text-2xl font-medium text-grey-darker capitalize">
        {{ service.name }}
      </div>
      <span class="">
        <button @click="showGithubSetupModal" :class="{'disable': service.enabled}" class="px-4 py-3 font-semibold bg-teal text-white rounded">{{ service.enabled ? 'Disable' : 'Enable'}}</button>
      </span>
    </div>
  </div>

  <div class="">
    <div :class="{'hidden': !modalShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
      <div class="p-4">
        <div class="p-4">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Github Personal Access Token <span class="text-grey capitalize">(required)</span>
          </label>
          <input ref="focusInput" v-model="access_token" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="password" placeholder="*******" required>
        </div>
      </div>
      <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
        <button @click="closeGithubSetupModal" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
        <button @click="saveToken" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-2 px-4 rounded">Save</button>
      </div>
    </div>
    <div @click="closeGithubSetupModal" :class="{'hidden': !modalShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
  </div>
</div>  
</template>

<script>
export default {
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },
  data: () => ({
    modalShown: false,
    access_token: '',
    services: []
  }),
  mounted () {
    axios.get('/admin/services')
      .then((response) => {
        this.services = response.data.services
      })
      .catch((error) => {
        console.error(error.response.data.message)
      })
  },
  methods: {
    showGithubSetupModal () {
      this.modalShown = true
    },
    closeGithubSetupModal () {
      this.modalShown = false
    },
    saveToken () {
      axios.post('admin/services', {
        name: 'github',
        access_token: this.access_token
      })
        .then((response) => {
          this.modalShown = false
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
}
</script>
