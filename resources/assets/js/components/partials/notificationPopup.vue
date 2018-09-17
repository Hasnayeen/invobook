<template>
    <div :class="[notificationShown ? '' : 'hidden', (messageType === 'success') ? 'text-teal-light' : 'text-red' ]" class="fixed pin-t bg-white text-lg rounded container mx-auto md:w-1/2 mt-16 py-6 px-8 shadow-lg" style="left: 0; right: 0; max-width: 640px;">
        {{message}} <i class="fas fa-times float-right cursor-pointer" @click="closeNotification"></i>
    </div>
</template>

<script>
export default {
  data: () => ({
    notificationShown: false,
    message: '',
    messageType: '',
  }),
  methods: {
    closeNotification () {
      this.notificationShown = false
    },
    showNotification (message, messageType) {
      this.message = message
      this.messageType = messageType
      this.notificationShown = true
      setTimeout(() => {
        this.closeNotification
      }, 3000)
    }
  },
  created () {
    EventBus.$on('notification', this.showNotification)
  },
  beforeDestroy () {
    EventBus.$off('notification', this.showNotification)
  }
}
</script>
