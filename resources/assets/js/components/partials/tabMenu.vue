<template>
<div class="flex flex-row justify-around my-4 pt-4 pb-2 bg-white shadow rounded text-gray-600 sticky tab-sticky-top z-20">
  <div v-if="settings.task_enabled" @click="activateThisTab('tasks')"
    :class="[(active === 'tasks') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <font-awesome-icon :icon="faTasks" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular">{{ 'Tasks' | localize }}</span>
  </div>
  <div v-if="settings.discussion_enabled" @click="activateThisTab('discussions')"
    :class="[(active === 'discussions') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <font-awesome-icon :icon="faClipboardList" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular">{{ 'Discussions' | localize }}</span>
  </div>
  <div v-if="settings.message_enabled" @click="onMessagesTabClicked"
    :class="[(active === 'messages') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <span class="relative inline-block">
      <font-awesome-icon :icon="faComments" class="text-2xl"></font-awesome-icon>
      <font-awesome-icon :icon="faCircle"
        v-if="displayUnreadMessageBadge"
        class="absolute text-xs text-teal-500"
        style="right:-3px; top:-6px;">
      </font-awesome-icon>
    </span>
    <span class="hidden md:block text-xs font-regular">{{ 'Messages' | localize }}</span>
  </div>
  <div v-if="settings.event_enabled" @click="activateThisTab('events')"
    :class="[(active === 'events') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <font-awesome-icon :icon="faCalendarAlt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular">{{ 'Events' | localize }}</span>
  </div>
  <div v-if="settings.file_enabled" @click="activateThisTab('files')"
    :class="[(active === 'files') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <font-awesome-icon :icon="faFileAlt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular">{{ 'Files' | localize }}</span>
  </div>
  <div v-if="authenticated" @click="activateThisTab('activities')"
    :class="[(active === 'activities') ? 'text-teal-600 font-semibold border-teal-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center w-1/6 flex-grow']">
    <font-awesome-icon :icon="faBolt" class="text-2xl"></font-awesome-icon>
    <span class="hidden md:block text-xs font-regular">{{ 'Activities' | localize }}</span>
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
    },
    settings: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    authenticated,
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
