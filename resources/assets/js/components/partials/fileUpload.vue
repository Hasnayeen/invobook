<template>
  <div class="py-4">
    <div>
      <label for="file-upload"></label>
      <input type="file" name="file-upload" ref="files" @change="filesSelected" class="hidden" multiple>
      <button @click="selectFiles" class="bg-teal-400 text-white p-3 rounded shadow-md">Upload Files</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    resourceType: {
      required: true,
      type: String
    },
    resourceId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    files: []
  }),

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    selectFiles () {
      this.$refs.files.click()
    },
    filesSelected () {
      this.files = this.$refs.files.files
      let formData = new FormData()
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        formData.append('files[' + i + ']', file)
      }
      formData.append('group_type', this.resourceType)
      formData.append('group_id', this.resourceId)
      this.submitFiles(formData)
    },
    submitFiles (formData) {
      axios.post('/files',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          this.$emit('on-success', true)
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
