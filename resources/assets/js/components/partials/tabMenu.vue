<template>
<div id="tools-menu" class="pt-4 pb-2 bg-white shadow text-gray-600 sticky tab-sticky-top z-20">
  <div class="mx-auto px-4 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex">
    <div v-if="settings.task_enabled" @click="activateThisTab('tasks')"
      :class="[(active === 'tasks') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faTasks" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Tasks' | localize }}</span>
    </div>
    <div v-if="settings.discussion_enabled" @click="activateThisTab('discussions')"
      :class="[(active === 'discussions') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faClipboardList" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Discussions' | localize }}</span>
    </div>
    <div v-if="settings.message_enabled" @click="onMessagesTabClicked"
      :class="[(active === 'messages') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <span class="relative inline-block">
        <font-awesome-icon :icon="faComments" class="sm:hidden md:inline mr-2"></font-awesome-icon>
        <font-awesome-icon :icon="faCircle"
          v-if="displayUnreadMessageBadge"
          class="absolute text-xs text-indigo-500"
          style="right:-3px; top:-6px;">
        </font-awesome-icon>
      </span>
      <span class="hidden sm:block font-regular">{{ 'Messages' | localize }}</span>
    </div>
    <div v-if="settings.event_enabled" @click="activateThisTab('events')"
      :class="[(active === 'events') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faCalendarAlt" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Events' | localize }}</span>
    </div>
    <div v-if="settings.file_enabled" @click="activateThisTab('files')"
      :class="[(active === 'files') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faFileAlt" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Files' | localize }}</span>
    </div>
    <div v-if="authenticated" @click="activateThisTab('activities')"
      :class="[(active === 'activities') ? 'text-indigo-600 font-semibold border-indigo-500 border-b-2 pb-2 -mb-2' : 'cursor-pointer', 'text-center mr-8 flex justify-center items-center']">
      <font-awesome-icon :icon="faBolt" class="sm:hidden md:inline mr-2"></font-awesome-icon>
      <span class="hidden sm:block font-regular">{{ 'Activities' | localize }}</span>
    </div>
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
      this.updateUrl({"tool": tab})
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
