<template>
<login v-if="guest"></login>
</template>

<script>
import login from './auth/login.vue'
    export default {
        components: {
            login
        },
        data: () => ({
            guest: data.guest
        }),
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
