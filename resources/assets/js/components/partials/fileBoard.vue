<template>
<div v-if="activeTab === 'files'" class="w-full">
  <div>
    <div v-if="authenticated" class="flex justify-center pb-4">
      <file-upload :resourceType="resourceType" :resourceId="resource.id" @on-success="getAllFiles"></file-upload>
    </div>

    <div class="">
      <ul class="flex flex-row flex-wrap justify-center list-reset">
        <file v-for="(file, index) in files" :file="file" :key="file.id" :index="index" @deleted="deleteFile" ></file>
      </ul>
    </div>

    <div v-if="files.length === 0" class="flex flex-col items-center">
      <div class="pb-4">Wanna share some resource with your teammates? Upload it then.</div>
      <img src="/image/files.svg" alt="files" class="w-80">
    </div>
  </div>
</div>
</template>

<script>
import {
  faEllipsisH,
  faFileAlt,
  faFileImage,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import fileUpload from './fileUpload'
import file from './file'

export default {
  components: {fileUpload, file},

  props: {
    resource: {
      required: true,
      type: Object
    },
    resourceType: {
      required: true,
      type: String
    },
    activeTab: {
      required: true,
      type: String
    }
  },

  data: () => ({
    files: [],
    dropdownMenuShown: false,
    user,
    authenticated,
    faEllipsisH,
    faFileAlt,
    faFileImage,
    faFilePdf
  }),

  mounted () {
    this.getAllFiles()
  },

  watch: {
    activeTab: function () {
      this.getAllFiles(false)
    }
  },

  methods: {
    getAllFiles (uploaded = false) {
      if (this.activeTab === 'files' && (this.files.length === 0 || uploaded)) {
        axios.get('/files', {
            params: {
              group_type: this.resourceType,
              group_id: this.resource.id,
            }
          })
          .then((response) => {
            this.files = response.data.files
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    deleteFile (index) {
      this.files.splice(index, 1)
    },
  }
}
</script>
