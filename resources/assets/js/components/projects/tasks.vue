<template>
    <div class="">
        <notification-popup :message="message" @close="closeNotification" :show-notification="showNotification"></notification-popup>

        <!-- Create Task Form -->
        <div :class="{'hidden': !createTaskFormShown}" class="absolute container mx-auto w-1/3 bg-white rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
            <div class="p-4">
                <div class="p-4">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Title <span class="text-grey capitalize">(required)</span>
                    </label>
                    <input v-model="title" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="New Task" required>
                </div>
                <div class="p-4">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Notes
                    </label>
                    <input v-model="notes" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Description">
                </div>
                <div class="p-4">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Assigned To <span class="text-grey capitalize">(required)</span>
                    </label>
                    <input v-model="assigned_to" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Assigned to" required>
                </div>
                <div class="p-4">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Due On <span class="text-grey capitalize">(required)</span>
                    </label>
                    <datepicker ref="dueOnDate" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-grey-lighter text-grey-darker" wrapper-class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"></datepicker>
                </div>
                <div class="p-4">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Related To
                    </label>
                    <input  v-model="related_to" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Task #12">
                </div>
            </div>
            <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
                <button @click="closeCreateTaskForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
                <button @click="createTask" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">Create</button>
            </div>
        </div>
        <div :class="{'hidden': !createTaskFormShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>

        <!-- Task list -->
        <div class="flex flex-col bg-white shadow container mx-auto mt-8 max-w-md rounded">
            <button @click.prevent="openCreateTaskForm" class="no-underline float-right border p-2 m-4 mb-0 text-base text-grey-darker rounded shadow self-end">Create Task</button>
            <header class="text-grey-darker text-2xl font-semibold text-center py-4 border-b">
                Tasks <span class="text-base font-normal">{{ taskCompleted }}/{{ tasks.length }}</span>
            </header>
            <div v-for="task in tasks" class="">
                <div class="flex flex-row items-center justify-start py-4 hover:bg-grey-lighter border-l-4 hover:border-teal border-transparent px-6 hover:cursor-pointer">
                    <i :class="[task.completed ? 'fas fa-check p-0 text-teal border-teal' : 'p-2 text-grey']" class="border-2 text-lg mr-6"></i>
                    <img class="rounded-full w-10" src="http://placehold.it/30x30" alt="Avater">
                    <div class="w-3/5 ml-6 text-grey-darkest">
                        {{ task.title }}
                        <div class="text-sm text-grey-darker pt-1">
                            <span class="text-xs text-grey">Due on</span> {{ task.due_on }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import NotificationPopup from '../partials/notificationPopup.vue'
export default {
  components: {Datepicker, NotificationPopup},
  props: ['project', 'tasks'],
  data: () => ({
    createTaskFormShown: false,
    title: '',
    notes: '',
    assigned_to: null,
    related_to: '',
    message: '',
    showNotification: false
  }),
  methods: {
    openCreateTaskForm () {
      this.createTaskFormShown = true
    },
    closeCreateTaskForm () {
      this.createTaskFormShown = false
    },
    createTask () {
      axios.post('/tasks', {
        title: this.title,
        notes: this.notes,
        assigned_to: this.assigned_to,
        related_to: this.related_to,
        due_on: this.$refs.dueOnDate.formattedValue,
        taskable_id: this.project.id,
        taskable_type: 'project'
      })
        .then((response) => {
          if (response.data.status == 'success') {
            this.createTaskFormShown = false
            this.message = 'New Task Created'
            this.showNotification = true
            this.title = ''
            this.notes = ''
            this.assigned_to = null
            this.related_to = ''
            setTimeout(() => {
              this.showNotification = false
            }, 2000)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    closeNotification () {
      this.showNotification = false
    }
  },
  computed: {
    taskCompleted () {
      return this.tasks.filter(task => task.completed).length
    }
  }
}
</script>
