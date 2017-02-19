import Vue from 'vue';
import home from './../components/home.vue';
import navbar from './../components/partials/navbar.vue';

const app = new Vue({
    el: '#app',
    components: {
        home, navbar
    }
});