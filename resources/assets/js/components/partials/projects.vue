<template>
    <div :class="{'hidden': (activeTab != 'projects')}">
        <!-- Create Project Form -->
        <div :class="{'hidden': !showCreateProjectForm}">
            <div class="absolute pin opacity-75 bg-grey"></div>
            <div id="create-project-form" class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Name" v-model="name">
                    <span class="hidden"></span>
                </p>
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Description" v-model="description">
                    <span class="hidden"></span>
                </p>
                <p class="py-2">
                    <button type="w-full submit" class="btn mr-4" @click="createProject">Create</button>
                    <button type="submit" class="btn bg-red-lighter hover:bg-red-light" @click="closeCreateProjectModal">Cancel</button>
                </p>
            </div>
        </div>

        <!-- Projects -->
        <div class="flex flex-row flex-wrap justify-center">
            <div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer" @click="openCreateProjectModal">
                <i class="fa fa-plus text-grey-dark text-4xl"></i>
                <span class="text-grey-darker pt-4">Add a new project</span>
            </div>
            <!-- Projects list -->
            <div v-for="project in projects" class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4">
                <span class="w-full h-16 pr-4 pt-2">
                    <i class="fas fa-ellipsis-h float-right text-grey-darker cursor-pointer"></i>
                </span>
                <a class="text-pink text-xl no-underline w-full pt-8 h-16 self-end" :href="project.url">{{ project.name }}</a>
                <span class="text-grey text-sm w-full h-16 self-start">{{ project.description }}</span>
                <div class="border-t w-full h-16 flex flex-row justify-around items-center px-2">
                    <a v-for="(member, index) in project.members" v-if="index < 5" :href="'/users/' + member.username">
                        <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-1">
                    </a>
                    <span v-if="project.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ project.members.length - 5 }}+</span>
                    <span v-if="project.members.length == 0" class="text-grey-dark text-center">No members yet</span>
                </div>
            </div>
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
                this.showCreateProjectForm = true;
            },
            closeCreateProjectModal () {
                this.showCreateProjectForm = false;
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