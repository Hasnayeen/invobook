<template>
<div class="">
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Title <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <input ref="focusInput" v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" type="text" placeholder="New Task" required>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Notes
        </label>
        <input v-model="notes" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" type="text" placeholder="Description">
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Assigned To <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <div class="flex flex-row items-center">
          <select v-model="assigned_to" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
            <option selected disabled hidden>Select User to Add</option>
            <template v-for="member in resource.members">
              <option :value="member.id" class="my-2 text-lg">{{ member.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
          </font-awesome-icon>
        </div>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Due On <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <datepicker v-model="dueOnDate" ref="dueOnDate" :disabled-dates="disabledDates" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-gray-200 text-gray-800" wrapper-class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4"></datepicker>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
          Related To
        </label>
        <div class="flex flex-row items-center">
          <select v-model="related_to" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
            <option selected value=""></option>
            <template v-for="task in tasks">
              <option :value="task.id" class="my-2 text-lg">{{ task.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
          </font-awesome-icon>
        </div>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="tags">Tags</label>
        <div class="p-2 border rounded bg-gray-100">
          <div class="flex flex-row flex-wrap">
            <div v-for="tag in tags" class="flex items-center mx-1 my-1 py-1 px-3 bg-indigo-200 font-semibold text-indigo-700 rounded-full">
              <span class="text-sm">
                {{ tag }}
              </span>
              <font-awesome-icon @click="deleteTag(tag)" :icon="faTimesCircle" class="text-sm text-indigo-700 ml-1 cursor-pointer"></font-awesome-icon>
            </div>
            <input v-model="tag" @keydown.enter="addTag" type="text" name="tags" class="text-gray-700 bg-gray-100 w-24 p-1 my-1 flex-grow">
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
      <button @click="closeCreateTaskForm" class="text-red-300 hover:font-bold hover:text-red-400">Cancel</button>
      <button @click="createTask" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Create</button>
    </div>
  </div>

  <div @click="closeCreateTaskForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'

export default {
  components: {Datepicker},
  props: ['resource', 'resourceType', 'formShown', 'tasks'],
  data: () => ({
    name: '',
    notes: '',
    assigned_to: null,
    related_to: '',
    dueOnDate: null,
    disabledDates: {
      to: new Date()
    },
    tag: '',
    tags: [],
    faChevronDown,
    faTimesCircle,
  }),
  methods: {
    createTask () {
      axios.post('/tasks', {
        name: this.name,
        notes: this.notes,
        assigned_to: this.assigned_to,
        related_to: this.related_to,
        due_on: window.luxon.DateTime.fromMillis(this.$refs.dueOnDate._data.pageTimestamp).toISODate(),
        group_id: this.resource.id,
        group_type: this.resourceType
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.name = ''
            this.notes = ''
            this.assigned_to = null
            this.dueOnDate = null
            this.related_to = ''
            EventBus.$emit('notification', response.data.message, response.data.status)
            this.$emit('close', response.data.task)
          }
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          this.$emit('close')
        })
    },
    closeCreateTaskForm () {
      this.$emit('close')
    },
    closeNotification () {
      this.showNotification = false
    },
    suggestMember (e) {

    },
    addTag () {
      this.tags.push(this.tag)
      this.tag = ''
    },
    deleteTag (tag) {
      let index = this.tags.indexOf(tag);
      if (index !== -1) this.tags.splice(index, 1)
    }
  },
  computed: {
    taskCompleted () {
      return this.tasks.filter(task => task.completed).length
    }
  }
}
</script>
