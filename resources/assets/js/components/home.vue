<template>
<div class="columns is-multiline">
    <projects></projects>
    <teams></teams>
    <offices></offices>
    <activity></activity>
</div>
</template>

<script>
import projects from './partials/projects.vue'
import teams from './partials/teams.vue'
import offices from './partials/offices.vue'
import activity from './partials/activity.vue'
    export default {
        components: {
            projects, teams, offices, activity
        }
    }
</script>
