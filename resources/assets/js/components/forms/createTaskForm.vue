<template>
<div v-if="formShown">
  <div class="absolute container mx-auto w-5/6 md:w-3/5 lg:max-w-5xl z-30" style="top: 12vh;left: 0;right: 0;">
    <div class="bg-white rounded shadow-lg">
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
          <textarea v-model="notes" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 resize-none" placeholder="Description" name="notes" rows="2"></textarea>
        </div>
        <div class="p-4">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Assigned To <span class="text-gray-500 capitalize">(required)</span>
          </label>
          <div class="flex flex-row items-center">
            <select v-model="assignedTo" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
              <option selected disabled hidden>Select User to Add</option>
              <template v-for="member in resource.members">
                <option :value="member.user_id" class="my-2 text-lg">{{ member.name }}</option>
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
          <datepicker v-model="dueOnDate" ref="dueOnDate" :disabled-dates="disabledDates" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-gray-200 text-gray-800 w-full" wrapper-class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4"></datepicker>
        </div>
        <div class="p-4">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Cycle
          </label>
          <div class="flex flex-row items-center">
            <select v-model="cycleId" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
              <option selected disabled hidden value="">Select a Cycle</option>
              <template v-for="cycle in cycles">
                <option :value="cycle.id" class="my-2 text-lg">{{ cycle.name ? cycle.name : cycle.start_date + ' - ' + cycle.end_date }}</option>
              </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
            </font-awesome-icon>
          </div>
        </div>
        <div class="p-4">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Related To
          </label>
          <div class="flex flex-row items-center">
            <select v-model="relatedTo" class="w-5/6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded" id="user">
              <option selected disabled hidden value="">Select a Task</option>
              <template v-for="otherTask in tasks">
                <option v-if="!task || (task && otherTask.id !== task.id)" :value="otherTask.id" class="my-2 text-lg">{{ otherTask.name }}</option>
              </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="w-1/6 pointer-events-none flex items-center text-gray-800 -ml-8">
            </font-awesome-icon>
          </div>
        </div>
        <div class="p-4" v-click-outside="dontShowTags">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="tags">Tags</label>
          <div class="p-2 border rounded bg-gray-100">
            <div class="flex flex-row flex-wrap">
              <div v-for="tag in tags" class="flex items-center mx-1 my-1 py-1 px-3 bg-indigo-200 font-semibold text-indigo-700 rounded-full">
                <span class="text-sm">
                  {{ tag.label }}
                </span>
                <font-awesome-icon @click="deleteTag(tag)" :icon="faTimesCircle" class="text-sm text-indigo-700 ml-1 cursor-pointer"></font-awesome-icon>
              </div>
              <input
                @focus="showTags"
                type="text"
                name="tags"
                class="text-gray-700 bg-gray-100 w-24 p-1 my-1 flex-grow">
            </div>
          </div>
          <div v-if="tagSuggestionShown && availableTags.length !== 0" class="shadow-md border py-1 rounded-b">
            <div @click="addTag(tag)" v-for="tag in availableTags" class="px-4 py-2 cursor-pointer -mt-1 hover:bg-teal-400 hover:text-white">
              {{ tag.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
        <button @click="closeCreateTaskForm" class="text-red-300 hover:font-bold hover:text-red-400">Cancel</button>
        <button v-if="task" @click="updateTask" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Save</button>
        <button v-else @click="createTask" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Create</button>
      </div>
    </div>
    <div class="h-16"></div>
  </div>

  <div @click="closeCreateTaskForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { mapState, mapActions } from 'vuex'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'

export default {
  components: {Datepicker},
  props: {
    formShown: {
      required: true,
      type: Boolean
    },
    resource: {
      required: true,
      type: Object
    },
    resourceType: {
      required: true,
      type: String
    },
    tasks: {
      required: false,
      type: Array
    },
    task: {
      required: false,
      type: Object
    }
  },

  data: () => ({
    name: '',
    notes: '',
    assignedTo: null,
    relatedTo: '',
    dueOnDate: null,
    cycleId: null,
    disabledDates: {
      to: new Date()
    },
    tags: [],
    availableTags: [],
    labels: [],
    tagSuggestionShown: false,
    faChevronDown,
    faTimesCircle,
  }),

  watch: {
    formShown: function (value, oldValue) {
      this.availableTags = this.resource.tags
      if (value) {
        this.cycleId = this.selectedCycleId
        if (this.task) {
          this.hydrateForm()
        }
      }
    }
  },

  computed: {
    taskCompleted () {
      return this.tasks.filter(task => task.completed).length
    },
    ...mapState({
      cycles: state => state.cycle.cycles,
      selectedCycleId: state => state.cycle.selectedCycleId,
    })
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    createTask () {
      axios.post('/tasks', {
        name: this.name,
        notes: this.notes,
        assigned_to: this.assignedTo,
        related_to: this.relatedTo,
        cycle_id: this.cycleId !== 0 ? this.cycleId : null,
        due_on: window.luxon.DateTime.fromISO(this.dueOnDate.toISOString()).toISODate(),
        labels: this.labels,
        group_id: this.resource.id,
        group_type: this.resourceType
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.name = ''
            this.notes = ''
            this.assignedTo = null
            this.dueOnDate = null
            this.relatedTo = ''
            this.showNotification({type: response.data.status, message: response.data.message})            
            this.$emit('close', response.data.task)
          }
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
          this.$emit('close')
        })
    },
    closeCreateTaskForm () {
      this.dehydrateForm()
      this.tagSuggestionShown = false
      this.$emit('close')
    },
    closeNotification () {
      this.showNotification = false
    },
    updateTask () {
      axios.put('/tasks/' + this.task.id, {
        name: this.name,
        notes: this.notes,
        assigned_to: this.assignedTo,
        related_to: this.relatedTo,
        cycle_id: this.cycleId !== 0 ? this.cycleId : null,
        due_on: window.luxon.DateTime.fromISO(this.dueOnDate.toISOString()).toISODate(),
        labels: this.labels,
        group_id: this.resource.id,
        group_type: this.resourceType
      })
        .then((response) => {
          this.dehydrateForm()
          this.showNotification({type: response.data.status, message: response.data.message})            
          this.$emit('close', null, response.data.task)
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
          this.$emit('close')
        })
    },
    showTags () {
      this.tagSuggestionShown = true
    },
    dontShowTags () {
      this.tagSuggestionShown = false
    },
    addTag (tag) {
      this.tags.push(tag)
      this.labels.push(tag.tag_id)
      this.availableTags = this.availableTags.filter(x => x.tag_id !== tag.tag_id)
    },
    deleteTag (tag) {
      let index = this.tags.indexOf(tag)
      if (index !== -1) { 
        this.tags.splice(index, 1)
        index = this.labels.indexOf(tag.id)
        this.labels.splice(index, 1)
        this.availableTags.push(tag)
      }
    },
    hydrateForm () {
      this.name = this.task.name
      this.notes = this.task.notes
      this.assignedTo = this.task.assigned_to
      this.relatedTo = this.task.related_to
      this.cycleId = this.selectedCycleId
      this.dueOnDate = new Date(this.task.due_on)
    },
    dehydrateForm () {
      this.name = ''
      this.notes = ''
      this.assignedTo = ''
      this.dueOnDate = null
      this.relatedTo = ''
    }
  },
}
</script>
