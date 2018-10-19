<template>
<div class="flex flex-row justify-around my-6 py-4 bg-white shadow rounded text-grey">
  <div @click="activateThisTab('tasks')"
    :class="[(active === 'tasks') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <font-awesome-icon :icon="faTasks" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Tasks' | localize }}</span>
  </div>
  <div @click="activateThisTab('discussions')"
    :class="[(active === 'discussions') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <font-awesome-icon :icon="faClipboardList" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Discussions' | localize }}</span>
  </div>
  <div @click="onMessagesTabClicked"
    :class="[(active === 'messages') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <span class="relative inline-block">
      <font-awesome-icon :icon="faComments" class="text-2xl"></font-awesome-icon>
      <font-awesome-icon :icon="faCircle"
        v-if="displayUnreadMessageBadge"
        class="absolute text-xs text-teal"
        style="right:-3px; top:-6px;">
      </font-awesome-icon>
    </span>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Messages' | localize }}</span>
  </div>
  <div @click="activateThisTab('events')"
    :class="[(active === 'events') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <font-awesome-icon :icon="faCalendarAlt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Events' | localize }}</span>
  </div>
  <div @click="activateThisTab('files')"
    :class="[(active === 'files') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <font-awesome-icon :icon="faFileAlt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Files' | localize }}</span>
  </div>
  <div @click="activateThisTab('activities')"
    :class="[(active === 'activities') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
    <font-awesome-icon :icon="faBolt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular pt-2">{{ 'Activities' | localize }}</span>
  </div>
</div>
</template>

<script>
import {
  faBolt,
  faCalendarAlt,
  faCircle,
  faClipboardList,
  faComments,
  faFileAlt,
  faTasks
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    active: {
      required: true,
      type: String
    }
  },
  data: () => ({
    faBolt,
    faCalendarAlt,
    faCircle,
    faClipboardList,
    faComments,
    faFileAlt,
    faTasks,
    hasUnreadMessage: false
  }),
  computed: {
    displayUnreadMessageBadge () {
      return this.hasUnreadMessage &&
        !this.isTabActive('messages')
    }
  },
  methods: {
    activateThisTab (tab) {
      this.$emit('activate', tab)
    },
    isTabActive (tab) {
      return this.active === tab
    },
    onMessagePushed () {
      this.setHasUnreadMessage(!this.isTabActive('messages'))
    },
    onMessagesTabClicked () {
      this.setHasUnreadMessage(false)
      this.activateThisTab('messages')
      EventBus.$emit('clear-title-notification')
    },
    setHasUnreadMessage (flag) {
      this.hasUnreadMessage = flag
    }
  },
  mounted () {
    EventBus.$on('messagePushed', this.onMessagePushed)
  }
}
</script>
