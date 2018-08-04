<template>
<div :class="{'hidden': (activeTab != 'tasks')}" class="w-full">
  <create-task-form :project="project" :form-shown="createTaskFormShown" @close="closeCreateTaskForm"></create-task-form>
  <button @click="showCreateTaskForm" class="no-underline p-2 my-4 mb-0 bg-white text-base text-grey-darker rounded shadow">Create Task</button>
  <div class="mb-2 mt-8 text-grey-dark text-xl">
    Design To-Do
  </div>
  <div class="flex flex-row flex-wrap md:-mx-1/20 lg:-mx-1/60 xl:-mx-1/40">
    <div v-for="task in tasks" class="bg-white rounded shadow my-4 md:mx-1/20 lg:mx-1/60 xl:mx-1/40 flex flex-row p-4 no-underline items-center w-full md:w-2/5 lg:w-3/10 xl:w-1/5 h-24 border-l-2 border-teal">
      <img v-if="task.assigned_to" :src="task.user.avatar" class="rounded-full w-8 h-8 mx-2 self-start">
      <i v-else class="fas fa-question-circle fa-2x mx-2 self-start text-grey-darker"></i>
      <div class="w-4/5 text-grey-darker text-left pl-2 flex flex-col justify-between h-full">
        <p class="text-base pb-2">{{task.title}}</p>
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
export default {
  components: {createTaskForm},
  props: {
    project: {
      required: true,
      type: Object
    },
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    createTaskFormShown: false,
    tasks: []
  }),
  created: function () {
    axios.get('/projects/' + this.project.slug + '/tasks')
      .then((response) => {
        this.tasks = response.data.tasks
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    showCreateTaskForm () {
      this.createTaskFormShown = true
    },
    closeCreateTaskForm (newTask = null) {
      (newTask) ? this.tasks.push(newTask) : null ;
      this.createTaskFormShown = false
    },
  }
}
</script>
