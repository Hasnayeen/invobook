<template>
  <nav class="bg-white h-12 border-b sticky top-0 z-40">
    <div class="sm:container sm:mx-auto px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex flex-row justify-between h-full">
      <a class="flex items-center text-indigo-500 text-2xl font-bold md:font-normal no-underline h-12" :href="url.site">
        <img :src="generateUrl('logos/logo.svg')" alt="" class="h-full py-1 block">
      </a>

      <div class="md:flex">
        <div class="flex flex-row h-full">
          <notification-dropdown></notification-dropdown>
          <message-dropdown></message-dropdown>
          <profile-dropdown></profile-dropdown>
        </div>
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
