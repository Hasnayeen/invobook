<template>
  <div :class="{'hidden': (activeTab != 'activity')}" class="w-full mx-2 md:mx-auto">
    <div class="text-gray-800 text-lg mb-4">{{ 'Filters' |localize }}</div>
    <div class="flex flex-row flex-wrap text-gray-900 -ml-4 mb-8">
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="activity" class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-3 px-4 pr-8">
          <option value="activity" disabled hidden>{{ 'Filter by Activity' | localize }}</option>
          <option :value="1" class="my-2 text-lg">name</option>
        </select>
        <font-awesome-icon :icon="faChevronDown"
          class="pointer-events-none items-center text-gray-600 absolute right-0 mr-3">
        </font-awesome-icon>
      </div>
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="user" class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-3 px-4 pr-8">
          <option value="user" disabled hidden>{{ 'Filter by User' | localize }}</option>
          <option :value="2" class="my-2 text-lg">name</option>
        </select>
        <font-awesome-icon :icon="faChevronDown"
          class="w-1/6 pointer-events-none items-center text-gray-600 absolute right-0 mr-3">
        </font-awesome-icon>
      </div>
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="date" class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-3 px-4 pr-8">
          <option value="date" disabled hidden>{{ 'Filter by Date' | localize }}</option>
          <option :value="3" class="my-2 text-lg">name</option>
        </select>
        <font-awesome-icon :icon="faChevronDown"
          class="w-1/6 pointer-events-none items-center text-gray-600 absolute right-0 mr-3">
        </font-awesome-icon>
      </div>
      <div class="mx-4 py-4">
      <button class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-8 rounded">
        <template v-if="loading">
          <font-awesome-icon :icon="faSpinner" spin></font-awesome-icon>
        </template>
        {{ 'Apply' | localize }}
      </button>
      </div>
    </div>

    <div class="text-gray-800">
      <template v-for="(value, key) in activities">
        <div class="bg-white border p-3 text-gray-600 inline-flex rounded">{{ key }}</div>
        <template v-for="activity in value">
          <div class="h-16 border-l ml-2 md:ml-6 -my-4"></div>
          <div class="flex flex-row items-center">
            <div class="border-l flex flex-row items-center ml-2 md:ml-6 self-stretch">
              <div class="rounded-full bg-gray-200 border border-pink-500 p-1 -ml-2 md:mr-4">
                <div class="rounded-full bg-pink-500 p-1"></div>
              </div>
            </div>
            <div class="text-sm px-4 md:mr-4">{{ activity.time }}</div>
            <div class="flex-grow bg-white border px-4 md:px-8 py-4 rounded">
              <a :href="'/users/' + activity.data.subject.username" class="text-blue-500 font-medium cursor-pointer no-underline">{{ activity.data.subject.name }}</a>
              {{ activity.data.action }} {{ activity.data.object_type }}
              <a v-if="activity.data.object_id" :href="activity.data.url" class="text-blue-500 font-medium cursor-pointer no-underline">{{ activity.data.object_name }}</a>
            </div>
          </div>
        </template>
        <div class="h-8 border-l ml-2 md:ml-6"></div>
      </template>
      <div class="h-16 border-l border-gray-200 -mt-8 ml-2 md:ml-6"></div>
    </div>

    <div class="flex flex-row justify-center mt-16 mb-8">
      <div class="p-3 bg-white rounded shadow text-teal-500 cursor-pointer">
        {{ 'Load More' | localize }}
      </div>
    </div>
  </div>
</template>

<script>
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

export default {
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    activity: 'activity',
    user: 'user',
    date: 'date',
    loading: false,
    activities: [],
    faChevronDown,
    faSpinner
  }),
  created () {
    axios.get('admin/activities')
      .then((response) => {
        this.activities = response.data.activities
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }
}
</script>
