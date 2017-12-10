<template>
    <div class="container mx-auto w-3/5 mt-8">
        <div class="text-center text-grey-dark font-semibold text-3xl mb-4">
            Goodwork API
            <p class="text-base">December 5, 2017 - December 13, 2017</p>
        </div>
        <div class="flex flex-row flex-wrap justify-center">
            <taskBoard></taskBoard>
            <discussionBoard></discussionBoard>
            <messageBoard></messageBoard>
            <schedule></schedule>
            <files></files>
            <activity></activity>
        </div>
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
