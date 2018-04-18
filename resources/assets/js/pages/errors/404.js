require('./../../bootstrap');
import navbar from './../../components/partials/navbar.vue';
import inviteModal from './../../components/partials/inviteModal.vue';

const app = new Vue({
    el: '#app',
    components: {
        navbar, inviteModal
    }
});