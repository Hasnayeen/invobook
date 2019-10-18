<template>
<div v-if="activeTab === 'events'"class="w-full">
  <div v-if="events.length === 0" class="flex flex-col items-center pt-8">
    <div class="pb-4">Is something important coming up? Create a Event</div>
    <img src="/image/events.svg" alt="event calender" class="w-96">
  </div>
</div>
</template>

<script>
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
  })
}
</script>
