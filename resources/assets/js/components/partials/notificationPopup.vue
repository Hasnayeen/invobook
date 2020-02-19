<template>
<transition name="fade">
<div v-if="notificationShown" class="w-full">
  <div class="fixed top-0 w-full h-20 z-40 bg-gray-900 opacity-50"></div>
  <div :class="[(messageType === 'success') ? 'border-green-400 text-green-800' : 'border-red-400 text-red-800' ]"
    class="fixed top-0 left-0 right-0 container sm:max-w-xl md:max-w-3xl flex flex-row justify-between items-center border-l-2 bg-white text-lg font-medium rounded container mx-auto my-2 py-4 pl-4 pr-8 shadow-lg z-50">
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
</div>
</transition>
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

<style>
.fade-leave-to {
  transition: all 5s ease-in;
}
.fade-leave-active {
  opacity: 0;
}
</style>