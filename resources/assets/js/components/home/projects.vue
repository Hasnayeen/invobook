<template>
<div>
    <!-- Create Project Form -->
    <div :class="{'hidden': !showCreateProjectForm}">
        <div class="absolute inset-0 opacity-75 bg-gray-500 z-10"></div>
        <div class="fixed inset-x-0 w-1/3 z-10 bg-gray-200 mx-auto p-8 rounded">
            <p class="py-2">
                <input ref="focusInput" class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800" type="text" placeholder="Name" v-model="name">
                <span class="hidden"></span>
            </p>
            <p class="py-2">
                <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800" type="text" placeholder="Description" v-model="description">
                <span class="hidden"></span>
            </p>
            <div class="flex flex-row justify-between pt-8 bg-gray-200 rounded">
                <button @click="closeCreateProjectModal" class="hover:font-bold text-red-400">Cancel</button>
                <button @click="createProject" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-4 rounded">Create</button>
            </div>
        </div>
    </div>

    <!-- Projects -->
    <div v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" class="text-center">
      <button @click="openCreateProjectModal" class="no-underline p-3 mb-4 bg-white text-center text-base text-teal-700 rounded shadow">{{ 'Add a new project' | localize }}</button>
    </div>
    <div class="flex flex-row flex-wrap justify-center">
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
      required: false,
      type: String
    }
  },

  data: () => ({
    showCreateProjectForm: false,
    name: '',
    description: '',
    user,
    faPlus
  }),

  created () {
    this.getAllProjects()
  },

  computed: mapState({
    projects: state => state.projects
  }),

  methods: {
    ...mapActions([
      'getProjects',
      'addProject'
    ]),
    getAllProjects () {
      if (this.projects.length < 1) {
        this.getProjects()
      }
    },
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
