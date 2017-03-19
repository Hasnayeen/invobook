require('./../../bootstrap');

import teams from './../../components/partials/teams.vue';
import createTeamModal from './../../components/partials/teams/createTeamModal.vue';

const app = new Vue({
    el: '#app',
    components: {
        createTeamModal,teams
    }
});