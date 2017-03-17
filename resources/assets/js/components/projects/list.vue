<template>
    <div class="column is-fullwidth">
        <div class="card">
            <header class="card-header">
                <a class="card-header-title has-text-centered">All Projects</a>
            </header>
            <div class="card-content-item" v-for="project in projects">
                <a href="#">{{ project.name }}</a>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            projects: data.projects
        })
    }
</script>