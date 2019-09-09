<template>
  <div v-if="notificationShown" :class="[(messageType === 'success') ? 'border-green-400 text-green-800' : 'border-red-400 text-red-800' ]"
    class="fixed top-0 flex flex-row justify-between items-center border-l-2 bg-white text-lg font-medium rounded container mx-auto md:w-1/2 mt-16 py-8 pl-4 pr-8 shadow-lg z-50"
    style="left: 0; right: 0; max-width: 640px;">
      <div class="flex items-center">
        <font-awesome-icon v-if="messageType === 'success'" :icon="faCheckCircle" class="cursor-pointer text-2xl text-green-400"></font-awesome-icon>
        <font-awesome-icon v-if="messageType === 'error'" :icon="faExclamationCircle" class="cursor-pointer text-2xl text-red-400"></font-awesome-icon>
        <div class="inline pl-2">
          {{message}} 
        </div>
      </div>
      <div @click="closeNotificationPopup" class="inline">
        <font-awesome-icon :icon="faTimes" class="cursor-pointer text-sm"></font-awesome-icon>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faTimes, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    faTimes,
    faCheckCircle,
    faExclamationCircle,
  }),

  computed: {
    ...mapState({
      notificationShown: state => state.notification.notificationShown,
      messageType: state => state.notification.type,
      message: state => state.notification.message
    })
  },

  methods: {
    ...mapActions([
      'closeNotification'
    ]),
    closeNotificationPopup () {
      this.closeNotification()
    },
  }
}
</script>
