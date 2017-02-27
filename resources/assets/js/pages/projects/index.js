require('./../../bootstrap');

import navbar from './../../components/partials/navbar.vue';
import inviteModal from './../../components/partials/inviteModal.vue';
import list from './../../components/projects/list.vue';

const app = new Vue({
    el: '#app',
    components: {
        inviteModal, navbar, list
    }
});