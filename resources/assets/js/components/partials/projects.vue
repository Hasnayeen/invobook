<template>
<div :class="{'hidden': (activeTab != 'projects')}">
    <!-- Create Project Form -->
    <div :class="{'hidden': !showCreateProjectForm}">
        <div class="absolute pin opacity-75 bg-grey z-10"></div>
        <div class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
            <p class="py-2">
                <input ref="focusInput" class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Name" v-model="name">
                <span class="hidden"></span>
            </p>
            <p class="py-2">
                <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Description" v-model="description">
                <span class="hidden"></span>
            </p>
            <div class="flex flex-row justify-between pt-8 bg-grey-lighter rounded">
                <button @click="closeCreateProjectModal" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
                <button @click="createProject" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded">Create</button>
            </div>
        </div>
    </div>

    <!-- Projects -->
    <div class="flex flex-row flex-wrap justify-center">
        <div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer" @click="openCreateProjectModal">
            <font-awesome-icon :icon="faPlus" class="text-grey-dark text-4xl"></font-awesome-icon>
            <span class="text-grey-darker pt-4">{{ 'Add a new project' | localize }}</span>
        </div>

        <project v-for="(project, index) in projects" :key="project.id" :index="index" :details="project"></project>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import project from './project'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { project },
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    showCreateProjectForm: false,
    name: '',
    description: '',
    faPlus
  }),
  computed: mapState({
    projects: state => state.home.projects
  }),
  methods: {
    ...mapActions([
      'addProject'
    ]),
    openCreateProjectModal () {
      this.showCreateProjectForm = true
      this.$nextTick(() => {
        this.$refs.focusInput.focus()
      })
    },
    closeCreateProjectModal () {
      this.showCreateProjectForm = false
    },
    createProject () {
      this.addProject({name: this.name, description: this.description})
      this.closeCreateProjectModal()
      this.name = ''
      this.description = ''
    }
  }
}
</script>
