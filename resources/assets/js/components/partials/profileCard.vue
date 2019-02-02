<template>
<div class="relative">
  <div>
    <img @mouseover="showProfileCard()" @mouseleave="hideProfileCard()" :src="generateUrl(user.avatar)" class="rounded-full w-8 h-8 mr-1">
  </div>
  <div @mouseover="showProfileCard()" @mouseleave="hideProfileCard()" v-if="profileCardShown" class="absolute w-48 -ml-20 pt-4 -mt-2 z-10">
    <div class="flex flex-col items-center justify-center bg-blue-darkest text-white rounded-lg shadow py-6 px-4">
      <img :src="generateUrl(user.avatar)" class="rounded-full w-24 h-24">
      <div class="pb-2 pt-4 text-2xl font-semibold text-center">
        {{ user.name }}
      </div>
      <div class="py-1">
        <span class="text-blue-light">@</span>{{ user.username }}
      </div>
      <div class="py-1">
        {{ user.designation }}
      </div>
      <div class="text-sm py-1">
        {{ time }}
      </div>
    </div>
  </div>  
</div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    profileCardShown: false
  }),
  computed: {
    time: function () {
      return window.luxon.DateTime.local().setZone(this.user.timezone).toLocaleString(window.luxon.DateTime.TIME_SIMPLE)
    }
  },
  methods: {
    showProfileCard () {
      this.profileCardShown = true
    },
    hideProfileCard () {
      this.profileCardShown = false
    }
  }
}
</script>
