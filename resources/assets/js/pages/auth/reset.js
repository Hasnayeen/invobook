require('./../../bootstrap');
reset = require('./../../components/auth/reset.vue');

const app = new Vue({
    el: '#app',
    components: {
        reset
    }
});
