<template>
<div>
  <div class="absolute container mx-2 md:mx-auto md:max-w-4xl bg-white rounded shadow-lg z-30" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
      <header class="text-gray-600 p-6 rounded flex flex-row justify-between items-center" for="user">
        <div></div>
        <div class="uppercase tracking-wide font-semibold text-lg">
          Settings
        </div>
        <div @click="closeModal" class="cursor-pointer">
          <font-awesome-icon :icon="faTimesCircle" class="text-lg text-red-500 opacity-75"></font-awesome-icon>
        </div>
      </header>

      <div>
        <div class="flex flex-row text-center text-gray-500">
          <div @click="activateThisColumn('tools')" :class="[activeColumn === 'tools' ? 'text-indigo-500 border-indigo-500 border-b-2' : 'cursor-pointer']" class="w-1/2 bg-white font-semibold p-4 rounded-tl">
            {{ 'Tools' | localize }}
          </div>
          <div @click="activateThisColumn('tags')" :class="[activeColumn === 'tags' ? 'text-indigo-500 border-indigo-500 border-b-2' : 'cursor-pointer']" class="w-1/2 bg-white font-semibold p-4 rounded-tl">
            {{ 'Tags' | localize }}
          </div>
          <div @click="activateThisColumn('status')" :class="[activeColumn === 'status' ? 'text-indigo-500 border-indigo-500 border-b-2' : 'cursor-pointer']" class="w-1/2 bg-white font-semibold p-4 rounded-tl">
            {{ 'Status' | localize }}
          </div>
        </div>
      </div>

      <!-- Tools Settings -->
      <div v-if="activeColumn === 'tools'" class="bg-gray-100 rounded-b p-8">
        <!-- Board settings -->
        <div class="pb-8">
          <div class="pb-4 px-2 flex items-center">
            <div class="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center">
              <font-awesome-icon :icon="faTools" class="text-white fa-xs"></font-awesome-icon>
            </div>
            <div class="pl-2 text-lg text-gray-600">
              Enable/Disable Tools on this {{ resourceType }}
            </div>
          </div>
          <div class="flex">
            <div @click="toggleToolStatus('task_enabled', settings.task_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.task_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">Task</span>
            </div>
            <div @click="toggleToolStatus('discussion_enabled', settings.discussion_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.discussion_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">Discussion</span>
            </div>
            <div @click="toggleToolStatus('message_enabled', settings.message_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.message_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">Message</span>
            </div>
            <div @click="toggleToolStatus('event_enabled', settings.event_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.event_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">Event</span>
            </div>
            <div @click="toggleToolStatus('file_enabled', settings.file_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.file_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">File</span>
            </div>
          </div>
        </div>
        <!-- Board settings -->

        <!-- Roadmap settings -->
        <div>
          <div class="pb-4 px-2 flex items-center">
            <div class="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center">
              <font-awesome-icon :icon="faTools" class="text-white fa-xs"></font-awesome-icon>
            </div>
            <div class="pl-2 text-lg text-gray-600">
              Enable/Disable Roadmap option on this {{ resourceType }}
            </div>
          </div>
          <div class="flex">
            <div @click="toggleToolStatus('roadmap_enabled', settings.roadmap_enabled)" class="rounded border px-4 py-2 mx-2 relative cursor-pointer"
              :class="[settings.roadmap_enabled ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
              <span class="cursor-pointer">Roadmap</span>
            </div>
          </div>
        </div>
        <!-- Roadmap Settings -->
      </div>

      <tags-settings :shown="activeColumn === 'tags'" :resourceId="resourceId" :resourceType="resourceType"></tags-settings>
    </div>
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import tagsSettings from './tagsSettings'
import {
  faTimesCircle,
  faTools,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

export default {
  components: {tagsSettings},
  props: {
    resourceId: {
      required: true,
      type: Number
    },
    resourceType: {
      required: true,
      type: String
    },
    settings: {
      required: true,
      type: Object
    }
  },

  data: () => ({
    activeColumn: 'tools',
    faTimesCircle,
    faTools,
    faSearch,
  }),

  methods: {
    ...mapActions([
      'closeComponent'
    ]),
    closeModal () {
      this.closeComponent()
    },
    toggleToolStatus (tool, status) {
      axios.put('/groups/settings', {
        group_type: this.resourceType,
        group_id: this.resourceId,
        [tool]: status ? 0 : 1
      })
      .then((response) => {
        this.$emit('update-settings', response.data.settings)
      })
      .catch((error) => {
        console.error(error)
      })
    },
    activateThisColumn (column) {
      this.activeColumn = column
    },
  }
}
</script>
