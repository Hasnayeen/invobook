<template>
<div :class="{'hidden': !show}">
  <div class="absolute container mx-2 md:mx-auto md:w-1/2 bg-gray-100 rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
      <header class="block uppercase tracking-wide bg-gray-200 text-gray-600 text-xs font-bold text-center text-lg p-6 rounded" for="user">
        Permission Settings
      </header>

      <div class="flex flex-row text-gray-800">
        <div class="w-1/2 px-4 py-2 flex flex-row items-center border-teal-500 border-b">
          <div class="flex flex-col">
            <div class="font-semibold pb-1">
              Roles
            </div>
            <div class="text-xs">
              Set permission for a specific role
            </div>
          </div>
        </div>
        <div class="w-1/2 px-4 py-2 flex flex-row items-center cursor-pointer">
          <div class="flex flex-col">
            <div class="font-semibold pb-1">
              Users
            </div>
            <div class="text-xs">
              Set permission for an individual user
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between p-6 bg-gray-200 rounded-b">
        <button @click="closeModal" class="text-red-400 hover:font-bold mx-2">Close</button>
        <button @click="" class="bg-teal-200 text-teal-800 p-3 rounded font-bold">Save</button>
      </div>
    </div>
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
export default {
  props: {
    resourceType: {
      type: String,
      required: true
    },
    resourceId: {
      type: Number,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
  }),

  methods: {
    closeModal () {
      this.$emit('close')
    },
  }
}
</script>
