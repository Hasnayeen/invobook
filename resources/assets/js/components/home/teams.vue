<template>
<div>
  <!-- Create Team Form -->
  <div :class="{'hidden': !showCreateTeamForm}">
    <div @click="closeCreateTeamModal" class="absolute inset-0 opacity-25 bg-black z-50"></div>
    <div class="fixed inset-x-0 lg:max-w-lg z-50 mx-auto rounded">
      <div class="bg-white p-6 rounded-t-lg">
        <div class="flex justify-between items-center pb-2">
          <div class="text-lg text-gray-800">{{ 'Create new team' | localize }}</div>
          <div @click="closeCreateTeamModal">
            <font-awesome-icon :icon="faTimes" class="text-gray-600 cursor-pointer"></font-awesome-icon>
          </div>
        </div>
        <p class="py-2">
          <label for="title" class="text-sm text-gray-700">{{ 'Title' | localize }}</label>
          <input name="title" ref="focusInput" class="w-full appearance-none border rounded mt-2 py-2 px-3 text-gray-800" type="text" v-model="name">
          <span class="hidden"></span>
        </p>
        <p class="py-2">
          <label for="description" class="text-sm text-gray-700">{{ 'Description' | localize }}</label>
          <textarea name="description" id="" cols="30" rows="2" v-model="description" class="w-full appearance-none resize-none border rounded mt-2 py-2 px-3 text-gray-800"></textarea>
          <span class="hidden"></span>
        </p>
      </div>
      <div class="flex flex-row justify-end bg-gray-200 p-6 rounded-b-lg">
        <button @click="closeCreateTeamModal" class="border bg-white py-2 px-3 mr-4 rounded">{{ 'Cancel' | localize }}</button>
        <button @click="createTeam" class="bg-indigo-400 text-white font-medium hover:bg-indigo-600 py-2 px-3 rounded">{{ 'Create' | localize }}</button>
      </div>
    </div>
  </div>

  <div v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" class="pb-4">
    <button @click="openCreateTeamModal" class="no-underline p-4 flex flex-col items-center text-center text-lg text-indigo-700 rounded border-2 border-gray-500 border-dashed">
      <font-awesome-icon :icon="faPlus" class="text-sm"></font-awesome-icon>
      {{ 'Create new team' | localize }}
    </button>
  </div>

  <!-- Teams -->
  <div class="my-4 pb-1 border-b border-gray-400">
    {{ 'All Teams' | localize }} ({{ teams.length }})
  </div>
  <div id="teams-list" class="sm:-mx-4 md:-mx-12 lg:-mx-4 xl:-mx-10 flex flex-row flex-wrap justify-start">
    <team v-for="(team, index) in teams" :key="team.id" :index="index" :details="team"></team>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import team from './team'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { team },

  data: () => ({
    showCreateTeamForm: false,
    name: '',
    description: '',
    user,
    faPlus,
    faTimes
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
    createTeam () {
      this.addTeam({name: this.name, description: this.description})
      this.closeCreateTeamModal()
      this.name = ''
      this.description = ''
    }
  }
}
</script>
