<template>
<div v-if="activeTab === 'files'" class="w-full">
  <div>
    <div v-if="authenticated" class="flex justify-center pb-4">
      <file-upload :resourceType="resourceType" :resourceId="resource.id" @on-success="getAllFiles"></file-upload>
    </div>

    <div class="">
      <ul class="flex flex-row flex-wrap justify-center list-reset">
        <li v-for="file in files" class="rounded-lg w-80 flex flex-col justify-center items-center m-6 shadow-md cursor-pointer">
          <div class="bg-gray-800 w-full overflow-hidden h-48 flex justify-center items-center rounded-t-lg">
            <img :src="'/storage/' + file.path" alt="" class="h-full">
          </div>
          <div class="bg-white w-full flex-grow flex items-center justify-center text-center rounded-b-lg p-4 text-sm text-gray-800">
            <div class="w-full truncate" :title="file.name">
              {{ file.name }}
            </div>
          </div>
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
import {
  faEllipsisH,
  faFileAlt,
  faFileImage,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import fileUpload from './fileUpload'
export default {
  components: {fileUpload},
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
    }
  }
}
</script>
