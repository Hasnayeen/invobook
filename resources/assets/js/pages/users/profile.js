require('./../../bootstrap');

import navbar from './../../components/partials/navbar.vue';
import inviteModal from './../../components/partials/inviteModal.vue';
import profile from './../../components/users/profile.vue';

const app = new Vue({
    el: '#app',
    components: {
        inviteModal, navbar, profile
    }
});