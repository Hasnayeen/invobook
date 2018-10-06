<template>
<div class="px-4 border-l flex items-center cursor-pointer p-4">
  <div id="profile-dropdown" class="flex flex-row items-center" @click="toggleProfileDropdown">
    <img class="w-10 h-10 rounded-full md:mr-2" :src="generateUrl(user.avatar)">
    <span class="text-grey-darker text-base no-underline hidden md:block">
      {{ user.name }}
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </span>
  </div>
  <div v-if="profileDropdownShown" id="profile-menu" class="absolute bg-white w-48 pin-r mr-2 py-1 shadow-lg rounded z-50" style="top:3.5rem;">
    <a class="px-4 py-2 hover:bg-teal hover:text-white no-underline text-grey-dark block font-medium" :href="profileUrl">
      <span class="w-6 inline-block"><i class="pr-1 fa fa-user"></i></span>
          Your profile
    </a>
    <a class="px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block" href="/admin">
      <span class="w-6 inline-block"><i class="pr-1 fas fa-shield-alt font-regular"></i></span>
      Admin
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
</template>

<script>
export default {
  data: () => ({
    user: navbar.user,
    token: Laravel.csrfToken,
    url: navbar.navUrl,
    avatar: "",
    profileUrl: navbar.navUrl.site + "/users/" + navbar.user.username,
    profileDropdownShown: false
  }),
  methods: {
    logoutUser(event) {
      event.preventDefault()
      document.getElementById("logout-form").submit()
    },
    toggleProfileDropdown(event) {
      if (this.profileDropdownShown) {
        this.hideProfileDropdown(event)
        document.body.removeEventListener("keyup", this.hideProfileDropdown)
      } else {
        this.showProfileDropdown()
        document.body.addEventListener("keyup", this.hideProfileDropdown)
      }
    },
    showProfileDropdown(event) {
      if (this.notificationShown) {
        this.notificationShown = false
      }
      this.profileDropdownShown = true
    },
    hideProfileDropdown(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false
      }
      this.profileDropdownShown = false
    }
  },
}
</script>
