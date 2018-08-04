<template>
    <nav class="bg-white flex flex-row justify-between h-12 px-4 shadow">
        <a class="text-teal text-2xl no-underline self-center" :href="url.site">
            GOODWORK
        </a>

        <div class="hidden md:flex">
            <div class="flex flex-row border-l">
                <div class="px-4 self-center">
                    <div id="notification" class="text-teal-light text-base no-underline cursor-pointer" @click="toggleNotification">
                        <i class="far fa-bell font-bold text-xl" aria-hidden="true"></i>
                        <i v-if="unreadNotification" class="fa fa-circle text-red-light text-sm absolute pin-t mt-3 ml-3" aria-hidden="true"></i>
                    </div>
                    <div v-if="notificationShown" class="absolute bg-white w-64 mt-6 mr-8 py-4 shadow-lg rounded" style="right: 5%;">
                        <a class="flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block" href="#">
                            <img class="w-10 h-10 rounded-full mr-2" :src="avatar">
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
                            <img class="w-10 h-10 rounded-full mr-2" :src="avatar">
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

                <div class="px-4 border-l flex items-center cursor-pointer">
                    <div id="profile-dropdown" class="flex flex-row items-center" @click="toggleProfileDropdown">
                        <img class="w-10 h-10 rounded-full mr-2" :src="avatar">
                        <span class="text-grey-darker text-base no-underline">
                            {{ user.name }}
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div v-if="profileDropdownShown" id="profile-menu" class="absolute bg-white w-48 pin-r mr-2 py-1 shadow-lg rounded" style="top:3.5rem;">
                        <a class="px-4 py-2 hover:bg-teal hover:text-white no-underline text-grey-dark block font-medium" :href="profileUrl">
                            <span class="w-6 inline-block"><i class="pr-1 fa fa-user"></i></span>
                                Your profile
                        </a>
                        <a class="px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block" href="#">
                            <span class="w-6 inline-block"><i class="pr-1 fa fa-question font-regular"></i></span>
                            Help
                        </a>
                        <a class="px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block" href="#">
                            <span class="w-6 inline-block"><i class="pr-1 fa fa-cog font-regular"></i></span>
                            Settings
                        </a>
                        <span class="block border-t"></span>
                        <a class="px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block" :href="url.logout" @click="logoutUser">
                            <span class="w-6 inline-block"><i class="pr-1 fas fa-sign-out-alt font-regular"></i></span>
                            Logout
                        </a>
                    </div>            
                    <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
                        <input type="hidden" name="_token" :value="token">
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
      data: () => ({
        user: navbar.user,
        token: Laravel.csrfToken,
        url: navbar.navUrl,
        avatar: '',
        profileUrl: navbar.navUrl.site + '/users/' + navbar.user.username,
        notificationShown: false,
        unreadNotification: false,
        profileDropdownShown: false
      }),
      methods: {
        logoutUser (event) {
          event.preventDefault()
          document.getElementById('logout-form').submit()
        },
        toggleProfileDropdown (event) {
          if (this.profileDropdownShown) {
            this.hideProfileDropdown(event)
            document.body.removeEventListener('keyup', this.hideProfileDropdown)
          } else {
            this.showProfileDropdown()
            document.body.addEventListener('keyup', this.hideProfileDropdown)
          }
        },
        showProfileDropdown (event) {
          if (this.notificationShown) {
            this.notificationShown = false
          }
          this.profileDropdownShown = true
        },
        hideProfileDropdown (event) {
          if (event.type === 'keyup' && event.key !== 'Escape') {
            return false
          }
          this.profileDropdownShown = false
        },
        toggleNotification (event) {
          if (this.notificationShown) {
            document.body.removeEventListener('keyup', this.hideNotification)
            this.hideNotification(event)
          } else {
            document.body.addEventListener('keyup', this.hideNotification)
            this.showNotification()
          }
        },
        showNotification (event) {
          if (this.profileDropdownShown) {
            this.profileDropdownShown = false
          }
          this.notificationShown = true
        },
        hideNotification (event) {
          if (event.type === 'keyup' && event.key !== 'Escape') {
            return false
          }
          this.notificationShown = false
        }
      },
      created () {
        if (this.user.avatar == null || this.user.avatar == '') {
          this.avatar = '/image/avatar.jpg' // default avatar
        } else {
          this.avatar = this.user.avatar
        }
      },
      mounted () {
        var thisNav = this
        document.addEventListener('click', function () { // Hide sub menus on body click
          thisNav.hideSubMenu = true
          thisNav.hideNotificationList = true
        })
  }
    }
</script>
