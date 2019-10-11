<template>
  <div class="container mx-auto mt-8 px-4 md:px-0 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-gray-800">
    <div class="bg-white rounded shadow-md">
      <div class="text-center text-xl px-8 py-4">
        {{ 'Notification Settings' | localize }}
      </div>
      <div class="bg-indigo-100 p-8 rounded-b">
        <div class="font-medium text-gray-700 pb-4">
          {{ 'Email Notifications' | localize }}
        </div>
        <div class="flex items-center py-1">
          <div @click="" :class="[true ? 'bg-indigo-400 justify-end' : 'bg-gray-500 justify-start']" class="w-12 h-4 rounded-full flex flex-row items-center cursor-pointer mr-4" :title="[true ? 'Disable' : 'Enable']">
            <div class="rounded-full shadow-lg w-6 h-6 bg-white"></div>
          </div>
          <div>
            {{ 'Send email on direct messages' | localize }}
          </div>
        </div>
        <div class="flex items-center py-1">
          <div @click="" :class="[false ? 'bg-indigo-400 justify-end' : 'bg-gray-500 justify-start']" class="w-12 h-4 rounded-full flex flex-row items-center cursor-pointer mr-4" :title="[false ? 'Disable' : 'Enable']">
            <div class="rounded-full shadow-lg w-6 h-6 bg-white"></div>
          </div>
          <div>
            {{ 'Send email on mention in tasks, discussions and comments' | localize }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
