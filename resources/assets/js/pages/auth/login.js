require('./../../bootstrap');
login = require('./../../components/auth/login.vue');

const app = new Vue({
    el: '#app',
    components: {
        login
    }
});
