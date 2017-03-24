<template>
    <messageBoard type="office" :id="id" :office="office"></messageBoard>
</template>

<script>
import messageBoard from './../partials/messageBoard'
    export default {
        props: ['id', 'office'],
        components: {
            messageBoard
        }
    }
</script>