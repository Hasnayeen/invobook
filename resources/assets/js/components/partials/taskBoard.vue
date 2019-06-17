<template>
<div :class="{'hidden': (activeTab != 'tasks')}" class="w-full">
  <create-task-form ref="taskform" :resource="resource" :resourceType="resourceType" :form-shown="createTaskFormShown" :tasks="tasks" @close="closeCreateTaskForm"></create-task-form>

  <task-details v-if="task" :index="index" :resourceType="resourceType" :resourceId="resource.id" :task="task" :taskDetailsShown="taskDetailsShown" @delete="deleteTask" @close="closeTaskDetails"></task-details>

  <button @click="showCreateTaskForm" class="no-underline p-3 my-4 bg-white text-base text-teal-500 rounded shadow">{{ 'Create Task' | localize }}</button>

  <div class="flex flex-row flex-wrap md:-mx-1/20 lg:-mx-1/60 xl:-mx-1/40">
    <div v-for="(task, index) in tasks" @click="showTaskDetails(index)" :key="index" class="bg-white rounded shadow my-4 md:mx-1/20 lg:mx-1/60 xl:mx-1/40 flex flex-row p-4 no-underline items-center w-full md:w-2/5 lg:w-3/10 xl:w-1/5 h-24 border-l-2 border-teal-500 cursor-pointer">
      <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8 mr-2 self-start">
      <i v-else class="fas fa-question-circle fa-2x mx-2 self-start text-gray-800"></i>
      <div class="w-4/5 text-gray-800 text-left flex flex-col justify-between h-full">
        <p class="text-base mb-2 overflow-hidden">{{task.name}}</p>
        <p class="text-sm text-gray-600">
          Due by {{task.due_on}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
    }
  },
  data: () => ({
    createTaskFormShown: false,
    taskDetailsShown: false,
    tasks: [],
    task: {},
    index: null
  }),
  async created () {
    await this.getAllTasks()
    const id = new URL(location.href).searchParams.get('id')
    this.task = this.tasks.find(task => task.id === parseInt(id))
    if (id) {
      this.taskDetailsShown = true
    }
  },
  methods: {
    showCreateTaskForm () {
      this.createTaskFormShown = true
      this.$nextTick(() => {
        this.$refs.taskform.$refs.focusInput.focus()
      })
    },
    closeCreateTaskForm (newTask = null) {
      if (newTask) this.tasks.push(newTask)
      this.createTaskFormShown = false
    },
    async getAllTasks () {
      try {
        if (this.activeTab === 'tasks' && this.tasks.length < 1) {
          let { data } = await axios({
            url: '/tasks',
            params: {
              resource_type: this.resourceType,
              resource_id: this.resource.id
            }})
          this.tasks = data.tasks
          return this.tasks
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
    }
  },
  watch: {
    activeTab: 'getAllTasks'
  }
}
</script>
