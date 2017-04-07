<template>
    <div class="column is-one-third">
        <div class="card justified">
          <header class="card-header">
            <a href="projects" class="card-header-title">
              Projects
            </a>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content homepage">
            <div class="content">
                <div class="menu-list" v-for="project in projects">
                    <a class="has-text-centered" :href="project.url">{{ project.name }}</a>
                </div>
            </div>
          </div>
            <footer class="card-footer">
                <a class="card-footer-item" @click="openCreateProjectModal">Create a New Project</a>
            </footer>
                <!-- modal for project create form -->
                <div class="modal" :class="{'is-active': isCreateProjectActive}">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="modal-card">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Create New Project</p>
                                <button class="delete" @click="closeCreateProjectModal"></button>
                            </header>
                            <section class="modal-card-body">
                                <p class="control">
                                    <input class="input" type="text" placeholder="Name" v-model="name">
                                </p>
                                <p class="control">
                                    <input class="input" type="text" placeholder="Description" v-model="description">
                                </p>
                            </section>
                            <footer class="modal-card-foot">
                                <button type="button" class="button is-primary" @click="createProject">Create Project</button>
                                <a class="button" @click="closeCreateProjectModal">Cancel</a>
                            </footer>
                        </div> <!-- ./modal-card -->
                    </div>
                    <button class="modal-close" @click="closeCreateProjectModal"></button>
                </div>
                <!-- ./modal -->
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            projects: data.projects.map((project) => {
                project.url = 'projects/' + project.slug;
                return project;
            }),
            isCreateProjectActive: false,
            name: '',
            description: ''
        }),
        methods: {
            openCreateProjectModal () {
                this.isCreateProjectActive = true;
            },
            closeCreateProjectModal () {
                this.isCreateProjectActive = false;
            },
            createProject () {
                axios.post('/projects', {
                    name: this.name,
                    description: this.description
                })
                .then((response) => {
                    if (response.data.status == 'success') {
                        response.data.project.url = 'projects/' + response.data.project.slug;
                        this.projects.push(response.data.project);
                        this.closeCreateProjectModal();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>