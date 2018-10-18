<template>
<div class="px-4 self-center">
    <div id="notification" class="text-teal-light text-base no-underline cursor-pointer" @click="toggleNotification" v-click-outside="hideNotification">
        <font-awesome-icon :icon="faBell" class="font-bold text-xl"></font-awesome-icon>
        <i v-if="unreadNotification" class="fa fa-circle text-red-light text-sm absolute pin-t mt-3 ml-3" aria-hidden="true"></i>
    </div>
    <div v-if="notificationShown" class="absolute bg-white w-64 mt-5 mr-8 py-4 shadow-lg rounded z-50" style="right: 5%;">
        <a class="flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block" href="#">
            <img class="w-10 h-10 rounded-full mr-2" :src="generateUrl(user.avatar)">
            <div>
                <div class="py-1 text-sm">
                    commented on your post
                </div>
                <div class="py-1 text-xs">
                    2 min ago
                </div>
            </div>
        </a>
        <a class="flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block" href="#">
            <img class="w-10 h-10 rounded-full mr-2" :src="generateUrl(user.avatar)">
            <div>
                <div class="py-1 text-sm">
                    commented on your post
                </div>
                <div class="py-1 text-xs">
                    2 min ago
                </div>
            </div>
        </a>
        <span class="block border-t"></span>
        <a class="list-reset px-4 pt-2 text-blue-light text-center no-underline block" href="/notifications">
            View All
        </a>
    </div>
</div>
</template>

<script>
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    user: navbar.user,
    token: Laravel.csrfToken,
    url: navbar.navUrl,
    notificationShown: false,
    unreadNotification: false,
    faBell,
  }),
  methods: {
    toggleNotification(event) {
      if (this.notificationShown) {
        document.body.removeEventListener("keyup", this.hideNotification)
        this.hideNotification(event)
      } else {
        document.body.addEventListener("keyup", this.hideNotification)
        this.showNotification()
      }
    },
    showNotification(event) {
      if (this.profileDropdownShown) {
        this.profileDropdownShown = false
      }
      this.notificationShown = true
    },
    hideNotification(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false
      }
      this.notificationShown = false
    }
  }
}
</script>
