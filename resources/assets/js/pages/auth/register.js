require('./../../bootstrap');
register = require('./../../components/auth/register.vue');

const app = new Vue({
    el: '#app',
    components: {
        register
    }
});
