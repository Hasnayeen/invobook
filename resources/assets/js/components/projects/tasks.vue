<template>
    <div class="">
        <notification-popup :message="message" @close="closeNotification" :show-notification="showNotification"></notification-popup>
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
        <div class="card">
            <header class="card-header">
                <a class="card-header-title has-text-centered">All Tasks</a>
            </header>
            <div>
                <a @click.prevent="openCreateTaskForm" class="" href="#">Create Task</a>
                <div class="card-content-item">
                    <div class="control is-grouped">
                        <p class="control is-expanded">
                            <img src="http://placehold.it/30x30" alt="Avater">
                            <label class="checkbox">
                                <input type="checkbox">
                                Lorem ipsum dolor sit amet
                            </label>
                        </p>
                        <p class="control">
                            10:15
                        </p>
                    </div>
                </div>
                <div class="card-content-item">
                    <div class="control is-grouped">
                        <p class="control is-expanded">
                            <img src="http://placehold.it/30x30" alt="Avater">
                            <label class="checkbox">
                                <input type="checkbox">
                                Lorem ipsum dolor sit amet
                            </label>
                        </p>
                        <p class="control">
                            10:15
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import NotificationPopup from "../partials/notificationPopup.vue";
export default {
    components: {Datepicker, NotificationPopup},
    props: ['project'],
    data: () => ({
        createTaskFormShown: false,
        title: '',
        notes: '',
        assigned_to: null,
        related_to: '',
        message: '',
        showNotification: false,
    }),
    methods: {
        openCreateTaskForm () {
            this.createTaskFormShown = true;
        },
        closeCreateTaskForm () {
            this.createTaskFormShown = false;
        },
        createTask () {
            axios.post('/tasks', {
                title: this.title,
                notes: this.notes,
                assigned_to: this.assigned_to,
                related_to: this.related_to,
                due_on: this.$refs.dueOnDate.formattedValue,
                taskable_id: this.project.id,
                taskable_type: 'project',
            })
            .then((response) => {
                if (response.data.status == 'success') {
                    this.createTaskFormShown = false;
                    this.message = 'New Task Created';
                    this.showNotification = true;
                    this.title = '';
                    this.notes = '';
                    this.assigned_to = null;
                    this.related_to = '';
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        closeNotification () {
            this.showNotification = false;
        }
    }
}
</script>
