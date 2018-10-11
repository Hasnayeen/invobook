<template>
    <div :class="{'hidden': (activeTab != 'projects')}">
        <!-- Create Project Form -->
        <div :class="{'hidden': !showCreateProjectForm}">
            <div class="absolute pin opacity-75 bg-grey"></div>
            <div class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Name" v-model="name">
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
                <i class="fa fa-plus text-grey-dark text-4xl"></i>
                <span class="text-grey-darker pt-4">Add a new project</span>
            </div>

            <project v-for="(project, index) in projects" :key="index" :details="project" @deleted="deleteProject(index)"></project>
        </div>
    </div>
</template>

<script>
    import project from './project'

    export default {
      components: { project },
      data: () => ({
        projects: data.projects.map((project) => {
          project.url = 'projects/' + project.id
          return project
        }),
        showCreateProjectForm: false,
        name: '',
        description: ''
      }),
      props: {
        activeTab: {
          required: true,
          type: String
        }
      },
      methods: {
        openCreateProjectModal () {
          this.showCreateProjectForm = true
        },
        closeCreateProjectModal () {
          this.showCreateProjectForm = false
        },
        createProject () {
          axios.post('/projects', {
            name: this.name,
            description: this.description
          })
            .then((response) => {
              if (response.data.status == 'success') {
                EventBus.$emit('notification', response.data.message, response.data.status)
                response.data.project.url = 'projects/' + response.data.project.id
                this.projects.push(response.data.project)
                this.closeCreateProjectModal()
              }
            })
            .catch((error) => {
              EventBus.$emit('notification', error.response.data.message, error.response.data.status)
            })
        },
        deleteProject(index) {
          this.projects.splice(index, 1)
        }
      }
    }
</script>
