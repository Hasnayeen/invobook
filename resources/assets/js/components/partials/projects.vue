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
          <div class="card-content">
            <div class="content">
                <div v-for="project in projects">
                    <a class="is-block has-text-centered" :href="project.url">{{ project.name }}</a>
                </div>
            </div>
          </div>
            <footer class="card-footer">
                <a class="card-footer-item" @click="openCreateProjectModal">Create a New Project</a>
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
                                    <input class="input" type="text" placeholder="Name">
                                </p>
                                <p class="control">
                                    <textarea class="textarea" placeholder="Description"></textarea>
                                </p>
                            </section>
                            <footer class="modal-card-foot">
                                <button type="button" class="button is-primary">Create Project</button>
                                <a class="button" @click="closeCreateProjectModal">Cancel</a>
                            </footer>
                        </div> <!-- ./modal-card -->
                    </div>
                    <button class="modal-close" @click="closeCreateProjectModal"></button>
                </div>
                <!-- ./modal -->

            </footer>
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
            isCreateProjectActive: false
        }),
        methods: {
            openCreateProjectModal () {
                this.isCreateProjectActive = true;
            },
            closeCreateProjectModal () {
                this.isCreateProjectActive = false;
            }
        }
    }
</script>