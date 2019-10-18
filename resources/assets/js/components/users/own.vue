<template>
<div class="bg-white rounded shadow py-8 mt-8">
  <div class="flex flex-col items-center">
    <img :src="avatar" :alt="'Default avatar of ' + user.name" class="w-32 h-32 rounded-full">
    <div class="text-gray-800 text-2xl font-semibold py-4">
      {{user.name}}
    </div>
    <div class="">
      <avatar-upload @image-loaded="updateImage"></avatar-upload>
    </div>
  </div>
  <form class="px-8 pt-6">
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="name">
        {{ 'Name' | localize }}
      </label>
      <input v-model='user.name' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Nehal Hasnayeen">
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="title">
        {{ 'Designation' | localize }}
      </label>
      <input v-model='user.designation' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="title" type="text" placeholder="Developer">
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="title">
        {{ 'Short Bio' | localize }}
      </label>
      <textarea v-model='user.bio' class="shadow appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700" id="bio" type="text" rows="3" placeholder="About Yourself"></textarea>
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="title">
        {{ 'Location' | localize }}
      </label>
      <input v-model='user.location' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="title" type="text" placeholder="Dhaka, Bangladesh">
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="timezone">
        {{ 'Time Zone' | localize }}
      </label>
      <div class="relative">
        <select v-model='user.timezone' class="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 bg-gray-200" id="grid-state">
          <template v-for="timezone in timezones">
            <option :value="timezone">{{ timezone}}</option>
          </template>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="weekstart">
        {{ 'First Day of the Week' | localize }}
      </label>
      <div class="relative">
        <select v-model='user.week_start' class="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 bg-gray-200" id="weekstart">
          <option>Saturday</option>
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <label class="block text-gray-600 text-sm font-bold mb-2" for="weekstart">
        {{ 'Preferred Language' | localize }}
      </label>
      <div class="relative">
        <select v-model='user.lang' class="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 bg-gray-200" id="weekstart">
          <template v-for="(locale, key) in locales">
            <option :value="key">{{ locale }}</option>
          </template>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <button @click="updateProfile" class="bg-teal-500 hover:bg-teal-600 text-white font-bold p-4 rounded shadow hover:shadow-lg" type="button">
        {{ 'Update' | localize }}
      </button>
      <div></div>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import avatarUpload from './../partials/avatarUpload'

export default {
  name: 'Own',
  components: {avatarUpload},
  props: ['user', 'timezones', 'locales'],

  data: () => ({
    avatar: null
  }),

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    updateImage (imageUrl) {
      this.avatar = imageUrl
    },
    updateProfile () {
      axios.put('/users/' + this.user.username + '/profile', {
        name: this.user.name,
        bio: this.user.bio,
        designation: this.user.designation,
        location: this.user.location,
        timezone: this.user.timezone,
        week_start: this.user.week_start,
        lang: this.user.lang
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.showNotification({type: response.data.status, message: response.data.message})
          }
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  },
  mounted () {
    this.avatar = this.generateUrl(this.user.avatar)
  }
}
</script>
