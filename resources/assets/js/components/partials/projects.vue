<template>
    <div class="column is-one-third">
        <div class="card justified">
          <header class="card-header">
            <a href="projects" class="card-header-title">
              Projects
            </a>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
                    <div v-for="project in projects">
                        <a class="is-block has-text-centered" :href="project.url">{{ project.name }}</a>
                    </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Create a New Project</a>
          </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            projects: data.projects.map((project) => {
                project.url = 'projects/' + project.slug;
                return project;
            })
        })
    }
</script>