<template>
  <nav class="bg-white flex flex-row justify-between h-12 pl-4 md:px-4 shadow">
    <a class="text-teal text-2xl font-bold md:font-normal no-underline self-center" :href="url.site">
        G<span class="hidden md:inline">OODWORK</span>
    </a>

    <div class="md:flex">
      <div class="flex flex-row border-l h-full">
        <notification-dropdown></notification-dropdown>
        <message-dropdown></message-dropdown>
        <profile-dropdown></profile-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import notificationDropdown from './notificationDropdown'
import messageDropdown from './messageDropdown'
import profileDropdown from './profileDropdown'
export default {
  components: {notificationDropdown, messageDropdown, profileDropdown},
  data: () => ({
    user: navbar.user,
    token: Laravel.csrfToken,
    url: navbar.navUrl
  })
}
</script>
