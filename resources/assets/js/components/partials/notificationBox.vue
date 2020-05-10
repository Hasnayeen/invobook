<template>
<div v-if="currentComponent === 'notification-box'">
  <div class="fixed top-0 z-40 inset-x-0 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-16 md:mt-24 px-4">
    <div class="bg-gray-100 rounded shadow-lg">
      <div class="p-4 flex justify-between items-center">
        <div></div>
        <div class="text-lg">
          Notifications
        </div>
        <div @click="hideNotificationBox()" class="cursor-pointer">
          <font-awesome-icon :icon="faTimes" class="items-center text-gray-600 mr-1"></font-awesome-icon>
        </div>
      </div>
      <div v-if="notifications.length > 0" class="h-80-vh overflow-y-auto bg-white">
        <div v-for="notification in notifications" class="flex flex-row items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer border-t" href="#">
          <div class="w-16 self-start my-2">
            <img class="w-10 h-10 rounded-full mr-2" :src="generateUrl(notification.data.subject.avatar)">
          </div>
          <div class="">
            <div class="py-1 text-sm">
              <a :href="'/users/' + notification.data.subject.username" class="no-underline hover:underline text-blue-400">{{ notification.data.subject.name }}</a>
              {{ notification.data.action }}
              <a v-if="notification.data.url" :href="notification.data.url" class="no-underline hover:underline text-blue-400">{{ notification.data.object_name }}</a>
              <a v-else class="no-underline text-blue-400">{{ notification.data.object_name }}</a>
              {{ notification.data.task_status }}
            </div>
            <div class="py-1 text-xs">
              {{ notification.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-b bg-white h-1"></div>
    </div>
  </div>

  <div @click="hideNotificationBox()" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-30"></div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    notifications: [],
    faTimes
  }),

  created () {
    axios.get('/notifications')
      .then((response) => {
        this.notifications = response.data.notifications
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  },

  computed: {
    ...mapState({
      currentComponent: state => state.dropdown.currentComponent,
    }),
  },

  methods: {
    ...mapActions([
      'closeComponent'
    ]),
    hideNotificationBox () {
      this.closeComponent()
    },
  }
}
</script>
