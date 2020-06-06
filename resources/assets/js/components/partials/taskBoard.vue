<template>
<div id="task-container" v-if="activeTab === 'tasks'" class="w-full">
  <create-task-form ref="taskform" :resource="resource" :resourceType="resourceType" :form-shown="createTaskFormShown" :tasks="tasks" :task="task" @close="closeCreateTaskForm"></create-task-form>

  <task-details v-if="task" :index="index" :resourceType="resourceType" :resourceId="resource.id" :task="task" :taskDetailsShown="taskDetailsShown" :statuses="statuses" @status-change="updateStatus" @delete="deleteTask" @close="closeTaskDetails"></task-details>

  <div v-if="authenticated" class="my-4 flex items-center">
    <button @click="showCreateTaskForm" class="no-underline px-3 py-2 my-4 bg-white text-center text-base text-white bg-indigo-500 border border-indigo-500 rounded shadow">{{ 'Create Task' | localize }}</button>
    <button @click="toggleFilter" class="no-underline px-3 py-2 m-4 text-center text-base rounded bg-white border border-gray-500">
      <font-awesome-icon :icon="faFilter"
        class="pointer-events-none items-center text-gray-600 mr-1">
      </font-awesome-icon>
      {{ 'Filter' | localize }}
    </button>
    <div class="bg-white rounded flex items-center">
      <div :class="{'bg-gray-700 text-white': view === 'row'}" @click="changeView('row')" class="border-r py-2 px-4 cursor-pointer rounded-l">
        <font-awesome-icon :icon="faThLarge"
          class="pointer-events-none items-center mr-1">
        </font-awesome-icon>
      </div>
      <div :class="{'bg-gray-700 text-white': view === 'column'}" @click="changeView('column')" class="py-2 px-4 cursor-pointer rounded-r">
        <font-awesome-icon :icon="faThList"
          class="pointer-events-none items-center mr-1">
        </font-awesome-icon>
      </div>
    </div>
  </div>

  <!-- Task Filters -->
  <div v-if="filterShown" class="mb-8">
    <div class="border-t border-b border-gray-400">
      <div class="pb-1 pt-2">{{'Status' | localize }}</div>
      <div class="inline-flex rounded shadow">
        <div
          v-for="(status, index) in statuses"
          @click="selectStatusFilter(status.id)"
          class="p-2 cursor-pointer"
          :class="[statusFilter === status.id ? 'bg-indigo-200 text-indigo-800 font-medium' : 'bg-gray-100', index === 0 ? 'rounded-l' : 'border-l-2', index + 1 === statuses.length ? 'rounded-r' : '']">
          {{ status.name | localize  }}
        </div>
      </div>
      <div class="flex flex-row flex-wrap text-gray-700">
        <div class="p-4 pl-0">
          <div class="pb-1 flex justify-between items-center">
            <div class="">{{'Assigned To' | localize }}</div>
            <div @click="clearUserFilter" class="text-xs font-medium border-b border-indigo-500 cursor-pointer">{{'Clear' | localize }}</div>
          </div>
          <div class="flex flex-row items-center relative w-64">
            <select v-model="userFilter" class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-1 px-4 pr-8">
              <option selected disabled hidden value="">{{ 'Select a User' | localize }}</option>
                <template v-for="member in members">
                  <option :value="member.user_id" class="my-2 text-lg">{{ member.name }}</option>
                </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="pointer-events-none items-center text-gray-600 absolute right-0 mr-3">
            </font-awesome-icon>
          </div>
        </div>
        <div class="p-4">
          <div class="pb-1 flex justify-between items-center">
            <div class="">{{'Tags' | localize }}</div>
            <div @click="clearTagFilter" class="text-xs font-medium border-b border-indigo-500 cursor-pointer">{{'Clear' | localize }}</div>
          </div>
          <div class="flex flex-row items-center relative w-64">
            <select v-model="tagFilter" class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-1 px-4 pr-8">
              <option selected disabled hidden value="">{{ 'Select a Tag' | localize }}</option>
                <template v-for="tag in tags">
                  <option :value="tag.tag_id" class="my-2 text-lg">{{ tag.label }}</option>
                </template>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="pointer-events-none items-center text-gray-600 absolute right-0 mr-3">
            </font-awesome-icon>
          </div>
        </div>
        <div class="p-4">
          <div class="pb-1 flex justify-between items-center">
            <div class=""> {{ 'Due On' | localize }} </div>
            <div @click="clearDateFilter" class="text-xs font-medium border-b border-indigo-500 cursor-pointer">{{'Clear' | localize }}</div>
          </div>
          <datepicker v-model="dateFilter" ref="dueOnDate" :placeholder="$options.filters.localize('Select Date')" format="yyyy-MM-dd" input-class="w-full block appearance-none bg-white border border-gray-500 rounded text-gray-800 py-1 px-4 pr-8" wrapper-class=""></datepicker>
        </div>
      </div>
    </div>
  </div>
  <!-- Task Filters -->

  <!-- Task List -->
  <div :class="[ view === 'row' ? '' : 'grid grid-cols-5 gap-4']">
    <div v-for="(tasks, name) in groupedTasks">
      <div class="pb-2 flex items-center font-semibold">
        <span class="pr-1 text-gray-600">
          {{ name }}
        </span>
        <span class="text-sm">
          ({{ tasks.length }})
        </span>
        <font-awesome-icon :icon="faAngleDoubleRight"
          class="pointer-events-none items-center text-gray-600 ml-1">
        </font-awesome-icon>
      </div>
      <div class="flex flex-row flex-wrap items-start lg:-mx-2 xl:-mx-4 lg:-mt-4 pb-2">
        <div v-for="(task, index) in tasks" @click="showTaskDetails(name, index, task.serial, task.id)" :key="task.id" class="bg-white rounded shadow my-4 md:mx-6 lg:mx-2 xl:mx-4 p-4 w-full md:w-72 lg:w-64  cursor-pointer">
          <div class="flex justify-between items-center">
            <p class="text-xs text-gray-700 flex flex-col">
              <span class="w-10 border-t-4" :style="'border-color:' + task.status.color"></span>
              <span class="text-xs">{{'Due on' | localize }}</span>
              <span class="text-sm text-indigo-700 font-medium">{{dueOn(task.due_on)}}</span>
            </p>
            <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8" :title="task.user.name">
            <font-awesome-icon v-else :icon="faQuestionCircle" class="text-gray-500 fa-2x" title="Not Assigned"></font-awesome-icon>
          </div>
          <div class="text-gray-700 text-left pt-2">
            <p class="font-medium text-lg overflow-hidden">{{task.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="tasks.length === 0" class="flex flex-col items-center pt-8">
    <div class="pb-4">{{'Don\'t you have Task to do? Go ahead, create one' | localize }}</div>
    <img src="/image/tasks.svg" alt="task list" class="w-96">
  </div>
  <!-- Task List -->

</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { mapState } from 'vuex'
import createTaskForm from './../forms/createTaskForm.vue'
import taskDetails from './../partials/taskDetails.vue'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight'
import { faThLarge } from '@fortawesome/free-solid-svg-icons/faThLarge'
import { faThList } from '@fortawesome/free-solid-svg-icons/faThList'

export default {
  components: {createTaskForm, taskDetails, Datepicker},
  props: {
    resource: {
      required: true,
      type: Object
    },
    resourceType: {
      required: true,
      type: String
    },
    activeTab: {
      required: true,
      type: String
    },
    activeId: {
      required: false,
      type: Number
    },
  },

  data: () => ({
    createTaskFormShown: false,
    taskDetailsShown: false,
    tasks: [],
    task: {},
    statuses: [],
    index: null,
    filterShown: false,
    statusFilter: null,
    userFilter: '',
    tagFilter: '',
    dateFilter: null,
    view: 'row',
    authenticated,
    faQuestionCircle,
    faChevronDown,
    faSpinner,
    faFilter,
    faAngleDoubleRight,
    faThLarge,
    faThList
  }),

  async created () {
    this.statuses = await this.getAllStatuses()
    this.tasks = await this.getAllTasks(true)
    var id = new URL(location.href).searchParams.get('id')
    if (this.tasks) {
      this.task = this.tasks.find(task => task.id === parseInt(id))
      this.tasks.some((item, i) => {
          this.index = i
          return item.id == id
      })
    }
    if (id) {
      this.taskDetailsShown = true
    }
  },

  watch: {

    activeTab: function () {
      this.getAllTasks(false)
    },
    selectedCycleId: function () {
      this.getAllTasks(true)
    },
    statusFilter: function () {
      this.getAllTasks(true)
    },
    userFilter: function () {
      this.getAllTasks(true)
    },
    tagFilter: function () {
      this.getAllTasks(true)
    },
    dateFilter: function () {
      this.getAllTasks(true)
    }
  },

  computed: {
    ...mapState({
      selectedCycleId: state => state.cycle.selectedCycle ? state.cycle.selectedCycle.id : 0,
      members: state => state.members,
      tags: state => state.tags,
    }),
    groupedTasks: function () {
      var tasks = this.tasks.map(function (item, index) {
        item['serial'] = index
        return item
      })
      var tasks = this.tasks.reduce(function(accumulator, currentElement) {
        let key = (currentElement['status']['name']);

        (accumulator[key] ? accumulator[key] : (accumulator[key] = null || [])).push(currentElement);
        return accumulator;
      }, {});

      return tasks
    }
  },

  methods: {
    dueOn: function (value) {
      return luxon.DateTime.fromSQL(value).toFormat('d LLL')
    },
    showCreateTaskForm () {
      this.createTaskFormShown = true
      this.$nextTick(() => {
        this.$refs.taskform.$refs.focusInput.focus()
      })
    },
    closeCreateTaskForm (newTask = null, editedTask = null) {
      if (newTask && (this.selectedCycleId === 0 || this.selectedCycleId === newTask.cycle_id)) {
        this.tasks.push(newTask)
      } else if (editedTask && (this.selectedCycleId === 0 || this.selectedCycleId === editedTask.cycle_id)) {
        this.tasks.splice(this.index, 1, editedTask)
      }
      this.createTaskFormShown = false
      this.task = null
    },
    async getAllTasks (update = false) {
      try {
        if (this.activeTab === 'tasks' && (this.tasks.length < 1 || update)) {
          let { data } = await axios({
            url: '/tasks',
            params: {
              resource_type: this.resourceType,
              resource_id: this.resource.id,
              cycle_id: this.selectedCycleId !== 0 ? this.selectedCycleId : null,
              status_id: this.statusFilter,
              assigned_to: this.userFilter,
              tag_id: this.tagFilter,
              due_on: this.dateFilter ? window.luxon.DateTime.fromISO(this.dateFilter.toISOString()).toISODate() : null
            }})
          this.tasks = data.tasks
          return data.tasks
        }
        return []
      } catch (error) {
        console.error(error)
      }
    },
    async getAllStatuses () {
      try {
        if (this.statuses.length < 1) {
          let { data } = await axios({
            url: '/statuses',
          })
          return data.statuses
        }
      } catch (error) {
        console.error(error)
      }
    },
    showTaskDetails (key, index, serial, id) {
      this.updateUrl({"id": id})
      this.index = serial
      this.task = this.groupedTasks[key][index]
      this.taskDetailsShown = true
    },
    closeTaskDetails (editTask = false) {
      this.updateUrl({"id": null})
      this.taskDetailsShown = false
      if (editTask) {
        this.createTaskFormShown = true
      } else {
        this.task = null
      }
    },
    deleteTask (index) {
      this.tasks.splice(index, 1)
    },
    updateStatus (newValue) {
      this.$set(this.tasks, newValue.index, newValue.task)
      this.task = newValue.task
    },
    selectStatusFilter (id) {
      this.statusFilter = this.statusFilter === id ? null : id
    },
    clearUserFilter () {
      this.userFilter = ''
    },
    clearTagFilter () {
      this.tagFilter = ''
    },
    clearDateFilter () {
      this.dateFilter = null
    },
    toggleFilter () {
      this.filterShown = ! this.filterShown
    },
    changeView (view) {
      this.view = view
    }
  },
}
</script>
