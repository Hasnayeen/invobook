<template>
    <messageBoard type="project" :id="id" :project="project"></messageBoard>
</template>

<script>
import messageBoard from './../partials/messageBoard'
    export default {
        props: ['id', 'project'],
        components: {
            messageBoard
        }
    }
</script>