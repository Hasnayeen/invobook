<template>
<div v-if="activeTab === 'tasks'" class="w-full">
  <create-task-form ref="taskform" :resource="resource" :resourceType="resourceType" :form-shown="createTaskFormShown" :tasks="tasks" @close="closeCreateTaskForm"></create-task-form>

  <task-details v-if="task" :index="index" :resourceType="resourceType" :resourceId="resource.id" :task="task" :taskDetailsShown="taskDetailsShown" :statuses="statuses" @status-change="updateStatus" @delete="deleteTask" @close="closeTaskDetails"></task-details>

  <div class="text-center">
    <button @click="showCreateTaskForm" class="no-underline p-3 my-4 bg-white text-center text-base text-teal-500 rounded shadow">{{ 'Create Task' | localize }}</button>
  </div>

  <div class="flex flex-row flex-wrap items-start lg:-mx-2 xl:mx-0">
    <div v-for="(task, index) in tasks" @click="showTaskDetails(index)" :key="task.id" class="bg-white rounded shadow my-4 md:mx-6 lg:mx-2 xl:mx-4 p-4 w-full md:w-72 xl:w-64  cursor-pointer">
      <div class="flex justify-between items-center">
        <p class="text-xs text-gray-600 flex flex-col">
          <span class="w-10 border-t-4" :style="'border-color:' + task.status.color"></span>
          <span class="text-xs">Due by</span>
          <span class="text-sm text-gray-700">{{dueOn(task.due_on)}}</span>
        </p>
        <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8">
        <i v-else class="fas fa-question-circle fa-2x mx-2 self-start text-gray-800"></i>
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
    index: null
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
      selectedCycleId: state => state.selectedCycle ? state.selectedCycle.id : 0
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
    closeCreateTaskForm (newTask = null) {
      if (newTask && this.selectedCycleId === newTask.cycle_id) {
        this.tasks.push(newTask)
      }
      this.createTaskFormShown = false
    },
    async getAllTasks (update = false) {
      try {
        if (this.activeTab === 'tasks' && (this.tasks.length < 1 || update)) {
          let { data } = await axios({
            url: '/tasks',
            params: {
              resource_type: this.resourceType,
              resource_id: this.resource.id,
              cycle_id: this.selectedCycleId
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
    showTaskDetails (index) {
      this.index = index
      this.task = this.tasks[index]
      if (typeof this.task.user.username === 'undefined') {
        axios.get('/users')
          .then((response) => {
            for (let i = 0; i < response.data.users.length; i++) {
              if (response.data.users[i].id === this.task.user.id) {
                this.task.user.username = response.data.users[i].username
                this.task.user.name = response.data.users[i].name
              }
            }
            this.taskDetailsShown = true
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
      } else {
        this.taskDetailsShown = true
      }
    },
    closeTaskDetails () {
      this.taskDetailsShown = false
      this.task = {}
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
