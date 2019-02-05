<template>
  <nav class="bg-white flex flex-row justify-between h-12 md:px-4 shadow">
    <a class="text-teal text-2xl font-bold md:font-normal no-underline h-12 w-32" :href="url.site">
      <img :src="generateUrl('logos/logo.svg')" alt="" class="w-full h-full hidden md:block">
      <img :src="generateUrl('logos/logo_square.svg')" alt="" class="w-full h-full block md:hidden pr-16">
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
      token: Laravel.csrfToken,
      url: navUrl
    })
  }
</script>
