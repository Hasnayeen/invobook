<template>
    <div class="container mx-auto w-3/5 mt-8">
        <div class="flex flex-row justify-around mb-8 pb-3 border-b-2 text-grey">
            <span :class="{'text-grey-darkest font-semibold border-teal border-b-4 pb-3 -mb-4':(active === 'projects')}">
                Projects
            </span>
            <span>
                Teams
            </span>
            <span>
                Offices
            </span>
        </div>
        <projects></projects>
        <teams></teams>
        <offices></offices>
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
        },
        data: () => ({
            active: "projects",
        })
    }
</script>
