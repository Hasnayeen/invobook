<template>
<div class="self-center relative" v-click-outside="hideNotification">
  <div id="notification" class="text-indigo-500  text-base no-underline cursor-pointer" @click="toggleNotification">
    <font-awesome-icon :icon="faBell" class="font-bold text-xl"></font-awesome-icon>
    <font-awesome-icon v-if="unreadNotification" :icon="faCircle" class="text-red-500 text-xs absolute -mt-1 -ml-1" aria-hidden="true"></font-awesome-icon>
  </div>
  <div v-if="currentComponent === 'notification-dropdown'" class="absolute bg-white w-72 flex flex-col mt-5 -mr-16 right-0 shadow-lg rounded z-50">
    <div v-if="notifications.length > 0" class="h-128 overflow-y-auto">
      <div v-for="notification in notifications" class="flex flex-row items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer border-b" href="#">
        <div class="w-16 self-start my-2">
          <img class="w-10 h-10 rounded-full mr-2" :src="generateUrl(notification.data.subject.avatar)">
        </div>
        <div class="w-56">
          <div class="py-1 text-sm">
            <a :href="'/users/' + notification.data.subject.username" class="no-underline hover:underline text-blue-400">{{ notification.data.subject.name }}</a>
            {{ notification.data.action }}
            <a v-if="notification.data.url" :href="notification.data.url" class="no-underline hover:underline text-blue-400">{{ notification.data.object_name }}</a>
            <a v-else class="no-underline text-blue-400">{{ notification.data.object_name }}</a>
          </div>
          <div class="py-1 text-xs">
            {{ notification.date }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="notifications.length === 0" class="px-4 py-2 text-sm text-gray-600 block">No unread notifications. You're all caught up</div>
    <span class="block border-t"></span>
    <a class="list-reset w-full px-4 py-2 text-blue-400 text-sm text-center no-underline block" href="/notifications">
      View All
    </a>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

export default {
  data: () => ({
    token: Laravel.csrfToken,
    url: navUrl,
    notifications: [],
    unreadNotification: false,
    user: user,
    faBell,
    faCircle
  }),

  created () {
    axios.get('/notifications')
      .then((response) => {
        this.notifications = response.data.notifications
        let hasUnread = this.notifications.findIndex(notification => notification.read_at === null)
        if (hasUnread !== -1) {
          this.showIndicator()
        }
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  },

  mounted () {
    this.listen()
  },

  computed: {
    ...mapState({
      currentComponent: state => state.dropdown.currentComponent,
    }),
  },

  methods: {
    ...mapActions([
      'setCurrentComponent',
      'closeComponent'
    ]),
    toggleNotification (event) {
      if (this.currentComponent === 'notification-dropdown') {
        document.body.removeEventListener('keyup', this.hideNotification)
        this.hideNotification(event)
      } else {
        document.body.addEventListener('keyup', this.hideNotification)
        this.showNotification()
      }
    },
    showNotification (event) {
      this.setCurrentComponent('notification-dropdown')
      if (this.unreadNotification) {
        this.notificationRead()
        this.unreadNotification = false
      }
    },
    hideNotification (event) {
      if (event.type === 'keyup' && event.key !== 'Escape') {
        return false
      }
      if (this.currentComponent === 'notification-dropdown') {
        this.closeComponent('')
      }
    },
    listen () {
      Echo.private('App.User.' + this.user.id)
        .notification((notification) => {
          this.unreadNotification = true
          this.notifications.push(notification)
          this.showIndicator()
        })
    },
    showIndicator () {
      this.unreadNotification = true
    },
    notificationRead () {
      axios.put('/notifications')
        .catch((error) => {
          console.error(error.response.data.message)
        })
    }
  }
}
</script>
