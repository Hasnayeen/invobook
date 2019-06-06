<template>
<div :class="{'hidden': (activeTab != 'events')}"class="w-full">
  <div class="flex flex-row items-center">
    <div class="border-t flex-1"></div>
    <div class="p-4 text-gray-600">Today</div>
    <div class="border-t flex-1"></div>
  </div>

  <div class="flex flex-row flex-wrap justify-center">
    <div class="bg-white rounded shadow py-4 px-2 md:px-6 my-4 md:m-4" style="width:24rem;">
      <div class="text-3xl text-gray-800 font-semibold text-center py-2">
        Product Release
      </div>
      <div class="text-gray-800 text-center py-2 text-sm">
        <span class="font-medium text-lg text-pink">2</span> hour <span class="font-medium text-lg text-pink">40</span> min left
      </div>
      <div class="text-gray-800 p-2 flex flex-col md:flex-row justify-center items-center">
        <div class="px-3 pb-2 md:pb-0">
          <font-awesome-icon :icon="faClock" class="text-gray-600 mr-1"></font-awesome-icon>
          10:30 am
        </div>
        <div class="px-3 pt-2 md:pt-0">
          <font-awesome-icon :icon="faCalendarAlt" class="text-gray-600 mr-1"></font-awesome-icon>
          30 Dec, 2018
        </div>
      </div>
      <div class="text-gray-800 p-2 flex flex-row justify-center">
        <font-awesome-icon :icon="faMapMarker" class="text-gray-600 mr-1"></font-awesome-icon>
        Goodwork Headquarter
      </div>
      <div class="text-gray-800 text-center p-4">
        Release of first version (v1.0) of Goodwork software
      </div>
    </div>
    <div class="bg-white rounded shadow py-4 px-2 md:px-6 my-4 md:m-4" style="width:24rem;">
      <div class="text-3xl text-gray-800 font-semibold text-center py-2">
        Blog Announcement
      </div>
      <div class="text-gray-800 text-center py-2 text-sm">
        <span class="font-medium text-lg text-pink">6</span> hour <span class="font-medium text-lg text-pink">40</span> min left
      </div>
      <div class="text-gray-800 p-2 flex flex-row justify-center">
        <div class="px-3 pb-2 md:pb-0">
          <font-awesome-icon :icon="faClock" class="text-gray-600 mr-1"></font-awesome-icon>
          4:30 pm
        </div>
        <div class="px-3 pt-2 md:pt-0">
          <font-awesome-icon :icon="faCalendarAlt" class="text-gray-600 mr-1"></font-awesome-icon>
          30 Dec, 2018
        </div>
      </div>
      <div class="text-gray-800 p-2 flex flex-row justify-center">
        <font-awesome-icon :icon="faMapMarker" class="text-gray-600 mr-1"></font-awesome-icon>
        Goodwork Headquarter
      </div>
      <div class="text-gray-800 text-center p-4">
         No description available
      </div>
    </div>
  </div>

  <div class="flex flex-row items-center">
    <div class="border-t flex-1"></div>
    <div class="p-4 text-gray-600">This week</div>
    <div class="border-t flex-1"></div>
  </div>

  <div class="flex flex-row flex-wrap justify-center">
    <div class="bg-white rounded shadow w-80">
      <div class="text-xl text-gray-800 font-semibold text-center pt-4">
        Product Release
      </div>
      <div class="text-gray-800 text-center py-2 text-xs">
        <span class="font-medium text-pink">2</span> hour
        <span class="font-medium text-pink">40</span> min left
      </div>
      <div class="text-sm text-gray-800 p-1 flex flex-row justify-center">
        <div class="px-3">
          <font-awesome-icon :icon="faClock" class="text-gray-600 mr-1"></font-awesome-icon>
          8:30 pm
        </div>
        <div class="px-3">
          <font-awesome-icon :icon="faCalendarAlt" class="text-gray-600 mr-1"></font-awesome-icon>
          30 Dec, 2018
        </div>
      </div>
      <div class="text-sm text-gray-800 p-1 flex flex-row justify-center">
        <font-awesome-icon :icon="faMapMarker" class="text-gray-600 mr-1"></font-awesome-icon>
        Goodwork Headquarter
      </div>
      <div class="text-gray-800 text-center p-4">
        Release of first version (v1.0) of Goodwork software
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { faClock, faCalendarAlt, faMapMarker } from '@fortawesome/free-solid-svg-icons'
export default {
  props: {
    resourceType: {
      required: true,
      type: String
    },
    resource: {
      required: true,
      type: Object
    },
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    events: [],
    faClock,
    faCalendarAlt,
    faMapMarker
  })
}
</script>
