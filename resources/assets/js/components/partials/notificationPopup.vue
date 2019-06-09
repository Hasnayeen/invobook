<template>
  <div :class="[notificationShown ? '' : 'hidden', (messageType === 'success') ? 'border-teal-400 bg-teal-100 text-teal-800' : 'border-red-400 bg-red-100 text-red-800' ]"
    class="fixed top-0 flex flex-row justify-between items-center border-l-2 text-lg font-medium rounded container mx-auto md:w-1/2 mt-16 py-8 pl-4 pr-8 shadow-lg z-50"
    style="left: 0; right: 0; max-width: 640px;">
      <div class="flex items-center">
        <font-awesome-icon v-if="messageType === 'success'" :icon="faCheckCircle" class="cursor-pointer text-2xl text-teal-400"></font-awesome-icon>
        <font-awesome-icon v-if="messageType === 'error'" :icon="faExclamationCircle" class="cursor-pointer text-2xl text-red-400"></font-awesome-icon>
        <div class="inline pl-2">
          {{message}} 
        </div>
      </div>
      <div @click="closeNotification" class="inline">
        <font-awesome-icon :icon="faTimes" class="cursor-pointer text-sm"></font-awesome-icon>
      </div>
  </div>
</template>

<script>
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    notificationShown: false,
    message: '',
    messageType: '',
    faTimes,
    faCheckCircle,
    faExclamationCircle,
  }),
  created () {
    EventBus.$on('notification', this.showNotification)
  },
  beforeDestroy () {
    EventBus.$off('notification', this.showNotification)
  },
  methods: {
    closeNotification () {
      this.notificationShown = false
    },
    showNotification (message, messageType) {
      this.message = message
      this.messageType = messageType
      this.notificationShown = true
      setTimeout(() => {
        this.closeNotification()
      }, 2000)
    }
  }
}
</script>
