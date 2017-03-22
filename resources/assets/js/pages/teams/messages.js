require('./../../bootstrap');

import navbar from './../../components/partials/navbar.vue';
import inviteModal from './../../components/partials/inviteModal.vue';
import messages from './../../components/teams/messages.vue';

const app = new Vue({
    el: '#app',
    components: {
        inviteModal, navbar, messages
    }
});