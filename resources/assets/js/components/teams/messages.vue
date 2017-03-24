<template>
    <messageBoard type="team" :id="id" :team="team"></messageBoard>
</template>

<script>
import messageBoard from './../partials/messageBoard'
    export default {
        props: ['id', 'team'],
        components: {
            messageBoard
        }
    }
</script>