<template>
<div class="px-4 h-full border-l flex items-center">
  <div id="notification" class="text-teal-light text-base no-underline cursor-pointer" @click="showMessageBox">
    <font-awesome-icon :icon="faEnvelope" class="font-bold text-xl"></font-awesome-icon>
    <font-awesome-icon :icon="faCircle" v-if="unreadMessage" class="text-red-light text-sm absolute pin-t mt-3 ml-4" aria-hidden="true"></font-awesome-icon>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { faEnvelope, faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    token: Laravel.csrfToken,
    url: navUrl,
    notificationShown: false,
    unreadMessage: false,
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
    showMessageBox () {
      this.unreadMessage = false
      EventBus.$emit('show-message-box')
    },
    showIndicator () {
      this.unreadMessage = true
    }
  }
}
</script>
