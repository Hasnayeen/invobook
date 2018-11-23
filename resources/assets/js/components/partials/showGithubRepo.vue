<template>
<div>
  <div class="absolute container mx-auto w-1/3 bg-white rounded shadow-lg z-10 mb-12 pb-4" style="top: 10vh;left: 0;right: 0;">
    <div class="text-grey-dark text-center py-4 text-2xl">
      Your Github Repositories
    </div>
    <ul class="pl-0">
      <li v-for="(repository, index) in repositories" class="list-reset flex flex-row justify-between items-center py-4 px-8 hover:bg-blue-lightest">
        <div class="text-grey-darker text-xl">
          {{ repository.name }}
        </div>
        <div>
          <button @click="connectGithubRepo(repository.id, repository.name)" class="text-teal-dark font-semibold text-sm border border-teal-light p-2 rounded">Connect</button>
        </div>
      </li>
    </ul>
  </div>

  <div @click="closeModal" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
export default {
  props: {
    entityType: {
      required: true,
      type: String
    },
    entityId: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    repositories: []
  }),
  created () {
    axios.get('/services/github/repos')
      .then((response) => {
        this.repositories = response.data.repos.data.viewer.repositories.nodes
      })
      .catch((error) => {
        console.error(error.response.data.message())
      })
  },
  methods: {
    closeModal () {
      this.$emit('close-github-repo-modal')
    },
    connectGithubRepo (id, name) {
      axios.post('/services/github/connected-repos', {
        github_repo_id: id,
        repo_name: name,
        entity_type: this.entityType,
        entity_id: this.entityId
      })
        .then((response) => {
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
}
</script>
