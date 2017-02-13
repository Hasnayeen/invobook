require('./../../bootstrap');
email = require('./../../components/auth/email.vue');

const app = new Vue({
    el: '#app',
    components: {
        email
    }
});
