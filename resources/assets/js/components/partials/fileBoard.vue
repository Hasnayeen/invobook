<template>
<div v-if="activeTab === 'files'" class="w-full">
  <file-modal v-if="file" :fileModalShown="fileModalShown" :file="file" @close="closeFileModal"></file-modal>

  <div>
    <div v-if="authenticated" class="flex justify-center pb-4">
      <file-upload :resourceType="resourceType" :resourceId="resource.id" @on-success="getAllFiles"></file-upload>
    </div>

    <div class="">
      <ul class="flex flex-row flex-wrap justify-center list-reset">
        <li v-for="(file, index) in files" :key="file.id">
          <file
            :file="file"
            :index="index"
            @show="showFile"
            @deleted="deleteFile" ></file>
        </li>
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
import fileUpload from './fileUpload'
import fileModal from './fileModal'
import file from './file'

export default {
  components: {fileUpload, fileModal, file},

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
    file: {},
    fileModalShown: false,
    index: null,
    dropdownMenuShown: false,
    user,
    authenticated,
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
    showFile (index) {
      this.file = this.files[index]
      this.index = index
      this.fileModalShown = true
    },
    closeFileModal () {
      this.fileModalShown = false
    }
  }
}
</script>
