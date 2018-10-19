<template>
    <div :class="{'hidden': (activeTab != 'teams')}">

        <!-- Create Team Form -->
        <div :class="{'hidden': !showCreateTeamForm}">
            <div class="absolute pin opacity-75 bg-grey"></div>
            <div id="create-project-form" class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                    	type="text" placeholder="Name" v-model="name">
                    <span class="hidden"></span>
                </p>
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                    	type="text" placeholder="Description" v-model="description">
                    <span class="hidden"></span>
                </p>
                <div class="flex flex-row justify-between pt-8 bg-grey-lighter rounded">
                    <button @click="closeCreateTeamModal" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
                    <button @click="createNewTeam" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded">Create</button>
                </div>
            </div>
        </div>

    	<div class="flex flex-row flex-wrap justify-center">
    		<div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer"
    			@click="openCreateTeamModal">
                <font-awesome-icon :icon="faPlus" class="text-grey-dark text-4xl"></font-awesome-icon>
                <span class="text-grey-darker pt-4">{{ 'Add a new team' | localize }}</span>
            </div>

          <team v-for="(team, index) in teams" :key="index" :details="team" @deleted="deleteTeam(index)"></team>
    	</div>

    </div>
</template>

<script>
import team from './team'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: { team },
  data: () => ({
    teams: data.teams.map((team) => {
      team.url = 'teams/' + team.id
      return team
    }),
    showCreateTeamForm: false,
    name: '',
    description: '',
    faPlus,
  }),
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  methods: {
    openCreateTeamModal () {
      this.showCreateTeamForm = true
    },
    closeCreateTeamModal () {
      this.showCreateTeamForm = false
    },
    createNewTeam () {
      axios.post('/teams', {
        name: this.name,
        description: this.description
      }).then((response) => {
        if (response.data.status == 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status)
          response.data.team.url = 'teams/' + response.data.team.id
          this.teams.push(response.data.team)
          this.showCreateTeamForm = false
        }
      }).catch((error) => {
        console.log(error)
          this.showCreateTeamForm = false
      })
    },
    deleteTeam(index) {
      this.teams.splice(index, 1)
    }
  }
}
</script>
