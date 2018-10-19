<template>
<div :class="{'hidden': (activeTab != 'tasks')}" class="w-full">
  <create-task-form :resource="resource" :resourceType="resourceType" :form-shown="createTaskFormShown" @close="closeCreateTaskForm"></create-task-form>

  <task-details v-if="task" :index="index" :task="task" :taskDetailsShown="taskDetailsShown" @delete="deleteTask" @close="closeTaskDetails"></task-details>

  <button @click="showCreateTaskForm" class="no-underline p-3 my-4 bg-white text-base text-teal rounded shadow">{{ 'Create Task' | localize }}</button>

  <div class="flex flex-row flex-wrap md:-mx-1/20 lg:-mx-1/60 xl:-mx-1/40">
    <div v-for="(task, index) in tasks" @click="showTaskDetails(index)" :key="index" class="bg-white rounded shadow my-4 md:mx-1/20 lg:mx-1/60 xl:mx-1/40 flex flex-row p-4 no-underline items-center w-full md:w-2/5 lg:w-3/10 xl:w-1/5 h-24 border-l-2 border-teal cursor-pointer">
      <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8 mx-2 self-start">
      <i v-else class="fas fa-question-circle fa-2x mx-2 self-start text-grey-darker"></i>
      <div class="w-4/5 text-grey-darker text-left pl-2 flex flex-col justify-between h-full">
        <p class="text-base mb-2 overflow-hidden">{{task.name}}</p>
        <p class="text-sm text-grey-dark">
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
    }
  },
  data: () => ({
    createTaskFormShown: false,
    taskDetailsShown: false,
    tasks: [],
    task: {},
    index: null
  }),
  methods: {
    showCreateTaskForm () {
      this.createTaskFormShown = true
    },
    closeCreateTaskForm (newTask = null) {
      (newTask) ? this.tasks.push(newTask) : null
      this.createTaskFormShown = false
    },
    getAllTasks () {
      if (this.activeTab === 'tasks' && this.tasks.length < 1) {
        axios.get('/tasks', {
          params: {
            resource_type: this.resourceType,
            resource_id: this.resource.id
          }
        })
          .then((response) => {
            this.tasks = response.data.tasks
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
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
  },
  created () {
    this.getAllTasks()
  }
}
</script>
