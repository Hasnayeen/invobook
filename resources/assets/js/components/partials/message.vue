<template>
<div class="flex flex-col p-4">
  <div v-if="displayDate" class="w-full flex flex-row py-4">
    <div class="border-b w-1/5 flex-grow mb-2"></div>
    <div class="text-grey-dark text-sm text-center px-4">
      {{ getDate(message.created_at) }}
    </div>
    <div class="border-b w-1/5 flex-grow mb-2"></div>
  </div>
  <div v-if="message.system" class="w-full flex flex-row">
    <div class="w-1/5 flex-grow mb-2"></div>
    <div class="text-grey-dark text-xs text-center px-4">
      {{ message.body }}
    </div>
    <div class="w-1/5 flex-grow mb-2"></div>
  </div>
  <div v-else class="flex flex-row text-grey-darker py-3"
    :class="[(message.user_id === user.id) ? 'self-end flex-row-reverse' : '']">
    <div class="flex flex-col items-center relative"
      :class="[(message.user_id === user.id) ? 'flex-col-reverse justify-end' : '']">
      <img :src="generateUrl(message.user.avatar)" :alt="message.user.name" class="w-10 h-10 rounded-full"
        :class="[(message.user_id === user.id) ? 'order-1' : '']">
      <div v-if="(message.user_id === user.id)" @click="toggleMessageMenu" class="cursor-pointer">
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div v-if="(message.user_id === user.id) && dropdownMenuShown" class="absolute rounded shadow-lg pin-t mt-16 mr-2 p-3 text-grey-darker hover:bg-grey-light"
        :class="[(message.user_id === user.id) ? 'pin-r' : 'pin-l']">
        <div @click="deleteMessage()" class="cursor-pointer">
          Delete
        </div>
      </div>
    </div>
    <div class="mx-2">
      <div  class="rounded-lg p-3 w-64 leading-normal text-grey-darkest"
        :class="[(message.user_id === user.id) ? 'bg-teal-lightest rounded-tr-none' : 'bg-pink-lightest rounded-tl-none']">
        {{ message.body }}
      </div>
      <div class="text-grey-darkest text-xs pt-2 flex flex-row"
        :class="[(message.user_id === user.id) ? 'justify-end' : '']">
        <div class="pr-1">
          {{ message.user.name }}
        </div>
        <div>•</div>
        <div class="pl-1">
          {{ getTime(message.created_at) }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
    }
  },
  data: () => ({
    dropdownMenuShown: false
  }),
  computed: {
    displayDate () {
      return ! this.message.system
        && this.showDate(this.message.created_at)
    }
  },
  methods: {
    deleteMessage () {
      axios.delete(`/messages/${this.message.id}`)
        .then((response) => {
          this.$emit('deleted', this.index)
          this.dropdownMenuShown = false
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          this.dropdownMenuShown = false
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    toggleMessageMenu() {
      this.dropdownMenuShown = ! this.dropdownMenuShown
    },
   showDate (created_at) {
      let createdDay = luxon.DateTime.fromSQL(created_at).toLocaleString(luxon.DateTime.DATE_MED)
      if (day === null || day != createdDay) {
        day = createdDay
        return true
      }
      return false
    },
    getDate (created_at) {
      return luxon.DateTime.fromSQL(created_at).toLocaleString(luxon.DateTime.DATE_MED)
    },
    getTime (created_at) {
      return luxon.DateTime.fromSQL(created_at).toLocaleString(luxon.DateTime.TIME_SIMPLE)
    }
  }
}
</script>
