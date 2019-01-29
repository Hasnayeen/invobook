<template>
<div>
  <div class="absolute container mx-auto w-1/3 bg-white rounded shadow-lg z-10 mb-12 pb-4" style="top: 10vh;left: 0;right: 0;">
    <div class="text-grey-dark text-center py-4 flex flex-row justify-around items-center">
      <span></span>
      <span class="text-2xl">Your Github Repositories</span>
      <span @click="closeModal">
        <font-awesome-icon :icon="faTimes" class="cursor-pointer text-red-dark text-base"></font-awesome-icon>
      </span>
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
    <div v-if="accessTokenNotSet" class="p-8 text-grey-darker text-center text-lg">
      <div>Access Token is not set.</div>
      <div>Please set your Github Access Token in intregation settings on Admin page.</div>
    </div>
  </div>

  <div @click="closeModal" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
    repositories: [],
    accessTokenNotSet: false,
    faTimes
  }),
  created () {
    axios.get('/services/github/repos')
      .then((response) => {
        this.repositories = response.data.repos.data.viewer.repositories.nodes
      })
      .catch(() => {
        this.accessTokenNotSet = true
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
