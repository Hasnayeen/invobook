<template>
<div class="">
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Title <span class="text-grey capitalize">(required)</span>
        </label>
        <input ref="focusInput" v-model="name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="New Task" required>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Notes
        </label>
        <input v-model="notes" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Description">
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Assigned To <span class="text-grey capitalize">(required)</span>
        </label>
        <div class="flex flex-row items-center">
          <select v-model="assigned_to" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
            <option selected disabled hidden>Select User to Add</option>
            <template v-for="member in resource.members">
              <option :value="member.id" class="my-2 text-lg">{{ member.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-grey-darker -ml-8">
          </font-awesome-icon>
        </div>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Due On <span class="text-grey capitalize">(required)</span>
        </label>
        <datepicker v-model="dueOnDate" ref="dueOnDate" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-grey-lighter text-grey-darker" wrapper-class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"></datepicker>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Related To
        </label>
        <div class="flex flex-row items-center">
          <select v-model="related_to" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
            <option selected value=""></option>
            <template v-for="task in tasks">
              <option :value="task.id" class="my-2 text-lg">{{ task.name }}</option>
            </template>
          </select>
          <font-awesome-icon :icon="faChevronDown"
            class="w-1/6 pointer-events-none flex items-center text-grey-darker -ml-8">
          </font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
      <button @click="closeCreateTaskForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
      <button @click="createTask" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">Create</button>
    </div>
  </div>

  <div @click="closeCreateTaskForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {Datepicker},
  props: ['resource', 'resourceType', 'formShown', 'tasks'],
  data: () => ({
    name: '',
    notes: '',
    assigned_to: null,
    dueOnDate: null,
    related_to: '',
    faChevronDown
  }),
  methods: {
    createTask () {
      axios.post('/tasks', {
        name: this.name,
        notes: this.notes,
        assigned_to: this.assigned_to,
        related_to: this.related_to,
        due_on: this.$refs.dueOnDate.formattedValue,
        taskable_id: this.resource.id,
        taskable_type: this.resourceType
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

    }
  },
  computed: {
    taskCompleted () {
      return this.tasks.filter(task => task.completed).length
    }
  }
}
</script>
