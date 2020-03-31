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
      <div @click="toggleFileMenu" v-click-outside="hideFileMenu" class="cursor-pointer">
        <font-awesome-icon :icon="faEllipsisH" class="text-white text-xl bg-gray-600 rounded-full p-1"></font-awesome-icon>
      </div>
      <div v-if="dropdownMenuShown" class="absolute w-32 left-0">
        <ul class="list-reset bg-white rounded shadow-2xl py-2 absolute inset-x-0 mt-1 text-base text-center font-normal whitespace-no-wrap z-30">
          <li @click="downloadFile" class="px-4 py-2 text-gray-800 bg-white hover:bg-indigo-200 font-medium cursor-pointer">
              {{ 'Download' | localize }}
          </li>
          <li v-if="(file.owner_id === user.id)" @click="deleteFile" class="px-4 py-2 text-gray-800 bg-white hover:bg-indigo-200 font-medium cursor-pointer">
              {{ 'Delete' | localize }}
          </li>  
          </ul>
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
    downloadFile () {
      axios.get(`/storage/${this.file.name}`, {responseType: 'blob'})
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', this.file.name);
        document.body.appendChild(link);
        link.click();
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
