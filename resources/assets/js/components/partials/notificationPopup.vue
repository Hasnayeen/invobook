<template>
<div :class="[notificationShown ? '' : 'hidden', (messageType === 'success') ? 'bg-teal-600' : 'bg-red-400' ]"
  class="fixed top-0 text-white text-lg font-semibold rounded container mx-auto md:w-1/2 mt-16 py-6 px-8 shadow-lg z-50"
  style="left: 0; right: 0; max-width: 640px;">
    {{message}} 
    <div @click="closeNotification" class="inline">
      <font-awesome-icon :icon="faTimes" class="float-right cursor-pointer"></font-awesome-icon>
    </div>
</div>
</template>

<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    notificationShown: false,
    message: '',
    messageType: '',
    faTimes
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
      }, 3000)
    }
  }
}
</script>
