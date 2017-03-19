<template>
    <div class="column is-one-third">
        <div class="card justified">
          <header class="card-header">
            <a href="teams" class="card-header-title">
              Teams
            </a>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
                    <div v-for="team in teams">
                        <a class="is-block has-text-centered" :href="team.url">{{ team.name }}</a>
                    </div>
            </div>
          </div>

          <createTeamModal></createTeamModal>

        </div>
    </div>
</template>

<script>
import createTeamModal from './teams/createTeamModal.vue'
    export default {
        data: () => ({
            teams: data.teams.map((team) => {
                team.url = 'teams/' + team.slug;
                return team;
            })
        }),
         components: {createTeamModal: createTeamModal}
    }
</script>