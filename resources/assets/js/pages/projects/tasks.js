require('./../../bootstrap');

import navbar from './../../components/partials/navbar.vue';
import inviteModal from './../../components/partials/inviteModal.vue';
import tasks from './../../components/projects/tasks.vue';

const app = new Vue({
    el: '#app',
    components: {
        inviteModal, navbar, tasks
    }
});