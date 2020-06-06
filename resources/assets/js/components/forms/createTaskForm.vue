<template>
<div v-if="formShown">
  <div class="absolute top-0 left-0 right-0 mt-24 container mx-auto px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl z-30">
    <div class="bg-gray-100 rounded shadow-lg">
      <div class="text-2xl text-gray-700 text-center font-semibold px-8 py-6">
          <div class="text-sm">
            {{'Title' | localize }} <span class="text-gray-500 capitalize">({{'required' | localize }})</span>
          </div>
          <input ref="focusInput" v-model="name" class="appearance-none block w-full bg-gray-100 text-gray-800 text-center rounded py-3 px-4" type="text" :placeholder="$options.filters.localize('Title of your task')" required>
      </div>
      <div class="bg-white flex flex-row flex-wrap justify-between lg:flex-no-wrap pt-4">
        <!-- Assignee -->
        <div>
          <label class="text-sm text-gray-600 px-8" for="assignee">
            {{'Assignee' | localize }}
          </label>
          <div class="flex flex-row items-center mx-8 py-2 relative">
            <select v-model="assignedTo" class="w-40 appearance-none cursor-pointer bg-white text-gray-800 border py-3 pl-4 pr-8 rounded" name="assignee">
              <option selected="true" disabled="disabled" :value="null">{{'Add assignee' | localize }}</option>
              <template v-for="member in resource.members">
                <option :value="member.user_id" class="my-2 text-lg">{{ member.name }}</option>
              </template>
            </select>
            <font-awesome-icon :icon="faPlus"
              class="pointer-events-none flex items-center text-gray-800 absolute right-0 mr-4 pl-1 text-gray-600">
            </font-awesome-icon>
          </div>
        </div>
        <!-- Due Date -->
        <div>
          <label class="text-sm text-gray-600 px-8" name="due-date">
            {{'Due On' | localize }}
          </label>
          <div class="flex flex-row items-center mx-8 py-2 relative">
            <datepicker v-model="dueOnDate" ref="dueOnDate" :disabled-dates="disabledDates" :placeholder="$options.filters.localize('Select Date')" format="yyyy-MM-dd" input-class="appearance-none text-gray-800 w-32" wrapper-class="w-40 appearance-none text-gray-800 border py-3 px-4 rounded"></datepicker>
          </div>
        </div>
        <!-- Cycle -->
        <div>
          <label class="text-sm text-gray-600 px-8" for="cycle">
              {{'Cycle' | localize }}
          </label>
          <div class="flex flex-row items-center mx-8 py-2 relative">
            <select v-model="cycleId" class="w-40 appearance-none cursor-pointer bg-white text-gray-800 border py-3 pl-4 pr-8 rounded" name="cycle">
              <option selected disabled hidden value="">{{'Select a Cycle' | localize }}</option>
              <template v-for="cycle in cycles">
                <option :value="cycle.id" class="my-2 text-lg">{{ cycle.name ? cycle.name : cycle.start_date + ' - ' + cycle.end_date }}</option>
              </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="pointer-events-none flex items-center text-gray-800 absolute right-0 mr-4 pl-1 text-gray-600">
            </font-awesome-icon>
          </div>
        </div>
        <!-- Related To -->
        <div>
          <label class="text-sm text-gray-600 px-8" for="related-to">
            {{ 'Related To' | localize }}
          </label>
          <div class="flex flex-row items-center mx-8 py-2 relative">
            <select v-model="relatedTo" class="w-40 appearance-none cursor-pointer bg-white text-gray-800 border py-3 pl-4 pr-8 rounded" name="related-to">
              <option selected disabled hidden value="">{{'Select a Task' | localize }}</option>
              <template v-for="otherTask in tasks">
                <option v-if="!task || (task && otherTask.id !== task.id)" :value="otherTask.id" class="my-2 text-lg">{{ otherTask.name }}</option>
              </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="pointer-events-none flex items-center text-gray-800 absolute right-0 mr-4 pl-1 text-gray-600">
            </font-awesome-icon>
          </div>
        </div>
      </div>
      <div class="px-8 py-4 bg-white">
        <label class="text-sm text-gray-600" for="description">
          {{ 'Description' | localize }}
        </label>
        <div class="py-2">
          <textarea v-model="notes" class="appearance-none block w-full text-gray-800 border border-gray-200 rounded py-3 px-4 resize-none" :placeholder="$options.filters.localize('Description')" name="description" rows="2"></textarea>
        </div>
      </div>
      <div class="px-8 py-4 bg-white">
        <div class="" v-click-outside="dontShowTags">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="tags">{{ 'Tags' | localize }}</label>
          <div class="p-2 rounded">
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
                class="text-indigo-700 bg-indigo-100 rounded-full w-24 p-1 px-2 m-1 cursor-pointer"
                :value="`+ ${$options.filters.localize('Add Tag')}`"
                readonly>
            </div>
          </div>
          <div v-if="tagSuggestionShown && availableTags.length !== 0" class="shadow-md border py-1 rounded-b">
            <div @click="addTag(tag)" v-for="tag in availableTags" class="px-4 py-2 cursor-pointer -mt-1 hover:bg-indigo-400 hover:text-white">
              {{ tag.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-end py-6 px-8 bg-gray-100 rounded">
        <button @click="closeCreateTaskForm" class="border border-gray-400 bg-white text-gray-700 font-medium py-2 px-4 mr-4 rounded">{{ 'Cancel' | localize }}</button>
        <button v-if="task" @click="updateTask" class="bg-indigo-600 text-white font-medium py-2 px-4 rounded">{{ 'Save' | localize }}</button>
        <button v-else @click="createTask" class="bg-indigo-600 text-white font-medium py-2 px-4 rounded">{{ 'Create' | localize }}</button>
      </div>
    </div>
    <div class="h-16"></div>
  </div>
  <div @click="closeCreateTaskForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20">
  </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { mapState, mapActions } from 'vuex'
import { faChevronDown, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
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
    editedFirstTask: '', 
    cycleId: null,
    disabledDates: {
      to: new Date(),
      from: ''
    },
    tags: [],
    availableTags: [],
    labels: [],
    tagSuggestionShown: false,
    faChevronDown,
    faTimesCircle,
    faPlus,
    updatedDueOnDate: ''
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
    },
    cycleId: function(value, oldValue) {
      if(value){
          this.changeDueDate(value)
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
      if(this.dueOnDate !== null){
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
              this.dehydrateForm()
              this.showNotification({type: response.data.status, message: response.data.message})            
              this.$emit('close', response.data.task)
            }
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      } else {
        this.showNotification({type: 403, message: "Due On is required"})
      }
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
      this.updateDueOnDate(this.dueOnDate)
      axios.put('/tasks/' + this.task.id, {
        name: this.name,
        notes: this.notes,
        assigned_to: this.assignedTo,
        related_to: this.relatedTo,
        cycle_id: this.cycleId !== 0 ? this.cycleId : null,
        due_on: this.updatedDate,
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
      if(tag.id)  {
        this.tags.push(this.availableTags.find(x => x.tag_id === tag.id))
        this.labels.push(tag.id)
        this.availableTags = this.availableTags.filter(x => x.tag_id !== tag.id)
      } else {
        this.tags.push(tag)
        this.labels.push(tag.tag_id)
        this.availableTags = this.availableTags.filter(x => x.tag_id !== tag.tag_id)
      }
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
      this.dueOnDate = this.task.due_on
      this.editedFirstTask = true
      this.task.tags.forEach(tagData => this.addTag(tagData));
    },
    dehydrateForm () {
      this.name = ''
      this.notes = ''
      this.assignedTo = null
      this.dueOnDate = null
      this.relatedTo = ''
      this.tags = []
      this.labels = []
    },
    changeDueDate(value) {
      let cycleSelected = this.cycles.find(cycle => cycle.id === value)
      let todayDate = new Date()
      todayDate.setDate(todayDate.getDate() - 1)
      let startDate = new Date(cycleSelected.start_date)
      startDate.setDate(startDate.getDate())
      let endDate = new Date(cycleSelected.end_date)
      endDate.setDate(endDate.getDate() + 1)

      if(todayDate.getTime() < startDate.getTime()){
        this.disabledDates.to = new Date(startDate)
      }else {
        this.disabledDates.to = new Date(todayDate)
      }

      this.disabledDates.from = new Date(endDate)
      
      if (this.editedFirstTask !== true) {
        this.dueOnDate = null
      }
      
      this.editedFirstTask =  false

    },
    updateDueOnDate(edited_dueDate){
      let tempDate = window.luxon.DateTime.fromISO(edited_dueDate).toISODate()
      if(tempDate !== null && tempDate !== '') {
        this.updatedDate = edited_dueDate
      } else {
        this.updatedDate = window.luxon.DateTime.fromISO(edited_dueDate.toISOString()).toISODate()
      }
    }
  },
}
</script>
