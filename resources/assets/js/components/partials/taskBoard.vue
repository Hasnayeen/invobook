<template>
<div v-if="activeTab === 'tasks'" class="w-full">
  <create-task-form ref="taskform" :resource="resource" :resourceType="resourceType" :form-shown="createTaskFormShown" :tasks="tasks" :task="task" @close="closeCreateTaskForm"></create-task-form>

  <task-details v-if="task" :index="index" :resourceType="resourceType" :resourceId="resource.id" :task="task" :taskDetailsShown="taskDetailsShown" :statuses="statuses" @status-change="updateStatus" @delete="deleteTask" @close="closeTaskDetails"></task-details>

  <div v-if="authenticated" class="text-center">
    <button @click="showCreateTaskForm" class="no-underline p-3 my-4 bg-white text-center text-base text-teal-500 rounded shadow">{{ 'Create Task' | localize }}</button>
  </div>

  <div class="flex flex-row flex-wrap items-start lg:-mx-2 xl:mx-0">
    <div v-for="(task, index) in tasks" @click="showTaskDetails(index)" :key="task.id" class="bg-white rounded shadow my-4 md:mx-6 lg:mx-2 xl:mx-4 p-4 w-full md:w-72 xl:w-64  cursor-pointer">
      <div class="flex justify-between items-center">
        <p class="text-xs text-gray-700 flex flex-col">
          <span class="w-10 border-t-4" :style="'border-color:' + task.status.color"></span>
          <span class="text-xs">Due by</span>
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
  <div v-if="tasks.length === 0" class="flex flex-col items-center pt-8">
    <div class="pb-4">Don't you have Task to do? Go ahead, create one</div>
    <img src="/image/tasks.svg" alt="task list" class="w-96">
  </div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import createTaskForm from './../forms/createTaskForm.vue'
import taskDetails from './../partials/taskDetails.vue'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'

export default {
  components: {createTaskForm, taskDetails},
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
    authenticated,
    faQuestionCircle
  }),

  async created () {
    this.tasks = await this.getAllTasks(true)
    this.statuses = await this.getAllStatuses()
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
    }
  },

  computed: {
    ...mapState({
      selectedCycleId: state => state.cycle.selectedCycle ? state.cycle.selectedCycle.id : 0
    })
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
              cycle_id: this.selectedCycleId !== 0 ? this.selectedCycleId : null
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
        if (this.authenticated && this.statuses.length < 1) {
          let { data } = await axios({
            url: '/statuses',
          })
          return data.statuses
        }
      } catch (error) {
        console.error(error)
      }
    },
    showTaskDetails (index) {
      this.index = index
      this.task = this.tasks[index]
      this.taskDetailsShown = true
    },
    closeTaskDetails (editTask = false) {
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
    }
  },
}
</script>
