<template>
  <div :class="{'hidden': (activeTab != 'activity')}" class="w-full mx-2 md:mx-auto">
    <div class="text-grey-darker text-lg mb-4">Filters</div>
    <div class="flex flex-row flex-wrap text-grey-darkest -ml-4 mb-8">
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="activity" class="w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8">
          <option value="activity" disabled hidden>Filter by Activity</option>
          <option :value="1" class="my-2 text-lg">name</option>
        </select>
        <i class="fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"></i>
      </div>
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="user" class="w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8">
          <option value="user" disabled hidden>Filter by User</option>
          <option :value="2" class="my-2 text-lg">name</option>
        </select>
        <i class="w-1/6 fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"></i>
      </div>
      <div class="mx-4 py-4 flex flex-row items-center relative">
        <select v-model="date" class="w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8">
          <option value="date" disabled hidden>Filter by Date</option>
          <option :value="3" class="my-2 text-lg">name</option>
        </select>
        <i class="w-1/6 fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"></i>
      </div>
      <div class="mx-4 py-4">
      <button class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-8 rounded">
        <template v-if="loading">
          <i class="fas fa-spinner fa-spin"></i>
        </template>
        Apply
      </button>
      </div>
    </div>

    <div class="text-grey-darker">
      <template v-for="(value, key) in activities">
        <div class="bg-white border p-3 text-grey-dark inline-flex rounded">{{ key }}</div>
        <template v-for="activity in value">
          <div class="h-16 border-l ml-2 md:ml-6 -my-4"></div>
          <div class="flex flex-row items-center">
            <div class="border-l flex flex-row items-center ml-2 md:ml-6 self-stretch">
              <div class="rounded-full bg-grey-lighter border border-pink p-1 -ml-2 md:mr-4">
                <div class="rounded-full bg-pink p-1"></div>
              </div>
            </div>
            <div class="text-sm px-4 md:mr-4">{{ activity.time }}</div>
            <div class="flex-grow bg-white border px-4 md:px-8 py-4 rounded">
              <a :href="'/users/' + activity.causer.username" class="text-blue font-medium cursor-pointer no-underline">{{ activity.causer.name }}</a>
              {{ activity.description }} {{ activity.subject_type }}
              <a :href="activity.subject_type + 's/' + activity.subject.id" class="text-blue font-medium cursor-pointer no-underline">{{ activity.subject.name }}</a>
            </div>
          </div>
        </template>
        <div class="h-8 border-l ml-2 md:ml-6"></div>
      </template>
      <div class="h-16 border-l border-grey-lighter -mt-8 ml-2 md:ml-6"></div>
    </div>

    <div class="flex flex-row justify-center mt-16 mb-8">
      <div class="p-3 bg-white rounded shadow text-teal cursor-pointer">
        Load More
      </div>
    </div>
  </div>
</template>

<script>
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
    activities: []
  }),
  created () {
    axios.get('admin/activities')
      .then((response) => {
        this.activities = response.data.activities
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
}
</script>
