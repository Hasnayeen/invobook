<template>
<div class="flex flex-col">
  <div v-if="displayDate" class="w-full flex flex-row justify-center py-2 bg-blue-100">
    <div class="text-gray-600 text-sm font-semibold text-center px-4">
      {{ getDate(message.created_at) }}
    </div>
  </div>
  <div v-if="message.system" class="flex flex-row justify-center">
    <div class="bg-blue-lighter text-gray-800 text-xs text-center px-4 rounded p-2">
      {{ message.body }}
    </div>
  </div>
  <div v-else class="flex flex-row text-gray-800 p-4 border-t"
    :class="{'pb-12': last, '': (message.user.id === user.id)}">
    <div class="flex flex-col items-center relative"
      :class="[(message.user.id === user.id) ? 'flex-col-reverse justify-end' : '']">
      <img :src="generateUrl(message.user.avatar)" :alt="message.user.name" class="w-10 h-10 rounded-full"
        :class="[(message.user.id === user.id) ? 'order-1' : '']">
      <div v-if="(message.user.id === user.id)" tabindex="0" @keypress.enter="toggleMessageMenu" @click="toggleMessageMenu" v-click-outside="hideMessageMenu" class="cursor-pointer">
        <font-awesome-icon :icon="faEllipsisH" class="text-gray-500"></font-awesome-icon>
      </div>
      <div v-if="(message.user.id === user.id) && dropdownMenuShown" class="absolute rounded shadow-xl top-0 mt-16 mr-2 py-2 text-gray-800 bg-indigo-200 left-0 z-10">
        <div tabindex="0" @click="editMessage()" @keydown.enter="editMessage()" class="cursor-pointer hover:bg-white px-4 py-2">
          Edit
        </div>
        <div tabindex="0" @click="deleteMessage()" @keydown.enter="deleteMessage()" class="cursor-pointer hover:bg-white px-4 py-2">
          Delete
        </div>
      </div>
    </div>
    <div class="mx-4 w-3/5 md:w-5/6">
      <div class="text-xs flex flex-row px-3">
        <div class="pr-1 font-medium" :class="[(message.user.id === user.id) ? 'text-pink-500' : 'text-blue-500']">
          {{ message.user.name }}
        </div>
        <div>•</div>
        <div class="pl-1">
          {{ getTime(message.created_at) }}
        </div>
      </div>
      <div  class="rounded-lg p-3 pt-0 -mt-2 leading-none text-gray-800 break-words whitespace-pre-line"
        :class="[(message.user_id === user.id) ? 'rounded-tr-none' : 'rounded-tl-none']" v-linkify >
        {{ message.body }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

let day = null
export default {
  props: {
    message: {
      required: true,
      type: Object
    },
    user: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    },
    last: {
      required: true,
      type: Boolean
    },
    direct: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dropdownMenuShown: false,
    faEllipsisH
  }),

  computed: {
    displayDate () {
      return !this.message.system &&
        this.showDate(this.message.created_at)
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    editMessage() {
        this.$emit('edit', this.index)
    },
    updateMessage() {
      let api = this.direct ? 'direct-messages' : 'messages'
      axios.put(`/${api}/${this.message.id}`)
        .then((response) => {
          this.$emit('edited', this.index)
          this.dropdownMenuShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.dropdownMenuShown = false
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    deleteMessage () {
      let api = this.direct ? 'direct-messages' : 'messages'
      axios.delete(`/${api}/${this.message.id}`)
        .then((response) => {
          this.$emit('deleted', this.index)
          this.dropdownMenuShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.dropdownMenuShown = false
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    toggleMessageMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMessageMenu () {
      this.dropdownMenuShown = false
    },
    showDate (createdAt) {
      let createdDay = luxon.DateTime.fromSQL(createdAt).toLocaleString(luxon.DateTime.DATE_MED)
      if (day === null || day !== createdDay) {
        day = createdDay
        return true
      }
      return false
    },
    getDate (createdAt) {
      return luxon.DateTime.fromSQL(createdAt).toLocaleString(luxon.DateTime.DATE_MED)
    },
    getTime (createdAt) {
      if (this.user.timezone) {
        return luxon.DateTime.fromSQL(createdAt, {zone: 'UTC'}).setZone(this.user.timezone).toLocaleString(luxon.DateTime.TIME_SIMPLE)
      }
      return luxon.DateTime.fromSQL(createdAt, {zone: 'UTC'}).setZone('local').toLocaleString(luxon.DateTime.TIME_SIMPLE)
    }
  }
}
</script>
