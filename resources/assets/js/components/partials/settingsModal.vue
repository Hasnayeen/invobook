<template>
<div v-if="show">
  <div class="absolute container mx-2 md:mx-auto md:max-w-4xl bg-gray-100 rounded shadow-lg z-30" style="top: 10vh;left: 0;right: 0;">
    <div class="m-auto flex-col flex">
      <header class="bg-gray-200 text-gray-600 p-6 rounded flex flex-row justify-between items-center" for="user">
        <div></div>
        <div class="uppercase tracking-wide font-semibold text-lg">
          Settings
        </div>
        <div @click="closeModal" class="cursor-pointer">
          <font-awesome-icon :icon="faTimesCircle" class="text-lg text-red-500 opacity-75"></font-awesome-icon>
        </div>
      </header>

      <div v-if="settings" class="flex p-8">
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
  </div>
  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
export default {
  props: {
    resourceId: {
      required: true,
      type: Number
    },
    resourceType: {
      required: true,
      type: String
    },
    show: {
      required: true,
      type: Boolean
    },
    settings: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    faTimesCircle
  }),
  methods: {
    closeModal () {
      this.$emit('close')
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
    }
  }
}
</script>
