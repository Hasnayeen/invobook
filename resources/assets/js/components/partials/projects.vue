<template>
    <div class="">
        <div class="flex flex-row flex-wrap justify-center">
            <div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4">
                <i class="fa fa-plus text-grey-dark text-4xl"></i>
                <span class="text-grey-darker pt-4">Add a new project</span>
            </div>
            <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4" v-for="project in projects">
                <span class="w-full h-16">
                    <i class="fa fa-ellipsis-h float-right pr-4 pt-2 text-grey-darker cursor-pointer"></i>
                </span>
                <a class="text-pink text-xl no-underline w-full pt-8 h-16 self-end" :href="project.url">{{ project.name }}</a>
                <span class="text-grey text-sm w-full h-16 self-start">{{ project.description }}</span>
                <div class="border-t w-full h-16 flex flex-row justify-start items-center px-2">
                    <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-2">
                    <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-2">
                    <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-2">
                    <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-2">
                    <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-2">
                    <span class="bg-grey-light p-2 rounded-full">5+</span>
                </div>
            </div>
        </div>
        <div class="card justified hidden">
            <footer class="card-footer">
                <a class="card-footer-item" @click="openCreateProjectModal">Create a New Project</a>
            </footer>
                <!-- modal for project create form -->
                <div class="modal hidden" :class="{'is-active': isCreateProjectActive}">
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