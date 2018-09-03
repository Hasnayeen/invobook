<template>
  <nav class="bg-white flex flex-row justify-between h-12 pl-4 md:px-4 shadow">
    <a class="text-teal text-2xl no-underline self-center" :href="url.site">
        GOODWORK
    </a>

    <div class="md:flex">
      <div class="flex flex-row border-l h-full">
        <notification-dropdown></notification-dropdown>
        <profile-dropdown></profile-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import notificationDropdown from "./notificationDropdown";
import profileDropdown from "./profileDropdown";
export default {
  components: {notificationDropdown, profileDropdown},
  data: () => ({
    user: navbar.user,
    token: Laravel.csrfToken,
    url: navbar.navUrl,
  })
}
</script>
