<template>
    <div class="projects-list is-fullwidth">
        <h1 class="has-text-centered">All Projects</h1>
        <ul>
            <li v-for="project in projects">
                <a href="#">{{ project.name }}</a>
                <span>{{ project.description }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: () => ({
            projects: data.projects
        })
    }
</script>