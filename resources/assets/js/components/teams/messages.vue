<template>
    <messages type="team" :id="id" :team="team"></messages>
</template>

<script>
import messages from './../partials/messages'
    export default {
        props: ['id', 'team'],
        components: {
            messages
        }
    }
</script>