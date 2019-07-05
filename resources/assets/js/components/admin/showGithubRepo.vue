<template>
<div class="p-8 pt-0">
  <div class="bg-white rounded border border-indigo-300">
    <div class="text-gray-700 bg-gray-100 py-4 px-8 flex flex-row justify-between items-center rounded-t">
      <span class="text-2xl">All Repos</span>
    </div>
    <ul class="pl-0">
      <li v-for="(repository, index) in repositories" class="list-reset flex flex-row justify-between items-center py-4 px-8 hover:bg-blue-100">
        <div class="text-gray-800 text-xl">
          {{ repository.name ? repository.name : repository.repo_name }}
        </div>
        <div>
          <button v-if="repository.github_repo_id" @click="connectGithubRepo(repository.id, repository.name)" class="text-teal-600 font-semibold text-sm border border-teal-400  p-2 rounded">Disconnect</button>
          <button v-else @click="connectGithubRepo(repository.id, repository.name)" class="text-teal-600 font-semibold text-sm border border-teal-400  p-2 rounded">Connect</button>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    active: {
      required: true,
      type: Boolean
    }
  },

  data: () => ({
    repositories: [],
    faTimes
  }),

  async created () {
    try {
      if (this.active) {
        let {data} = await axios({
            url: '/services/github/connected-repos'
          })
        this.repositories = data.repos
        if (this.repositories.length === 0) {
          axios.get('/services/github/repos')
            .then((response) => {
              this.repositories = response.data.repos.data.viewer.repositories.nodes
            })
            .catch(() => {
              console.error(error)
            })
        }
      }
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    ...mapActions([
      'showNotification'
    ]),
    connectGithubRepo (id, name) {
      axios.post('/services/github/connected-repos', {
        github_repo_id: id,
        repo_name: name,
        entity_type: this.entityType,
        entity_id: this.entityId
      })
        .then((response) => {
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
