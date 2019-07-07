<template>
  <div v-if="activeTab === 'home'" class="bg-white rounded shadow p-8">
    <div class="text-xl">
      What's on your plate today ⬇️
    </div>
    <div class="mt-4 p-4 rounded-lg border-2 border-indigo-300">
      <div class="flex items-center">
        <div class="pr-2 text-sm">Due on: </div>
        <div class="text-sm rounded-full px-3 py-1 bg-teal-200 text-teal-700 font-semibold inline">
          {{ dueOn(currentWork[0].due_on) }}
        </div>
      </div>
      <div class="text-2xl font-medium">
        {{ currentWork[0].name }}
      </div>
      <div class="text-lg">
        {{ currentWork[0].notes }}
      </div>
      <div class="py-4">
        <div class="text-lg font-medium border-b-2 pb-1">
          Progress
        </div>
        <!-- Progress list -->
        <div class="pt-2">
          No progress update yet
        </div>
      </div>
    </div>
    <div class="pt-8 flex items-center pb-4">
      <div class="text-base mr-2">
        Other tasks in progress
      </div>
      <div class="text-xs font-bold bg-teal-600 text-white flex items-center justify-center w-6 h-6 rounded-full">{{ currentWork.length - 1 }}</div>
    </div>
    <div v-if="index !== 0" v-for="(task, index) in currentWork" class="bg-gray-100 rounded shadow px-4 py-2">
      <a :href="'/' + task.taskable_type + 's/' + task.taskable_id" class="text-blue-500 text-sm cursor-pointer">
        {{ task.taskable.name }}
      </a>
      <div class="text-lg">
        {{ task.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },

  computed: {
    ...mapState({
      currentWork: state => state.home.currentWork
    })
  },

  methods: {
    dueOn: function (value) {
      return luxon.DateTime.fromSQL(value).toFormat('d LLL')
    },
  }
}
</script>

<style>

</style>
