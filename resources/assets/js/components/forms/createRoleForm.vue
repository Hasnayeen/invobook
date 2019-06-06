<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
      <div class="p-4">
          <div class="p-4">
              <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
                  Name <span class="text-gray-500 capitalize">(required)</span>
              </label>
              <input v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" id="grid-last-name" type="text" placeholder="New Role" required>
          </div>
      </div>
      <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
          <button @click="closeForm" class="text-red-lighter hover:font-bold hover:text-red-400">Cancel</button>
          <button @click="createRole" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Create</button>
      </div>
  </div>
  <div @click="closeForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
export default {
  props: ['formShown'],
  data: () => ({
    name: ''
  }),
  methods: {
    closeForm () {
      this.$emit('close')
    },
    createRole () {
      axios.post('/admin/roles', {name: this.name})
        .then((response) => {
          this.name = ''
          this.$emit('role-created', response.data.role)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>
