<template>
<div class="columns is-multiline">
    <taskBoard></taskBoard>
    <discussionBoard></discussionBoard>
    <messageBoard></messageBoard>
    <schedule></schedule>
    <files></files>
    <activity></activity>
</div>
</template>

<script>
import taskBoard from './../partials/projects/taskBoard.vue'
import discussionBoard from './../partials/projects/discussionBoard.vue'
import messageBoard from './../partials/projects/messageBoard.vue'
import schedule from './../partials/projects/schedule.vue'
import files from './../partials/projects/files.vue'
import activity from './../partials/projects/activity.vue'

    export default {
        components: {
            taskBoard, discussionBoard, messageBoard, schedule, files, activity
        }
    }
</script>
