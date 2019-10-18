<template>
<div class="px-4 h-full border-l flex items-center">
  <div class="text-teal-400  text-base no-underline cursor-pointer" @click="showMessageBox">
    <font-awesome-icon :icon="faEnvelope" class="font-bold text-xl"></font-awesome-icon>
    <font-awesome-icon v-if="unreadMessage" :icon="faCircle" class="text-red-500 text-xs absolute top-0 mt-2 -ml-1" aria-hidden="true"></font-awesome-icon>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default {
  data: () => ({
    notificationShown: false,
    unreadMessage: user.unread_direct_messages,
    faEnvelope,
    faCircle
  }),
  created () {
    EventBus.$on('new-direct-message', this.showIndicator)
  },
  beforeDestroy () {
    EventBus.$off('new-direct-message', this.showIndicator)
  },
  computed: mapState([
    'user'
  ]),
  methods: {
    ...mapActions([
      'setCurrentComponent'
    ]),
    showMessageBox () {
      this.unreadMessage = false
      this.setCurrentComponent('direct-message-box')
    },
    showIndicator () {
      this.unreadMessage = true
    }
  }
}
</script>
