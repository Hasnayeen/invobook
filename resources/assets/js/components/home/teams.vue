<template>
<div>

  <!-- Create Team Form -->
  <div :class="{'hidden': !showCreateTeamForm}">
    <div class="absolute inset-0 opacity-75 bg-gray-500 z-10"></div>
    <div id="create-project-form" class="fixed inset-x-0 w-1/3 z-10 bg-gray-200 mx-auto p-8 rounded">
      <p class="py-2">
        <input ref="focusInput" class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800"
          type="text" placeholder="Name" v-model="name">
        <span class="hidden"></span>
      </p>
      <p class="py-2">
        <input class="w-full shadow appearance-none border rounded py-2 px-3 text-gray-800"
          type="text" placeholder="Description" v-model="description">
        <span class="hidden"></span>
      </p>
      <div class="flex flex-row justify-between pt-8 bg-gray-200 rounded">
        <button @click="closeCreateTeamModal" class="text-red-400 hover:font-bold">Cancel</button>
        <button @click="createNewTeam" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-3 px-4 rounded">Create</button>
      </div>
    </div>
  </div>

  <div v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" class="text-center">
    <button @click="openCreateTeamModal" class="no-underline p-3 mb-4 bg-white text-center text-base text-teal-700 rounded shadow">{{ 'Add a new team' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap justify-center">
    <team v-for="(team, index) in teams" :key="team.id" :index="index" :details="team"></team>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import team from './team'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { team },

  data: () => ({
    showCreateTeamForm: false,
    name: '',
    description: '',
    user,
    faPlus
  }),

  created () {
    this.getAllTeams()
  },  

  computed: mapState({
    teams: state => state.teams
  }),

  methods: {
    ...mapActions([
      'getTeams',
      'addTeam'
    ]),
    getAllTeams () {
      if (this.teams.length < 1) {
        this.getTeams()
      }
    },
    openCreateTeamModal () {
      this.showCreateTeamForm = true
      this.$nextTick(() => {
        this.$refs.focusInput.focus()
      })
    },
    closeCreateTeamModal () {
      this.showCreateTeamForm = false
    },
    createNewTeam () {
      this.addTeam({name: this.name, description: this.description})
      this.closeCreateTeamModal()
      this.name = ''
      this.description = ''
    }
  }
}
</script>
