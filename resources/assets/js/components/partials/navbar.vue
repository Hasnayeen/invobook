<template>
<div class="sticky top-0 z-40">
  <div class="h-1" style="background: linear-gradient(to right, #8497EC, #3958E3);"></div>
  <nav class="bg-white h-12 border-b">
    <div class="sm:container sm:mx-auto px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex flex-row justify-between h-full">
      <a class="flex items-center text-indigo-500 text-2xl font-bold md:font-normal no-underline h-12" :href="url.site">
        <svg class="w-8 h-8" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="200" y="115" width="200" height="16" rx="8" fill="#667EEA"/>
          <rect x="240" y="144" width="160" height="16" rx="8" fill="#667EEA"/>
          <rect x="280" y="173" width="120" height="16" rx="8" fill="#667EEA"/>
          <path d="M200.563 21.4381C200.563 8.9767 190.42 -1.25846 178.036 0.125732C77.8722 11.321 0 96.2852 0 199.437C0 310.205 89.7949 400 200.563 400C303.715 400 388.679 322.128 399.874 221.964C401.258 209.58 391.023 199.437 378.562 199.437H348.478C336.016 199.437 326.127 209.627 323.909 221.89C313.327 280.406 262.128 324.789 200.563 324.789C131.333 324.789 75.211 268.667 75.211 199.437C75.211 137.872 119.594 86.6726 178.11 76.0909C190.373 73.8734 200.563 63.9838 200.563 51.5224V21.4381Z" fill="#667EEA"/>
        </svg>
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
</div>
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
