<template>
  <div :class="{'hidden': (activeTab != 'database')}" class="w-full mb-8">
    <div class="bg-white shadow rounded text-grey-900 mt-4">
      <div class="rounded">
        <div class="flex flex-col md:p-8">
          <div class="p-4 flex items-center justify-between">
            <div class="text-lg md:text-xl font-medium text-grey-700 uppercase">
              Dropbox
            </div>
            <div class="flex flex-row items-center">
              <div v-if="hasKey">
                &nbsp;
                <button class="btn btn-default" @click="exportdb">
                  <font-awesome-icon v-if="loading == 'exportdb'" :icon="faSpinner" class="text-xl md:text-2xl" spin></font-awesome-icon>
                  <span v-else>
                    <font-awesome-icon :icon="faCloudDownloadAlt" class="text-xl md:text-2xl"></font-awesome-icon>
                    Export
                  </span>
                </button>
                &nbsp;
                <button class="btn btn-default" @click="loadFiles">
                  <font-awesome-icon v-if="loading == 'importdb'" :icon="faSpinner" class="text-xl md:text-2xl" spin></font-awesome-icon>
                  <span v-else>
                    <font-awesome-icon :icon="faCloudUploadAlt" class="text-xl md:text-2xl"></font-awesome-icon>
                    Import
                  </span>
                </button>
                &nbsp;
              </div>
              <div v-else>
                Dropbox is not setup yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div :class="{'hidden': !modalShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
        <div class="p-4">
          <div class="p-4">
            <div v-if="output.length">
              {{ output }}
            </div>
            <div v-if="files.length">
              <label class="block uppercase tracking-wide text-grey-700 text-xs font-bold mb-2" for="grid-first-name">
                Select file to be restored <span class="text-grey capitalize">(required)</span>
              </label>
              <select v-model="filename" class="appearance-none block w-full bg-grey-lighter text-grey-700 border border-grey-lighter rounded py-3 px-4">
                <option value="">-- Select file --</option>
                <option v-for="file in files" :value="file"> {{ file }} </option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
          <button @click="closeModal" class="text-red-lighter hover:font-bold hover:text-red-light">Close</button>
          <button v-if="!output.length" @click="restore" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-2 px-4 rounded">
            <font-awesome-icon v-if="loading == 'restoring'" :icon="faSpinner" class="text-xl md:text-2xl" spin></font-awesome-icon>
            <span v-else>
              Restore
            </span>
          </button>
        </div>
      </div>
      <div @click="closeModal" :class="{'hidden': !modalShown}" class="h-screen w-screen fixed pin bg-grey-900 opacity-25"></div>
    </div>
  </div>  
</template>

<script>
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons/faCloudDownloadAlt'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
export default {
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    modalShown: false,
    access_token: '',
    faCloudDownloadAlt,
    faCloudUploadAlt,
    faCog,
    faSpinner,
    hasKey: false,
    loading: '',
    output: '',
    files: [],
    filename: ''
  }),
  mounted() {
    axios.get('/admin/check-dropbox-setup')
      .then(response => {
        this.hasKey = response.data.status;
      })
      .catch((...args) => {
        console.error(...args);
      });
  },
  methods: {
    closeModal() {
      this.modalShown = false;
      this.files = [];
      this.output = '';
    },
    exportdb() {
      this.loading = 'exportdb';
      axios.get('/admin/take-backup')
      .then(response => {
        this.loading = '';
        this.modalShown = true;
        this.output = response.data.message;
      })
      .catch((...args) => {
        console.error(...args);
        this.loading = '';
      });
    },
    loadFiles() {
      this.loading = 'importdb';
      axios.get('/admin/backup-list')
      .then(response => {
        this.loading = '';
        this.modalShown = true;
        this.files = response.data;
      })
      .catch((...args) => {
        console.error(...args);
        this.loading = '';
      });
    },
    restore() {
      this.loading = 'restoring';
      axios.post('/admin/backup-restore', {
        filename: this.filename
      })
      .then(response => {
        this.loading = '';
        this.modalShown = false;
        this.files = [];
        this.output = ''
        alert("File restored !");
      })
      .catch((...args) => {
        console.error(...args);
        this.loading = '';
      });

    }
  }
}
</script>
