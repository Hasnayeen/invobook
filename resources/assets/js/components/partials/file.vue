<template>
<div class="rounded-lg w-80 flex flex-col justify-center items-center m-6 shadow-md">
  <div @click="showFile" class="bg-gray-800 w-full overflow-hidden h-48 flex justify-center items-center rounded-t-lg cursor-pointer">
    <font-awesome-icon v-if="file.mime_type === 'application/pdf'" :icon="faFilePdf" class="w-full text-6xl text-white"></font-awesome-icon>
    <img v-else :src="'/storage/' + file.path" alt="" class="w-full">
  </div>
  <div class="bg-gray-100 w-full flex-grow flex items-center justify-center text-center rounded-b-lg p-4 text-sm text-gray-800">
    <div class="w-full truncate" :title="file.name">
      {{ file.name }}
    </div>
    <div class="relative pl-2">
      <div v-if="(file.owner_id === user.id)" @click="toggleFileMenu" v-click-outside="hideFileMenu" class="cursor-pointer">
        <font-awesome-icon :icon="faEllipsisH" class="text-white text-xl bg-gray-600 rounded-full p-1"></font-awesome-icon>
      </div>
      <div v-if="(file.owner_id === user.id) && dropdownMenuShown" class="absolute rounded shadow-lg top-0 mt-8 -ml-8 p-3 text-gray-800 bg-white hover:bg-indigo-200 left-0 z-10">
        <div @click="deleteFile" class="cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faEllipsisH, faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    file: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    },
  },

  data: () => ({
    dropdownMenuShown: false,
    user,
    faEllipsisH,
    faFilePdf,
  }),

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    showFile () {
      this.$emit('show', this.index)
    },
    deleteFile () {
      axios.delete(`/files/${this.file.id}`)
        .then((response) => {
          this.$emit('deleted', this.index)
          this.dropdownMenuShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.dropdownMenuShown = false
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    toggleFileMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideFileMenu () {
      this.dropdownMenuShown = false
    },
  }
}
</script>
